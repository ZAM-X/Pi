// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Referencias DOM
    const canvas = document.getElementById('mathCanvas');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('sidesSlider');
    const displaySides = document.getElementById('sidesDisplay');
    const displayPi = document.getElementById('piApprox');
    const displayError = document.getElementById('piError');
    const sysComment = document.getElementById('systemComment');
    const archiImg = document.getElementById('archiImg');
    const archiSpeech = document.getElementById('archiSpeech');
    const crashBtn = document.getElementById('crashBtn');
    
    // Constantes Core
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = 180;
    const REAL_PI = Math.PI;

    // Estado 
    let currentSides = 3;
    let lastSliderTime = Date.now();
    let isHistorical = false;
    let idleTimer;
    let slideCount = 0;

    // --- 1. MOTOR MATEMÁTICO Y DE RENDERIZADO ---
    function draw(sides) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Círculo Fijo
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = '#444';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Polígono Inscrito
        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
            const angle = (i * 2 * Math.PI) / sides;
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        // Color Dinámico del Polígono
        const ratio = sides / 500;
        ctx.strokeStyle = `rgb(${255}, ${50 + (205 * ratio)}, ${50 + (205 * ratio)})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Cálculos Matemáticos de Arquímedes
        // Lado = 2 * r * sin(PI / n)
        const sideLength = 2 * radius * Math.sin(Math.PI / sides);
        const perimeter = sides * sideLength;
        const piApprox = perimeter / (2 * radius);
        const error = Math.abs(REAL_PI - piApprox);

        updateStats(sides, piApprox, error);
        updateObsession(sides);
        checkReactions(sides, error);
    }

    function updateStats(sides, pi, error) {
        displaySides.textContent = sides;
        displayPi.textContent = pi.toFixed(9);
        displayError.textContent = error.toFixed(9);
    }

    // --- 2. SISTEMA DE CUARTA PARED ---
    function setComment(type) {
        const arr = appData.comments[type];
        if(!arr) return;
        const randomMsg = arr[Math.floor(Math.random() * arr.length)];
        sysComment.textContent = `> ${randomMsg}`;
    }

    function checkReactions(sides, error) {
        const now = Date.now();
        const timeDiff = now - lastSliderTime;
        
        // Detección de velocidad
        if (timeDiff < 30 && sides > 10 && sides < 490) {
            slideCount++;
            if(slideCount > 15) { setComment('fast'); slideCount = 0; }
        } else {
            slideCount = 0;
        }
        lastSliderTime = now;

        // Limpiar idle timer
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
            if(!isHistorical) setComment('idle');
        }, 10000); // 10s inactividad

        // Casos específicos
        if (sides == 3) setComment('triangle');
        if (sides == 500) setComment('maxOut');

        // Arquímedes Reactivo
        archiImg.classList.remove('archi-blink', 'archi-glow');
        if (error < 0.00005) { // Error muy pequeño
            archiImg.classList.add('archi-glow');
            archiSpeech.textContent = "Convergencia extrema, bro.";
            if(Math.random() > 0.9) setComment('convergencia');
        } else if (error < 0.01) {
            archiImg.classList.add('archi-blink');
            archiSpeech.textContent = "Casi lo tienes...";
        } else {
            archiSpeech.textContent = "Eureka, baby.";
        }
    }

    // --- 3. CONTADOR DE OBSESIÓN ---
    function updateObsession(sides) {
        const levels = appData.obsessionLevels;
        let currentLevel = levels[0];
        for (let i = levels.length - 1; i >= 0; i--) {
            if (sides >= levels[i].threshold) {
                currentLevel = levels[i];
                break;
            }
        }
        document.getElementById('obsessionTitle').textContent = currentLevel.name;
        document.getElementById('obsessionDesc').textContent = currentLevel.desc;
        const percentage = (sides / 500) * 100;
        document.getElementById('progressFill').style.width = `${percentage}%`;
    }

    // --- 4. DETECCIÓN DE CONSOLA (Hack básico) ---
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () { setComment('consoleOpen'); }
    });
    console.log('%cNo hay nada que robar aquí.', 'color: red; font-size: 20px', element);

    // --- 5. KEYLOGGER (COMANDOS SECRETOS) ---
    let keyBuffer = '';
    window.addEventListener('keydown', (e) => {
        keyBuffer += e.key.toLowerCase();
        if (keyBuffer.length > 5) keyBuffer = keyBuffer.slice(-5);

        // Modo Histórico (hist)
        if (keyBuffer.includes('hist') && !isHistorical) {
            activateHistoricalMode();
            keyBuffer = '';
        }

        // Rick Roll (shit)
        if (keyBuffer.includes('shit')) {
            activateRickRoll();
            keyBuffer = '';
        }
    });

    function activateHistoricalMode() {
        isHistorical = true;
        const app = document.getElementById('app-container');
        const overlay = document.getElementById('historicalOverlay');
        
        app.classList.add('hidden');
        overlay.classList.remove('hidden');
        
        document.getElementById('histTitle').textContent = appData.historicalText.title;
        document.getElementById('histBody').textContent = appData.historicalText.body;
        
        setTimeout(() => {
            overlay.classList.add('hidden');
            app.classList.remove('hidden');
            isHistorical = false;
            sysComment.textContent = "> Ok, esto ya se estaba poniendo súper aburrido.";
        }, 6000);
    }

    function activateRickRoll() {
        const app = document.getElementById('app-container');
        const overlay = document.getElementById('rickRollOverlay');
        
        app.classList.add('hidden');
        overlay.classList.remove('hidden');

        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 2000);
    }

    // --- 6. CRASHEO FALSO (BSOD) ---
    crashBtn.addEventListener('click', () => {
        const app = document.getElementById('app-container');
        const bsod = document.getElementById('bsodOverlay');
        
        app.classList.add('hidden');
        bsod.classList.remove('hidden');
        
        // Poner la pantalla completa si el navegador lo permite
        if(document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(()=>{});
        }

        setTimeout(() => {
            if(document.exitFullscreen) document.exitFullscreen().catch(()=>{});
            bsod.classList.add('hidden');
            app.classList.remove('hidden');
            slider.value = 3;
            draw(3);
            sysComment.textContent = "> Te dije que no tocaras eso. Tuve que reiniciar el universo.";
        }, 5000);
    });

    // --- 7. EVENTOS Y ANIMACIÓN INICIAL ---
    slider.addEventListener('input', (e) => {
        currentSides = parseInt(e.target.value);
        draw(currentSides);
    });

    setComment('intro');
    
    // Auto-aumentar al inicio para mostrar la interactividad
    let autoSides = 3;
    function autoAnimate() {
        if (autoSides <= 15) {
            slider.value = autoSides;
            draw(autoSides);
            autoSides++;
            setTimeout(autoAnimate, 80);
        }
    }
    
    draw(3);
    setTimeout(autoAnimate, 500);
});
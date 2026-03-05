document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('mathCanvas');
    const ctx = canvas.getContext('2d');
    const sidesInput = document.getElementById('sidesInput');
    const sysComment = document.getElementById('systemComment');
    const archiImg = document.getElementById('archiImg');
    
    let lastInputTime = Date.now();
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    function draw(sides) {
        if (sides < 3) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const cx = 225, cy = 225, r = 180;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.strokeStyle = '#222'; ctx.stroke();

        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
            const ang = (i * 2 * Math.PI) / sides;
            ctx.lineTo(cx + r * Math.cos(ang), cy + r * Math.sin(ang));
        }
        ctx.closePath();
        ctx.strokeStyle = '#ff3131'; ctx.lineWidth = 2; ctx.stroke();

        const piApprox = (sides * (2 * r * Math.sin(Math.PI / sides))) / (2 * r);
        document.getElementById('piApprox').textContent = piApprox.toFixed(9);
        const error = Math.abs(Math.PI - piApprox);
        document.getElementById('piError').textContent = error.toFixed(9);
        
        if (error < 0.000001) sysComment.textContent = "> " + getRandom(appData.comments.convergencia);
        updateUI(sides, error);
    }

    function updateUI(sides, error) {
        const levels = appData.obsessionLevels;
        let lvl = levels[0];
        levels.forEach(l => { if(sides >= l.threshold) lvl = l; });
        document.getElementById('obsessionTitle').textContent = lvl.name;
        document.getElementById('obsessionDesc').textContent = lvl.desc;
        document.getElementById('progressFill').style.width = Math.min((sides/1000)*100, 100) + '%';
        archiImg.classList.toggle('archi-glow', error < 0.001);
    }

    sidesInput.addEventListener('input', (e) => {
        const now = Date.now();
        const val = e.target.value.toLowerCase();

        if (now - lastInputTime < 50) sysComment.textContent = "> " + getRandom(appData.comments.fast);
        lastInputTime = now;

        if (val.includes('iddqd')) {
            document.getElementById('app-container').classList.add('hidden');
            document.getElementById('doom-stage').classList.remove('hidden');
            e.target.value = '';
        } 
        else if (val.includes('shit')) {
            const overlay = document.getElementById('rickRollOverlay');
            document.getElementById('rickRollMsg').textContent = getRandom(appData.comments.rickRoll);
            document.getElementById('app-container').classList.add('hidden');
            overlay.classList.remove('hidden');
            setTimeout(() => { window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; }, 3000);
        }
        else if (val.includes('hist')) {
            showOverlay('historicalOverlay');
            e.target.value = '';
        } 
        else {
            const num = parseInt(val.replace(/\D/g, ''));
            if (!isNaN(num)) {
                if (num === 3) sysComment.textContent = "> " + getRandom(appData.comments.triangle);
                if (num > 100000) sysComment.textContent = "> " + getRandom(appData.comments.maxOut);
                draw(num);
            }
        }
    });

    document.getElementById('consoleTrigger').addEventListener('click', () => {
        if (!window.taps) window.taps = 0;
        window.taps++;
        if(window.taps === 5) {
            sysComment.textContent = "> " + getRandom(appData.comments.consoleOpen);
            window.taps = 0;
        }
        setTimeout(() => window.taps = 0, 2000);
    });

    document.getElementById('exit-doom-btn').addEventListener('click', () => {
        document.getElementById('doom-stage').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        document.getElementById('doom-iframe').src = document.getElementById('doom-iframe').src;
    });

    document.getElementById('crashBtn').addEventListener('click', () => {
        document.getElementById('app-container').classList.add('hidden');
        document.getElementById('bsodOverlay').classList.remove('hidden');
        setTimeout(() => location.reload(), 4000);
    });

    function showOverlay(id) {
        const el = document.getElementById(id);
        if(id === 'historicalOverlay') {
            document.getElementById('histTitle').textContent = appData.historicalText.title;
            document.getElementById('histBody').textContent = appData.historicalText.body;
        }
        el.classList.remove('hidden');
    }

    draw(3);
});
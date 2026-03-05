// data.js
const appData = {
    comments: {
        intro: [
            "Bienvenido al 250 a.C. Mueve el slider si sabes cómo.",
            "Vamos a calcular π. O al menos a intentarlo."
        ],
        triangle: [
            "Eso es un triángulo. Ni lo estás intentando.",
            "Wow, 3 lados. Qué innovador. Arquímedes está llorando.",
            "¿Te duele el dedo o por qué no lo mueves más?"
        ],
        maxOut: [
            "Ok... ya entendimos que te obsesiona π.",
            "500 lados. Tu procesador está empezando a sudar.",
            "Estás a punto de invocar a un demonio geométrico."
        ],
        fast: [
            "¡Relájate, velocista! No estás hackeando la NASA.",
            "Vas a romper el slider a este paso.",
            "Cálmate. Respira. Es solo geometría."
        ],
        idle: [
            "¿Hola? ¿Sigues ahí?",
            "Yo cobro por hora, amigo. Haz algo.",
            "El universo se expande mientras tú miras la pantalla sin hacer nada."
        ],
        convergencia: [
            "CONVERGENCIA CASI PERFECTA. Tiembla, calculadora.",
            "Ese error es tan pequeño que ni con microscopio."
        ],
        consoleOpen: [
            "¿Buscando errores en la consola? Qué nerd.",
            "¡Hey! Cierra las DevTools, aquí no hay nada que robar."
        ]
    },
    obsessionLevels: [
        { threshold: 3, name: "Nivel 1: Modo Cavernícola", desc: "Formas puntiagudas. Fuego bueno." },
        { threshold: 10, name: "Nivel 2: Curiosidad Sospechosa", desc: "Empiezas a ver que se parece a un círculo." },
        { threshold: 50, name: "Nivel 3: Obsesión Matemática Leve", desc: "Ya le estás pillando el gusto a esto." },
        { threshold: 200, name: "Nivel 4: Trastorno Geométrico", desc: "¿Ves polígonos cuando cierras los ojos?" },
        { threshold: 450, name: "Nivel 5: Entidad Trascendental de π", desc: "Has trascendido. Eres uno con el círculo." }
    ],
    historicalText: {
        title: "El Método de Exhausción",
        body: "Arquímedes de Siracusa (c. 287 a.C. – c. 212 a.C.) aproximó el valor de π inscribiendo y circunscribiendo polígonos regulares en un círculo. A medida que aumenta el número de lados, el perímetro del polígono se acerca a la circunferencia del círculo, permitiendo deducir el valor de Pi con gran precisión para la época."
    }
};
// data.js
const appData = {
    comments: {
        intro: [
            "Bienvenido al 250 a.C. Escribe lados en la caja si te atreves.",
            "Vamos a calcular π. O al menos a intentarlo. Pon un número."
        ],
        triangle: [
            "Eso es un triángulo. Ni lo estás intentando.",
            "Wow, 3 lados. Qué innovador. Arquímedes está llorando.",
            "Pon más lados o me aburriré."
        ],
        maxOut: [
            "¿Un millón de lados? Tu procesador está empezando a sudar de verdad.",
            "Estás a punto de invocar a un demonio geométrico del hiperespacio.",
            "Esa geometría ya es indistinguible de la magia negra."
        ],
        fast: [
            "¡Relájate, velocista! No estás hackeando la NASA. Escribe más despacio.",
            "Cálmate. Respira. Es solo geometría, no una carrera."
        ],
        idle: [
            "¿Hola? ¿Sigues ahí? Pon un número.",
            "Yo cobro por hora, amigo. Haz algo o me iré a comer chimichangas.",
            "El universo se expande mientras tú no pones ni un lado."
        ],
        convergencia: [
            "CONVERGENCIA CASI PERFECTA. Tiembla, calculadora. Arquímedes sonríe.",
            "Ese error es tan pequeño que ni con microscopio se ve. Impresionante."
        ],
        consoleOpen: [
            "¿Buscando errores en la consola? Qué nerd.",
            "¡Hey! Cierra las DevTools, aquí no hay nada que robar. No seas espía."
        ]
    },
    obsessionLevels: [
        { threshold: 3, name: "Nivel 1: Modo Cavernícola", desc: "Formas puntiagudas. Fuego bueno. Pocos lados." },
        { threshold: 50, name: "Nivel 2: Curiosidad Sospechosa", desc: "Empiezas a ver que se parece a un círculo." },
        { threshold: 500, name: "Nivel 3: Obsesión Matemática Leve", desc: "Ya le estás pillando el gusto a esto. Bastantes lados." },
        { threshold: 5000, name: "Nivel 4: Trastorno Geométrico", desc: "¿Ves polígonos cuando cierras los ojos? Muchos lados." },
        { threshold: 50000, name: "Nivel 5: Entidad Trascendental de π", desc: "Has trascendido. Eres uno con el círculo. Lados ilimitados." }
    ],
    historicalText: {
        title: "El Método de Exhausción",
        body: "Arquímedes de Siracusa (c. 287 a.C. – c. 212 a.C.) aproximó el valor de π inscribiendo y circunscribiendo polígonos regulares en un círculo. A medida que aumenta el número de lados (sin límite en la simulación), el perímetro del polígono se acerca a la circunferencia del círculo, permitiendo deducir el valor de Pi con gran precisión para la época."
    }
};
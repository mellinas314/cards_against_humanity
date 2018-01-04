
var CARDS;
var VIEWEDS = [];
var app = {
    initialize: function() {
        this.element = document.querySelector('.app');
        this.updateFrase();
        var startDate;
        document.body.querySelector('.refresh').addEventListener('touchstart', function() {
            startDate = Date.now();
        });
        document.body.querySelector('.refresh').addEventListener('touchend', function() {
            if(Date.now() - startDate < 200) {
                app.updateFrase();
            }
        });
    },
    updateFrase: function() {
        var index = this.selectIndex();
        var frase = CARDS[index];
        this.element.innerHTML = '<p>'+frase+'</p>';
    },
    selectIndex: function() {
        if(VIEWEDS.length === CARDS.length) {
            alert("Partida finalizada!. Empezando de nuevo...");
            VIEWEDS = [];
        }
        var number = parseInt(Math.random()*CARDS.length);
        if(VIEWEDS.indexOf(number)!==-1) {
            do {
                console.warn(number + " ya visto. Actualizando...");
                number = (number+1)%CARDS.length;
            }while(VIEWEDS.indexOf(number)===-1);
        }
        VIEWEDS.push(number);
        return number;
    }
};

CARDS = [
    "Bebo para olvidar ________",
    "________: bueno hasta la última gota",
    "¿Qué es ese sonido",
    "¿A qué huele?",
    "Durante el sexo, me gusta pensar en ________",
    "La medicina alternativa ahora usa las propiedades curativas de ________",
    "Mientras flipaba con ácido ________ se convirtió en ________",
    "Por culpa de un error de marketing El Corte Inglés ha dejado de vender ________",
    "¿Por qué estoy pegajoso?",
    "Hoy el tío de Bricomanía construirá ________",
    "¿Qué me traje de marruecos?",
    "¿Qué ayuda a Obama a relajarse?",
    "________. ¡Chócala!",
    "Durante el comunmente infravalorado Período Marrón de Picasso, hizo cientos de pinturas de ________",
    "It's a trap!!",
    "¿Qué es lo que más le gusta a Aznar?",
    "¡A que no puedes comer sólo uno!",
    "La guerra sirve para ________.",
    "¡Qué es lo que no te gustaría encontrar en un plato de comida china?",
    "¿Cuál será el próximo juguete del HappyMeal?",
    "Este año, en vez de carbón, Papa Noel traerá ________ a los niños malos.",
    "¿Cómo mantengo estable mi relación de pareja?",
    "Cuando sea presidente, crearé el ministerio de ________.",
    "¿Cuál es mi poder secreto?",
    "EE.UU. ha empezado a enviar ________ a los niños de Afghanistan.",
    "Ojalá no hubiese perdido el manual de ________.",
    "¿Por qué no puedo dormir por las noches?",
    "Cuando esté en la cárcel, meteré ________ de contrabando",
    "¿Qué toma Vin Diesel para cenar?",
    "El paraíso está lleno de ________.",
    "¿Qué es lo que hay que hacer para llevarte a la cama?",
    "Cuando sea millonario, levantaré una estatua de 20 metros en conmemoración de ________.",
    "¿Qué encontraría tu abuela perturbador pero extrañamente encantador?",
    "En al nueva película original de Disney Channel, Hannah Montana se enfrenta por primera vez con ________.",
    "¿Cuál es el vicio secreto de Batman?",
    "¿Qué me llevaría en un viaje al pasado para convencer a la gente de que soy un poderoso mago?",
    "Cuál es mi anti-droga?",
    "La liga de Fútbol ha prohibido ________ por dar a los jugadores una ventaja injusta.",
    "¿________? ¡Hay una aplicación para eso!",
    "Qué me produce gases incontrolados?",
    "Así es, yo maté a ________. ¿Qué como lo hice? ________.",
    "Y el premio de la academia por ________ es para ________.",
    "En mi próximo truco, sacaré ________ de ________.",
    "Canal Historia presenta: ________ la historia de ________.",
    "¿Cuál es la próxima pareja de superhéroes?",
    "Haz un haiku",
    "¿Qué es lo más crujiente?",
    "¿A qué huelen las personas mayores?",
    "________: probado en niños, aprobado por las madres.",
    "¿Qué mejora con los años?",
    "Lo siento, acabo de ________.",
    "A los blancos les gusta ________.",
    "La vida era difícil para los cavernícolas antes de: ",
    "¿Quién ha robado las galletas del tarro de las galletas?",
    "¿Qué es lo que más amo?",
    "Antes de matarle, Señor Bond, me gustaría enseñarle ________.",
    "La excursión al campo fue completamente arruinada por ________",
    "¿Qué es el mejor amigo de una chica?",
    "Los estudios demuestran que las ratas de laboratorio resuelven laberintos un 50% más rápido tras ser expuestas a ________.",
    "¿Qué me han estado ocultando mis padres?"
];

app.initialize();

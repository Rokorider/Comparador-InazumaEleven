document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        '"¡Con determinación y trabajo en equipo, nada es imposible!"',
        '"Si ellos marcan 10, nosotros 11. Si ellos marcan 100, nosotros 101 - Bobby, Erik ."',
        '"Sam, al banquillo. - Hilman."',
        '"Aunque corra con todas mis fuerzas, el mundo se encargará de decirme que apenas estoy empezando a caminar. - Mark."',
        '"Mientras tus amigos confíen en ti, ponte de pie las veces que sean necesarias."',
        '"Para destruir un muro de acero es necesaria una formación de diamantes."',
        '"La victoria no existe para quien no sabe perder."',
        '"Nuestra verdadera técnica especial es mantener la esperanza hasta el final."',
        '"Tengo que ser perfecto. - Shawn."',
        '"Somos ogros que comen diosecillos."',
        '"Eso no es nada comparado con la inmensidad del océano - Hurley."',
        '"Vamos a enfrentar el espíritu con el espíritu. Eso es lo que significa luchar."',
        '"Nadie puede ganar la verdadera victoria sin saber cómo es la derrota."',
        '"¿Te he hecho esperar? - Axel"',
        '"Tú siempre llegando tarde, ¿eh, Axel? - Mark"',
        '"Ruge con fuerza, Ventisca Eterna - Shwan."',
        '"El fútbol está llorando. - Arion."',
        '"¡Juguemos al fútbol - Mark"',
        '"¿Has oído a los ángeles batir sus alas?. - Byron"',
        '"En el momento en que los seres humanos pensamos que no podemos hacerlo... eso es exactamente cuando somos capaces de llevar a cabo todo nuestro potencial.."',
        '"El equipo que cree en la victoria es el que se encuentra más cerca de ella."'
    ];

    const textoFooter = document.getElementById('textoFooter');

    // Selecciona una frase aleatoria
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

    // Muestra la frase seleccionada
    textoFooter.textContent = fraseAleatoria;
});
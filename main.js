function makeInvisible(sectiontoHide,sectiontoShow){
     const firstSection = document.getElementById(sectiontoHide);
    firstSection.classList.add("makeInvisible")
    const secondSection = document.getElementById(sectiontoShow);
    secondSection.classList.remove("makeInvisible")
}

setTimeout(function(){
    const firstSection = document.getElementById("firstSection");
    firstSection.classList.add("makeInvisible")
    const secondSection = document.getElementById("secondSection");
    secondSection.classList.remove("makeInvisible")
},2000)  

const lasMañanitas = new Audio("Audio/Las Mañanitas - Mariachi Tradicional.mp3");

function animateSwing(){
    const giftImage = document.getElementById("giftImage");
    giftImage.classList.add("animate__wobble");
    setTimeout(makeInvisible,2000,"secondSection","thirdSection");
    setTimeout(()=>{lasMañanitas.play()
        const Mariachis = document.getElementById('mariachiImage');
        const animation = ["animate__shakeX", "animate__infinite"]
        Mariachis.classList.remove("animate__fadeInUp");
        Mariachis.classList.add(...animation);
    
    },2000);

    setTimeout(makeInvisible,4000,"thirdSection","fourthSection")
    setTimeout(makeInvisible,6000,"fourthSection","fifthSection")
    setTimeout(makeInvisible,8000,"fifthSection","sixthSection")
}
var textContent = {
    "Lila": "Feliz cumpleaños mi ácaro lindo <3 Sos luz en mi vida y en la de muchos. Gracias por convertirte en mi hermana y por todas las que hemos pasado juntas. Te amo con locura y siempre estaré para vos. Gracias por dejarme estar en tu vida y ver lo maravillosa que sos.",
    "Marielos" : "Feliz cumpleaños a una de las personas más especiales que conozco. Gracias por tu cariño y tu amistad, y por compartir tu amor por el anime conmigo. Te quiero un montón y estoy super agradecida con Dios porque te ha dado un año más.",
    "Celeste": "¡Feliz cumpleaños pulguita bonita! Que bendición ha sido tenerte en mi vida. Te amo mucho y deseo todos los anhelos de tu corazón se cumplan. Gracias por tanto amor y chick-fil-A. Besitos en la cola"
}





function cardbutton(buttonName){
    makeInvisible("sixthSection","letterSection")
    const textContainer = document.getElementById('textContainer');
    textContainer.textContent = textContent[buttonName];
    
}

function goBack(){
     makeInvisible("letterSection","sixthSection")
}

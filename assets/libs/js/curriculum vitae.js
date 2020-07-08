// Animation container

let allContainerFluid = document.querySelectorAll('.container-fluid');

window.addEventListener('load', function(){
    allContainerFluid.forEach(function(container){
        container.classList.add('hidden');
        // On appele fadein pour afficher les p déjà postionnés dans la partie visible de la page

        fadein();
    })
});

// Vérifier si élément dans partie visible page

function inFrontPage(container){
    // Renvoie la hauteur de la fenêtre
    let windowH = window.innerHeight;

    // Ecart entre le haut de mon bloc et le bord sup gauche de la fenêtre

    let containerPos = container.getBoundingClientRect().top;
    // vérifier que l'élément est dans la partie visible de la page
    return containerPos - windowH <= 0;
}

function fadein(){
    for(container of allContainerFluid){
        if(inFrontPage(container)){
            container.className = container.className.replace('hidden', 'fadein');
        }else{
            container.className = container.className.replace('fadein', 'hidden'); 
        }
    }
}

// Animation scroll

window.addEventListener('scroll', fadein);

let anchor = document.getElementById('scrollTop');
let arrow = document.querySelector('.arrow');

arrow.addEventListener('mouseover', () => {
    arrow.classList.toggle('arrow-animation');
});
arrow.addEventListener('mouseout', () => {
    arrow.classList.toggle('arrow-animation');
});

anchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


let allImg = document.querySelectorAll('.allImg img');


allImg.forEach(function(img){
    img.addEventListener('mouseover', changeImg);
    img.addEventListener('mouseout', reset);
})

function changeImg(){
    this.src = 'assets/img/'+ this.id + '_1.jpg';
}

function reset(){
    this.src = 'assets/img/'+ this.id + '.jpg';
}

$(function () {
    $('#navbarSupportedContent').on('click', '.nav-link', function () {
        $('#navbarSupportedContent').toggleClass('show');
    })
})
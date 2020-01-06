// Get Mouse position on scroll
var xMousePos = 0;
var yMousePos = 0;
var lastScrolledLeft = 0;
var lastScrolledTop = 0;

$(document).mousemove(function(event) {
    captureMousePosition(event);
})  

    $(window).scroll(function(event) {
        if(lastScrolledLeft != $(document).scrollLeft()){
            xMousePos -= lastScrolledLeft;
            lastScrolledLeft = $(document).scrollLeft();
            xMousePos += lastScrolledLeft;
        }
        if(lastScrolledTop != $(document).scrollTop()){
            yMousePos -= lastScrolledTop;
            lastScrolledTop = $(document).scrollTop();
            yMousePos += lastScrolledTop;
        }
        window.status = "x = " + xMousePos + " y = " + yMousePos;
    });
function captureMousePosition(event){
    xMousePos = event.pageX;
    yMousePos = event.pageY;
    window.status = "x = " + xMousePos + " y = " + yMousePos;
    // console.log("x = " + xMousePos + " y = " + yMousePos);
}

var boxes = document.getElementsByClassName('education-box');
var current_educationbox = 'dojo';
var category = 'dojo';

$(document).on('mouseenter', '.education-box', function(e){
    category = this.getAttribute('category');
    // document.getElementById(`${category}_content`).style.display = "block";
    current_educationbox = `${category}_content`;
})

$(document).on('click', '.education-box', function(e){
    this.classList.toggle('active_edu');
    // this.style.border = "2px solid red";
    var list_of_active = document.getElementById('skills-container').querySelectorAll('.active_edu');
    for(var i = 0; i < list_of_active.length; i++){
        if(list_of_active[i].getAttribute('category') != category){
            list_of_active[i].classList.toggle('active_edu');
        }
    }
    var list_of_visible = document.getElementById('skills-container').querySelectorAll('.info');
    for(var i = 0; i < list_of_visible.length; i++){
        if(list_of_visible[i].classList.contains('visible')){
            list_of_visible[i].classList.toggle('visible');
        }
    }
    // document.getElementById(current_educationbox).style.display = 'block';
    document.getElementById(`${category}_content`).classList.toggle('visible');
});

function openProjectModal(project){
    var selected_project = document.getElementById(project);
    document.getElementById(`${project}_nav`).style.width = "100%";
}

function closeNav(project){
    document.getElementById(`${project}_nav`).style.width = "0";
}

// Social Media Buttons
$(document).on('mouseenter', '.trigger-parent', function(){
    var name = this.querySelector('.trigger').getAttribute('name');
    document.querySelector(`.${name}-slider`).style.display = "inline-block";
    this.querySelector('a').style.marginLeft = '1rem';
    this.style.borderLeft = '2px solid #0ffbf9';
});

$(document).on('mouseleave', '.trigger-parent', function(){
    var name = this.querySelector('.trigger').getAttribute('name');
    document.querySelector(`.${name}-slider`).style.display = "none";
    this.querySelector('a').style.marginLeft = '0rem';
    this.style.borderLeft = 'none';
});

function showLink(){
    document.getElementsByClassName('linkedin-slider')[0].height = '0px';
}

function setHexOpacity(){
    var hexagons = document.getElementsByClassName('hexagon');
    for(var i = 0; i < 7; i++){
        hexagons[i].style.opacity = 1.0;
    }
    for(var i = 7; i < 21; i++){
        hexagons[i].style.opacity = 0.75;
    }
    for(var i = 21; i < 38; i++){
        hexagons[i].style.opacity = 0.5;
    }
    for(var i = 38; i < 64; i++){
        hexagons[i].style.opacity = 0.35;
    }
    for(var i = 64; i < hexagons.length; i++){
        hexagons[i].style.opacity = 0.3;
    }
}

function fadeOutEnterButton(){
    document.getElementsByClassName('enter_hex')[0].classList.add('fade');
    setTimeout(function(){
        var enter_hex = document.getElementsByClassName('enter_hex')[0];
        fade(enter_hex);
    }, 1500);
}

$(document).on('mouseover', '.hexagon', function(e){
    this.querySelector('.hex').classList.toggle('fade');
    // this.classList.add('fade');
});

function randomFadeInOut(){
    setInterval(function(){
        var random_hex_id = parseInt(Math.random()*113);
        if(random_hex_id == 0){
            random_hex_id = 1;
        }
        document.getElementsByClassName(`hex${random_hex_id}`)[0].classList.toggle('fade');
    }, 500);
}

function Enter(){
    // Grab all hexagons on the page
    var hexagons = document.getElementsByClassName('hexagon');
    
    // Loop through each hexagon and remove fade effect.
    for(var i = 0; i < hexagons.length; i++){
        hexagons[i].classList.remove('fade');
    }

    // Scale up all hexagons to start transition
    for(var i = 0; i < hexagons.length; i++){
        scale(hexagons[i]);
    }

    // After 750 milliseconds, fade the scaled up hexagons to black
    setTimeout(function(){
        for(var i = 0; i < hexagons.length; i++){
            fade(hexagons[i]);
            fadeOutEnterButton();
        }
    }, 750)

    setTimeout(function(){

        window.location.href = '/about.html';
        document.getElementsByClassName('hexagon').style.display = "block";
        aboutPageTrigger();
    }, 2000);
}

$(document).on('click', '#about_button', function(){
    setTimeout(function(){
        aboutPageTrigger();
    }, 5000);
});

function aboutPageTrigger(){
    document.getElementsByClassName('hexagon')[0].style.opacity = 0;
    var hexagons = document.getElementsByClassName('hexagon');    
    document.getElementsByClassName('hexagon')[0].style.opacity = 0;
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function scale(element) {
    setTimeout(function(){
        element.style.transform = "scale(2.0)";
    }, 50);
}

// Clicking on a hexagon adds the filled class
$(document).on('mousedown', '.hexagon', function(){
    this.classList.toggle("filled");
});

$(document).ready(function(){
    //Set all hexagons to a starting opacity
    setHexOpacity();
    randomFadeInOut();
})

window.onscroll = function() {
    this.scrolling();
};

function scrolling(){
    var topButton = document.getElementById('topButton');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
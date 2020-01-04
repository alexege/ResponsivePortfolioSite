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
console.log("Boxes:", boxes);

var current_educationbox = 'dojo';
var category = 'dojo';

$(document).on('mouseenter', '.education-box', function(e){
    category = this.getAttribute('category');
    console.log("category:", category);

    // document.getElementById(`${category}_content`).style.display = "block";
    current_educationbox = `${category}_content`;
})

$(document).on('mouseleave', '.education-box', function(e){
    console.log('current:', current_educationbox);
});

$(document).on('click', '.education-box', function(e){
    this.classList.toggle('active_edu');
    // this.style.border = "2px solid red";
    var list_of_active = document.getElementById('skills-container').querySelectorAll('.active_edu');
    for(var i = 0; i < list_of_active.length; i++){
        console.log("item:", list_of_active[i]);
        if(list_of_active[i].getAttribute('category') != category){
            list_of_active[i].classList.toggle('active_edu');
        }
    }
    var list_of_visible = document.getElementById('skills-container').querySelectorAll('.info');
    for(var i = 0; i < list_of_visible.length; i++){
        console.log("Items:", list_of_visible[i]);
        if(list_of_visible[i].classList.contains('visible')){
            console.log("Visible found");
            list_of_visible[i].classList.toggle('visible');
        }
    }
    // document.getElementById(current_educationbox).style.display = 'block';
    document.getElementById(`${category}_content`).classList.toggle('visible');
    console.log("list of active: ", list_of_active);
});

$(document).on('mouseenter', 'a', function(e){

    captureMousePosition(e);

    console.log("Mouse positionX: ", e.clientX);
    console.log("Mouse positionY: ", e.clientY);

    document.getElementById('follow').style.left = `${xMousePos - 25}px`;
    document.getElementById('follow').style.top = `${yMousePos - 25}px`;

    document.getElementById('corner-top-left').style.borderLeft = '2px solid cyan';
    document.getElementById('corner-top-left').style.borderTop = '2px solid cyan';
    document.getElementById('corner-top-right').style.borderRight = '2px solid cyan';
    document.getElementById('corner-top-right').style.borderTop = '2px solid cyan';
    document.getElementById('corner-bottom-left').style.borderLeft = '2px solid cyan';
    document.getElementById('corner-bottom-left').style.borderBottom = '2px solid cyan';
    document.getElementById('corner-bottom-right').style.borderRight = '2px solid cyan';
    document.getElementById('corner-bottom-right').style.borderBottom = '2px solid cyan';
})

$(document).on('mouseleave', 'a', function(e){

    document.getElementById('corner-top-left').style.borderLeft = '2px solid white';
    document.getElementById('corner-top-left').style.borderTop = '2px solid white';
    document.getElementById('corner-top-right').style.borderRight = '2px solid white';
    document.getElementById('corner-top-right').style.borderTop = '2px solid white';
    document.getElementById('corner-bottom-left').style.borderLeft = '2px solid white';
    document.getElementById('corner-bottom-left').style.borderBottom = '2px solid white';
    document.getElementById('corner-bottom-right').style.borderRight = '2px solid white';
    document.getElementById('corner-bottom-right').style.borderBottom = '2px solid white';
})

function openProjectModal(project){
    var selected_project = document.getElementById(project);
    console.log("Opening modal for " + project + "_nav");
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
    console.log("hexagon:", hexagons[0])
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
    console.log("Entering a hexagon");
    // this.classList.add('fade');
});

function randomFadeInOut(){
    setInterval(function(){
        var random_hex_id = parseInt(Math.random()*113);
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
    console.log("It's working!");
    document.getElementsByClassName('hexagon')[0].style.opacity = 0;
    var hexagons = document.getElementsByClassName('hexagon');
    // for(var i = 0; i < hexagons.length; i++) {
    //     hexagons[i].style.position = 'fixed';
    // }
    
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

function typewriter(){
    // TypeWriter Effect
    // List of sentences
    var _CONTENT = [ "Web Developer", "Computer Engineer", "Unicyclist", "Software Developer"];

    // Current sentence being processed
    var _PART = 0;
    
    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;
    
    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;
    
    // Element that holds the text
    var _ELEMENT = document.querySelector("#text");
    
    // Implements typing effect
    function Type() { 
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;
    
        // If full sentence has been displayed then start to delete the sentence after some time
        if(text === _CONTENT[_PART]) {
            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }
    
    // Implements deleting effect
    function Delete() {
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;
    
        // If sentence has been deleted then start to display the next sentence
        if(text === '') {
            clearInterval(_INTERVAL_VAL);
    
            // If last sentence then display the first one, else move to the next
            if(_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;
            _PART_INDEX = 0;
    
            // Start to display the next sentence after some time
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 800);
        }
    }
    
    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 150);
}

// Clicking on a hexagon adds the filled class
$(document).on('click', '.hexagon', function(){
    this.classList.toggle('filled');
});

$(document).ready(function(){
    console.log("Document is ready.");
    //Set all hexagons to a starting opacity
    setHexOpacity();
    randomFadeInOut();
    typewriter();
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
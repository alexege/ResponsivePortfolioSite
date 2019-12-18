$(document).on('mouseenter', '.trigger-parent', function(){
    var name = this.querySelector('.trigger').getAttribute('name');
    console.log("this:", this.getAttribute('name'));
    document.querySelector(`.${name}-slider`).style.display = "inline-block";
    this.querySelector('a').style.marginLeft = '1rem';
    // this.querySelector('span').style.color = "#0ffbf9";
    this.style.borderLeft = '2px solid #0ffbf9';
});

$(document).on('mouseleave', '.trigger-parent', function(){
    var name = this.querySelector('.trigger').getAttribute('name');
    console.log("this:", this.getAttribute('name'));
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

$(document).on('mouseover', '.hexagon', function(){
    console.log("Entering a hexagon");
    this.classList.add('fade');
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
    }, 2000);
    onIndexPage = false;
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
$(document).on('click', '.hexagon', function(){
    this.classList.toggle('filled');
});

$(document).ready(function(){
    console.log("Document is ready.");
    //Set all hexagons to a starting opacity
    setHexOpacity();
    randomFadeInOut();

})
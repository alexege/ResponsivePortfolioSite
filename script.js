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

$(document).on('mouseover', '.hexagon', function(){
    console.log("Entering a hexagon");
    this.classList.add('fade');
})


// setInterval(function(){
//     var random_hex_id = parseInt(Math.random()*113);
//     var alpha = Math.random();
//     console.log("random number:", random_hex_id);
//     console.log("alpha:", alpha);

//     // document.getElementsByClassName(`hex${random_hex_id}`)[0].classList.toggle('filled');
//     document.getElementsByClassName(`hex${random_hex_id}`)[0].style.fill = `rgb(6, 174, 226, ${alpha})`;
//     document.getElementsByClassName(`hex${random_hex_id}`)[0].classList.toggle('fade');
// }, 100)

setInterval(function(){
    var random_hex_id = parseInt(Math.random()*113);
    // document.getElementsByClassName(`hex${random_hex_id}`)[0].classList.toggle('filled');
    document.getElementsByClassName(`hex${random_hex_id}`)[0].classList.toggle('fade');
}, 500)

// setInterval(function(){
//     var random_hex_id1 = parseInt(Math.random()*113);
//     var random_hex_id2 = parseInt(Math.random()*113);
//     var random_hex_id3 = parseInt(Math.random()*113);
//     console.log("random number:", random_hex_id1);
//     console.log("random number:", random_hex_id2);
//     console.log("random number:", random_hex_id3);
//     document.getElementsByClassName(`hex${random_hex_id1}`)[0].classList.toggle('faded');
//     document.getElementsByClassName(`hex${random_hex_id2}`)[0].classList.toggle('faded');
//     document.getElementsByClassName(`hex${random_hex_id3}`)[0].classList.toggle('faded');
// }, 400)

function Enter(){
    console.log("Running Enter function.");
    var hexagons = document.getElementsByClassName('hexagon');
    
    for(var i = 0; i < hexagons.length; i++){
        hexagons[i].classList.remove('fade');
    }
    setTimeout(function(){
        for(var i = 0; i < hexagons.length; i++){
            
            scale(hexagons[i]);
            // fade(hexagons[i]);
        }
    });
    

    setTimeout(function(){
        for(var i = 0; i < hexagons.length/2; i++){
            fade(hexagons[i]);
        }
    })

    // for(var i = 0; i < 7; i++){
    //     scale(hexagons[i]);
    //     fade(hexagons[i]);
    // }

    // setTimeout(function(){
    //     for(var i = 7; i < 19; i++){
    //         scale(hexagons[i]);
    //         fade(hexagons[i]);
    //     }
    // },250)

    // setTimeout(function(){
    //     for(var i = 19; i < 38; i++){
    //         scale(hexagons[i]);
    //         fade(hexagons[i]);
    //     }
    // },500)

    // setTimeout(function(){
    //     for(var i = 38; i < 64; i++){
    //         scale(hexagons[i]);
    //         fade(hexagons[i]);
    //     }
    // },750)

    // setTimeout(function(){
    //     for(var i = 64; i < hexagons.length; i++){
    //         scale(hexagons[i]);
    //         fade(hexagons[i]);
    //     }
    // },1000)
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
        // element.style.transform = "scale(0.5)";
        setTimeout(function(){
            element.style.transform = "scale(2.0)";
        }, 50);
        // setTimeout(function(){
        //     element.style.transform = "scale(1.0)";
        // }, 1000);
    }
    // setInterval(function(){
    //     for(var i = 7; i < 19; i++){

    //         hexagons[i].style.opacity = 0;
    //     }
    // }, 400);
    // setInterval(function(){
    //     for(var i = 19; i < 38; i++){

    //         hexagons[i].style.opacity = 0;
    //     }
    // }, 800);
    // setInterval(function(){
    //     for(var i = 38; i < 64; i++){

    //         hexagons[i].style.opacity = 0;
    //     }
    // }, 1000);
    // setInterval(function(){
    //     for(var i = 64; i < hexagons.length; i++){

    //         hexagons[i].style.opacity = 0;
    //     }
    // }, 1200);
    // for(var i = 0; i < hexagons.length; i++){
    //     hexagons[i].style.opacity = 0;
    // }
// }

// Clicking on a hexagon
$(document).on('click', '.hexagon', function(){
    this.classList.toggle('filled');
});

$(document).ready(function(){
    console.log("Document is ready.");
    setHexOpacity();
})
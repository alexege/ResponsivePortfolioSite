$(document).ready(function(){
    typewriter();
});

$(document).on('mouseenter', 'a', function(e){

    captureMousePosition(e);

    // console.log("Mouse positionX: ", e.clientX);
    // console.log("Mouse positionY: ", e.clientY);

    document.getElementById('follow').style.left = `${xMousePos - 25}px`;
    document.getElementById('follow').style.top = `${yMousePos - 25}px`;

    document.getElementById('corner-top-left').style.borderLeft = '4px solid cyan';
    document.getElementById('corner-top-left').style.borderTop = '4px solid cyan';
    document.getElementById('corner-top-right').style.borderRight = '4px solid cyan';
    document.getElementById('corner-top-right').style.borderTop = '4px solid cyan';
    document.getElementById('corner-bottom-left').style.borderLeft = '4px solid cyan';
    document.getElementById('corner-bottom-left').style.borderBottom = '4px solid cyan';
    document.getElementById('corner-bottom-right').style.borderRight = '4px solid cyan';
    document.getElementById('corner-bottom-right').style.borderBottom = '4px solid cyan';
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

$(document).ready(function() {

	$('#contactForm').on('submit', function(e) {
		e.preventDefault();
		
		//get the name field value
		var name = $('#nameinput').val();
		//get the name field value
		var subject = $('#subject').val();
		//get the message
		var message = $('#message').val();
					
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/xvozvdwz',
			method:'POST',
			data:{
				name:name,
				subject:subject,
                message:message,
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#contact-container').hide();
				$('#thank').show();
			}	

		});		
		
	});

});	
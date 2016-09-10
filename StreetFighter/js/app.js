$(document).ready(function() {
	var coolRunning = false;
	function playHadouken () {
  		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
	};
	function playCool () {
  		$('#LIB-sound')[0].volume = 0.5;
  		$('#LIB-sound')[0].load();
  		$('#LIB-sound')[0].play();
	};
	$('.ryu').keydown(function(event){
    	alert("keydown event occured! The Ascii value of pressed key is: " + event.keyCode);
  	});
  	$('.ryu').mouseenter(function() {
  		if (coolRunning === false)
		{
    		$('.ryu-still').hide();
			$('.ryu-ready').show();
		}
  	})
	.mouseleave(function() {
		if (coolRunning === false)
		{
			$('.ryu-still').show();
			$('.ryu-ready').hide();
		}
  	})
	.mousedown(function() {
  		playHadouken();
  		$('.ryu-ready').hide();
  		$('.text').hide();
  		$('.ryu-throwing').show();
  		$('.hadouken').finish().show().animate(
    		{'left': '1020px'}, 500, function() {
      		$(this).hide();
      		$(this).css('left', '520px');
    		}
  		);
	})
  	.mouseup(function() {
  		$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
  	});

  	$(document).keydown(function(e) {
    	if (e.keyCode == 88) {
    		if (coolRunning === false) 
    		{
    			coolRunning = true;
    			playCool();
      			$('.ryu-action').hide();
      			$('.ryu-still').hide();
      			$('.ryu-ready').hide();
      			$('.ryu-throwing').hide();
      			$('.text').hide();
      			$('.ryu-cool').show();
      		}
    	}   
  	}).keyup(function(e) {
    	if (e.keyCode == 88) {
      		$('#LIB-sound')[0].pause();
      		//$('#LIB-sound')[0].load();
      		$('.ryu-cool').hide();
      		coolRunning = false;
      		if ($('.ryu:hover').length != 0) {
      			$('.ryu-ready').show();
      		}
      		else
      		{
      			$('.ryu-still').show();
      		}
		}
  });
});
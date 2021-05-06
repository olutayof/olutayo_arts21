$(function() {


	function updateClock() {

		let $clockText = $('#clock-text');
		let $hour = $('#hour');
	  	let $minute = $('#minute');
	  	let $second = $('#second');

	    var date = new Date();
	    var h = date.getHours();
	    var m = date.getMinutes();
	    var s = date.getSeconds(); 
	    var clockUpdateSpeed = 30;

	    var w = window.innerHeight - 100;

	    $hour.css({
		  transform: "translateY(-" + ((w / 24) + h * (w/24)) + "px)"
		});
		$minute.css({
		  transform: "translateY(-" + ((w / 60) + m * (w/60)) + "px)"
		});
		$second.css({ transform: "translateY(-" + ((w / 60) + s * (w/60)) + "px)" });

    	setTimeout(updateClock, clockUpdateSpeed);
	}

	updateClock();

});
console.log("hello");
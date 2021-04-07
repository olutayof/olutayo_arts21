$ (function(){
	$(".button").click(function(){
	    $(".e2").hide();
	    if ($(this).text() == "closed") { 
        $(this).text("open"); 
	    } else { 
	        $(this).text("closed"); 
	    };
	    if ($(this).text() == "open") {
	    	$(".e2").show();
	};
	  });
	 
});
$(document).ready(function(){

	$.getJSON(
		'js/galeria_JSON.js',
		function(data) {

			var gal = [];
			var counter = 0;

			for(i=0; i < data.gallery.length; i++){

				gal.push([data.gallery[i].picture.image, data.gallery[i].picture._caption]);

			}

			$("#rightArrow").click(function() {

		  		var theImage = $("#galleryWrapper #imageBox").find("img");
		  		var theCaption = $("#galleryWrapper").find("#captionBox p");

		  		if(counter < gal.length-1){
		  			counter++;
		  		} else {
		  			counter = 0;
		  		}

		  		theImage.css("display", "none");
		  		theImage.attr("src", gal[counter][0]);
		  		theImage.fadeIn(500);

		  		theCaption.css("display", "none");
		  		theCaption.html(gal[counter][1]);
		  		theCaption.fadeIn(500);
		  		
			});
		}

	);

	$("#rightArrow, #leftArrow").hover(function(){
		$(this).animate({ opacity: "0.8" }, 300);
	}, function() {
		$(this).animate({ opacity: "0.5" }, 300);
	});
});
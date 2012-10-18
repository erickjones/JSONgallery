$(document).ready(function(){

	//Get my JSON data please
	$.getJSON(
		'js/galeria_JSON.js',
		function(data) {

			var gal = [];
			var counter = 0;
			var theImage = $("#galleryWrapper #imageBox").find("img");
		  	var theCaption = $("#galleryWrapper").find("#captionBox p");

			for(i=0; i < data.gallery.length; i++){

				gal.push([data.gallery[i].picture.image, data.gallery[i].picture._caption]);

			}

			//Changes both image and Caption on 'firstBlood' and by click event on arrows
	  		function changeImageAndCaption(){
	  			theImage.css("display", "none");
		  		theImage.attr("src", gal[counter][0]);
		  		theImage.fadeIn(500);

		  		theCaption.css("display", "none");
		  		theCaption.html(gal[counter][1]);
		  		theCaption.fadeIn(500);
	  		}
	  		changeImageAndCaption();

	  		//Right arrow controller
			$("#rightArrow").click(function() {

		  		if(counter < gal.length-1){
		  			counter++;
		  		} else {
		  			counter = 0;
		  		}

		  		changeImageAndCaption();
		  		
			});

			// Left arrow controller
			$("#leftArrow").click(function() {

		  		if(counter == 0){
		  			counter = gal.length-1;
		  		} else {
		  			counter --;
		  		}

		  		changeImageAndCaption();
		  		
			});
		}

	);

    //Hovering images
	$("#rightArrow, #leftArrow").hover(function(){
		$(this).animate({ opacity: "0.8" }, 300);
	}, function() {
		$(this).animate({ opacity: "0.5" }, 300);
	});
});
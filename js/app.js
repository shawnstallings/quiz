var questionNumber = '';

// Functions

//Get gender from intro screen to feed final result as boy or girl
function getGender() {
    var gender = $("input[name='gender']:checked").val();
    console.log(gender);
        if (gender === undefined) {
            var gender = "boy";
            console.log("undefined = " + gender);
        }
        else if (gender === "Female") {
        	var gender = "girl";
        	console.log("Female = " + gender);
        }
        else if (gender === "Male") {
        	var gender = "boy";
        	console.log("Male = " + gender);
        }
}		

//Reloads the page when user clicks Try Again at the end
function reloadPage() {
	location.reload();
}

//Document Ready Function
$(function() {

    //Begin button to start the quiz
    $(".options").submit(function(event) {
        event.preventDefault();
        getGender();
        $(".introPage").hide();
        $(".questionPage").css({display: "block"});
        $(".question1").css({display: "block"});
        $(".bottom").css({display: "block"});
        $(".footer").css({display: "inline-block"});
        $(".paw1").removeClass('paw1').addClass('paw1r');
    });
	//Submit the answer to the 1st question
    $(".answers1").submit(function(event) {
        event.preventDefault();
        var correct = "More";
        var answer = $("input[name='answer1']:checked").val();
        console.log(answer);
        $(".question1").css({display: "none"});
        $(".bottom").css({display: "none"});
        $(".footer").css({display: "none"});
        $(".paw1r").removeClass('paw1r').addClass('paw1');
        $(".paw2").removeClass('paw2').addClass('paw2r');

            if (answer === correct) {
        	    $(".correct").css({display: "block"});
        	}
            else {
        	    $(".wrong").css({display: "block"});
        	}
    });

    //Submit the answer to the 2nd question
    $(".answers2").submit(function(event) {
        event.preventDefault();
        var correct = "Upset";
        var answer = $("input[name='answer2']:checked").val();
        console.log(answer);
        $(".question2").css({display: "none"});
        $(".bottom").css({display: "none"});
        $(".footer").css({display: "none"});
        $(".paw2r").removeClass('paw2r').addClass('paw2');
        $(".paw3").removeClass('paw3').addClass('paw3r');

            if (answer === correct) {
        	    $(".correct").css({display: "block"});
        	}
            else {
        	    $(".wrong").css({display: "block"});
        	}            
    });

    //Submit the answer to the 3rd question
    $(".answers3").submit(function(event) {
        event.preventDefault();
        
        $(".question3").css({display: "none"});
        $(".question4").css({display: "block"});
        $(".paw3r").removeClass('paw3r').addClass('paw3');
        $(".paw4").removeClass('paw4').addClass('paw4r');
    });
    //Submit the answer to the 4th question
    $(".answers4").submit(function(event) {
        event.preventDefault();
        
        $(".question4").css({display: "none"});
        $(".question5").css({display: "block"});
        $(".paw4r").removeClass('paw4r').addClass('paw4');
        $(".paw5").removeClass('paw5').addClass('paw5r');
    });
    //Submit the answer to the 5th question
    $(".answers5").submit(function(event) {
        event.preventDefault();
        
        $(".question5").css({display: "none"});
        $(".result").css({display: "block"});
        $(".paw5r").removeClass('paw5r').addClass('paw5');
        
    });
    
    //When user clicks on an answer radio button it will change the class for later reference
    $(".answer").on('click', function() {
    	console.log(this);
    	$(".answer").removeClass('selectedAnswer');
    	$(this).addClass('selectedAnswer')
    });

    //User clicks continue on correct or wrong status screen. This brings up the next question
    $(".continue").click(function() {
    	$(".correct").css({display: "none"});
    	$(".wrong").css({display: "none"});
        
        var questionNumber = $('.selectedAnswer')[0].parentElement.id;
        
    	$("." + questionNumber).css({display: "block"});
    	$(".bottom").css({display: "block"});
        $(".footer").css({display: "inline-block"});
        $(".answer").removeClass('selectedAnswer')

    });	






    	//var goodbyeMessage = "Good " + gender +"! You got " + (5 - $('.wrongAnswer').length) + " out of 5 questions right.";

    	
})

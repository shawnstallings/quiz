var questionNumber = '';

// Functions

//Change cookie size based on correct answers
function getCookie() {
    
    var numberRight = $('.rightAnswer').length;
   
    
    if (numberRight === 0) {
        $(".cookie,.answer-cookie,.result-cookie").css({width: "40px"});
    }
    else if (numberRight === 1) {
        $(".cookie,.answer-cookie,.result-cookie").css({width: "80px"});
    }
    else if (numberRight === 2) {
        $(".cookie,.answer-cookie,.result-cookie").css({width: "120px"});
    }
    else if (numberRight === 3) {
         $(".cookie,.answer-cookie,.result-cookie").css({width: "160px"});
    }
    else if (numberRight === 4) {
        $(".cookie,.answer-cookie,.result-cookie").css({width: "180px"});
    }
    else {
        $(".cookie,.answer-cookie,.result-cookie").css({width: "200px"});
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
                $(".score").append( $( "<div class='rightAnswer'>" ) );
                getCookie();
        	}
            else {
        	    $(".wrong").css({display: "block"});
                getCookie();
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
                $(".score").append( $( "<div class='rightAnswer'>" ) );
        	}
            else {
        	    $(".wrong").css({display: "block"});
        	}
        getCookie();            
    });

    //Submit the answer to the 3rd question
    $(".answers3").submit(function(event) {
        event.preventDefault();
        var correct = "Aggressive";
        var answer = $("input[name='answer3']:checked").val();
        console.log(answer);
        $(".question3").css({display: "none"});
        $(".bottom").css({display: "none"});
        $(".footer").css({display: "none"});
        $(".paw3r").removeClass('paw3r').addClass('paw3');
        $(".paw4").removeClass('paw4').addClass('paw4r');

            if (answer === correct) {
                $(".correct").css({display: "block"});
                $(".score").append( $( "<div class='rightAnswer'>" ) );
            }
            else {
                $(".wrong").css({display: "block"});
            }
        getCookie();           
    });
    //Submit the answer to the 4th question
    $(".answers4").submit(function(event) {
        event.preventDefault();
        var correct = "GoodTime";
        var answer = $("input[name='answer4']:checked").val();
        console.log(answer);
        $(".question4").css({display: "none"});
        $(".bottom").css({display: "none"});
        $(".footer").css({display: "none"});
        $(".paw4r").removeClass('paw4r').addClass('paw4');
        $(".paw5").removeClass('paw5').addClass('paw5r');

             if (answer === correct) {
                $(".correct").css({display: "block"});
                $(".score").append( $( "<div class='rightAnswer'>" ) );
            }
            else {
                $(".wrong").css({display: "block"});
            }
        getCookie();   
    });
    //Submit the answer to the 5th question
    $(".answers5").submit(function(event) {
        event.preventDefault();
        var correct = "BackAway";
        var answer = $("input[name='answer5']:checked").val();
        console.log(answer);
        $(".question5").css({display: "none"});
        $(".bottom").css({display: "none"});
        $(".footer").css({display: "none"});
        $(".paw5r").removeClass('paw5r').addClass('paw5');

            if (answer === correct) {
                $(".final-correct").css({display: "block"});
                $(".score").append( $( "<div class='rightAnswer'>" ) );
            }
            else {
                $(".final-wrong").css({display: "block"});
            }   
        getCookie();
    });
    
    //When user clicks on an answer radio button it will change the class for reference in the next function
    $(".answer").on('click', function() {
    	console.log(this);
    	$(".answer").removeClass('selectedAnswer');
    	$(this).addClass('selectedAnswer')
    });

    //User clicks continue on correct or wrong status screen. This brings up the next question screen
    $(".continue").click(function() {
    	$(".correct").css({display: "none"});
    	$(".wrong").css({display: "none"});
        
        var questionNumber = $('.selectedAnswer')[0].parentElement.id;
            
            if (questionNumber === "result") {
                $("." + questionNumber).css({display: "block"});
                $(".answer").removeClass('selectedAnswer');
            }
            else {
    	        $("." + questionNumber).css({display: "block"});
    	        $(".bottom").css({display: "inline-block"});
                $(".footer").css({display: "inline-block"});
                $(".answer").removeClass('selectedAnswer');
            }    

    });	

    //Move to final score screen to see the quiz results
    $(".getScore").click(function() {
        $(".final-correct").css({display: "none"});
        $(".final-wrong").css({display: "none"});
        $(".result").css({display: "block"});
        $(".answer").removeClass('selectedAnswer');

        var gender = $("input[name='gender']:checked").val();
        var numberRight = $('.rightAnswer').length;
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
            
            $(".result-answer").text("Good " + gender + "! You got " + numberRight + " out of 5 questions right.");
               
            //Change result photo, cookie and text based on correct answers
            if (numberRight === 0) {
                $(".correct5-photo").removeClass('correct5-photo').addClass('zerocorrect-photo');
                $(".phrase").replaceWith('<p class="phrase">You get a MICRO cookie!&nbsp&nbsp<span class="result-cookie"></span>&nbsp&nbspThank you for playing!</p>');
            }
            else if (numberRight === 1) {
                $(".correct5-photo").removeClass('correct5-photo').addClass('correct1-photo');
                $(".phrase").replaceWith('<p class="phrase">You get a TINY cookie!&nbsp&nbsp<span class="result-cookie"></span>&nbsp&nbspThank you for playing!</p>');
            }
            else if (numberRight === 2) {
                $(".correct5-photo").removeClass('correct5-photo').addClass('correct2-photo');
                $(".phrase").replaceWith('<p class="phrase">You get a SMALL cookie!&nbsp&nbsp<span class="result-cookie"></span>&nbsp&nbspThank you for playing!</p>');
            }
            else if (numberRight === 3) {
                $(".correct5-photo").removeClass('correct5-photo').addClass('correct3-photo');
                $(".phrase").replaceWith('<p class="phrase">You get a MEDIUM cookie!&nbsp&nbsp<span class="result-cookie"></span>&nbsp&nbspThank you for playing!</p>');
            }
            else if (numberRight === 4) {
                $(".correct5-photo").removeClass('correct5-photo').addClass('correct4-photo');
                $(".phrase").replaceWith('<p class="phrase">You get a LARGE cookie!&nbsp&nbsp<span class="result-cookie"></span>&nbsp&nbspThank you for playing!</p>');
            }
            else {
                $(".phrase").replaceWith('<p class="phrase">You get a LARGE cookie!&nbsp&nbsp<span class="result-cookie"></span>&nbsp&nbspThank you for playing!</p>');
            }          

    }); 

})

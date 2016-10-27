// Divs
// #wrapper - wrapper for H1 tag
// #start
// #timeremaining
// #question1
// #question2
// #question3
// #question4
// #question5
// #submit



$( document ).ready(function() {

	$( "#start" ).click(function() {

         $(this).hide();
         game.start();
         });
       		
       // GLOBAL VARIABLES

       var timeremaining = 30;
       var question = 0;
       // setInterval('#timer', 3000);

       // CLICK FUNCTIONS

    $("#resetgame").click(function() {
      game.reset();
      });

      var game = {

         // timer: 0,
         // Questions: questions,
         // currentQuestion: 0,
         // correct: 0,
         // incorrect: 0,
start: function() {

           var number = 30;

           function run(){
             counter = setInterval (increment, 1000);

           }
           function increment(){
           number--;
           $("#timer").html('<h2>' + number + '</h2>');
           if (number === 0) {
           stop();
           }
           }
          function stop () {
          clearInterval(counter);
           }

          run();
          $("#questions").html(question[0].question);
          $("#options").html(question[0].options);

          var answerChoices = "<div>";

          for (i = 0; i < questions[0].options.length; i++) { 
          answerChoices+='<h2 id= "choice' + i + '">' + questions[0].options[i] + '</h2></br>';
          }

          answerChoices+= "</div>";
          $("#options").html(answerChoices);

          }
}
});
            

    
      
//       	  answerChoices+= "</div>";
//       	  $("#options").html(answerChoices);
//            });
          
              
//      function next(){
//            var number = 30;
//            function run(){
//            counter = setInterval (increment, 1000);
//            }

//       function increment(){
//            number--;
//            $("#timer").html('<h2>' + number + '</h2>');
//            if (number === 0) {
//            top();
//            }
//            }
//            function stop () {
//            clearInterval(counter);
//            }
//           run();
//           $("#questions").html(question[0].question);
//           $("#options").html(question[0].options);

//           var answerChoices = "<div>";

//           for (i = 0; i < question.currentQuestion[0].options.length; i++) { 
//           answerChoices+='<h2 id= "choice' + i + '">' + questions[0].options[i] + '</h2></br>';
//           }

//           answerChoices+= "</div>";
//           $("#options").html(answerChoices); 

//           }
          
      
//       	  answerChoices+= "</div>";
//       	  $("#options").html(answerChoices);
      
  	 
        
          
          
// //         showScore: function() {
// //        // replace by using .html with an image tag with some text that says YOU LOST THE WHOLE GAME


//          },


//        //   youWon: function() {
//        // // replace by using .html with an image tag with some text that says YOU WON THE WHOLE GAME

//        //   },

//        //   youLost: function() {
//        // // replace by using .html with an image tag with some text that says YOU LOST THE WHOLE GAME


//        //   }, {



// }



	

	
        
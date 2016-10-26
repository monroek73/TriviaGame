// GLOBAL VARIABLES

var startCount = 30;
var box = $('#quizArea');

// (we are going to append the questions to the page!! you must write box.append)


// QUESTIONS

   $("#start").click(function() {
    game.reset()
    $('#quizArea').on("click", function(){
	$('#quizArea').show(1000.*5).hide(1000*60);
	$('box').append(questions);
});
   });

var questions = [
//Question 1
  {
    'answer': 'c',
    'question': 'What music artist holds the record for the most Grammy nominations?',
    'options': ['Barbara Streisand', 'David Forster', 'Quincy Jones'],
    'image': "assets/images/music1"

  },

//Question 2  
  {
    'answer': 'b',
    'question':'Which male artist has won the most Grammy Awards?',
    'options': ['Stevie Wonder', 'Georg Solti', 'Paul McCartney'],
    'image': "assets/images/music2"

  },

//Question 3
  {
    'answer': 'a',
    'question': 'Which female artist(s) has won the most Grammy Awards?',
    'options': ['Alison Krauss', 'Beyonce', 'Aretha Franklin'],
    'image': "assets/images/music3"

  },  

//Question 4
{
  'answer': 'a',
  'question': 'Which music group has won the most Grammy Awards?',
  'options': ['U2', 'Foo Fighters', 'The Beatles'],
  'image': "assets/images/music4"

},

//Question 5
{
  'answer': 'c',
  'question': 'Which music producer has won the most Grammy Awards?',
  'options': ['David Foster"', 'Kayne West', 'Qunicy Jones'],
  'image': "assets/images/music5"

}];


var game = {

  Questions: questions,
  currentQuestion: 0,
  correct: 0,
  incorrect: 0,


  reset: function() {
    
    // time remaining
    // questions
    // answers

  },


  loadQuestion: function() {

  },

  nextQuestion: function() {


  },

  youWon: function() {


  },

  youLost: function() {


  },

  Click: function() {

  },

}


// FUNCTIONS

for (var i = 0; i < questions.length; i++) { 

console.log(questions[i].question);

}



	

	
        
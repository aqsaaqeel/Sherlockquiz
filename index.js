var readlineSync = require ('readline-sync');
var i = 0,score = 0;
console.log("Sherlock trivia\n NOTE: make sure you answer in lower case");
var name = readlineSync.question("Who is playing? ");
console.log("Welcome "+name)
var questions =[{
  question : "What is Sherlock's landlady's name? \n a. Mr. Moriarty \n b. Mrs. Shelby \n c. Mrs Hudson \n ------- \n",
  answer : 'c',
},
{
  question : "Which country was John Watson in when he fought in the war ?\n a. Vietnam\n b. Afghanistan\n c. Iran\n -------\n",
  answer : "b",
},
{
  question : "Which season were we first introduced to 'The Woman'?\n a. Season 1\n b. Season 2\n c. Season 3\n -------\n",
  answer : "b",
},
{
  question : "What is John Watson's middle name ?\n a. Carlson\n b. Hamish\n c. Herold\n -------\n",
  answer : "b",
},
{
  question : "Which instrument Sherlock plays ?\n a. Violin\n b. Human organs\n c. Ukelele\n -------\n",
  answer : "a",
}]
for(i = 0; i < questions.length; i++)
{
  var ques = readlineSync.question(questions[i].question);
  if (ques == questions[i].answer)
  {
    console.log("YOU ARE RIGHT");
    score++;
  }
  else 
  {
    console.log("Wrong");
  }
}
console.log("Your Total score is "+score);
if(score>3)
{
  console.log("You are a true Sherlockian!");
}
else{
  console.log("Such a low score! Shame on you!");
}




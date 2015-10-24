//a fuction is a snippit of code that can be reused.
function sayCup(cup) {
	// cup is a variable that is passed into the function sayCup.

	// this line tells you what is in the cup based on what gets passed into sayCup via the cup variabel.
	alert('This is what is inside cup: ' + cup);
} // this is the end of the function

function sayHello(message) {
	alert(message);
} // this is the end of the function

function goToUrl(url) {
	document.location = url;
} // this is the end of the function

function addThemUp(number_1, number_2) {
	
 	var theAnswer = number_1 + number_2;

	showTheAnwser(theAnswer);
} // this is the end of the function

function subtratThem(number_1, number_2) {
	
 	var theAnswer = number_1 - number_2;

	showTheAnwser(theAnswer);
} // this is the end of the function

function showTheAnwser(theAnswer) {
	alert('Here is the really cool Answer: ' + theAnswer);
} // this is the end of the function







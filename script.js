

const name = window.prompt("Please enter your name:")
const ageCheck = window.prompt("Please enter your age:")

if (ageCheck < 21) {
	window.alert("Thanks you for visiting " + name + ", but the legal drinking age limit is 21 and over, and you entered " + ageCheck + ".");
	window.alert("Please vist the site again when you're 21.");
} else if (ageCheck == 21 || ageCheck > 21 && ageCheck < 123){
	window.alert("Welcome, " + name + "!");
	window.location.href = "main.html";
} else if (ageCheck > 123){
	window.alert("The oldest recorded human was Jeanne Calmet, who died at the age 122,on the year of 1997.  You are most likely NOT older than Jeanne.")
}
else {
	window.alert("Please enter a human age.")
}

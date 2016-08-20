var firstName = "Q";
var lastName = "Cox";
var name = firstName + " " + lastName;
var awesomeThoughts = "I am " + name + " and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
/*
This is empty on purpose! Your code to build the resume will go here.
 */

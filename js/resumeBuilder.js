//$("#main").append("Michele")

//var awesomeThoughts = "I am Michele and I am AWESOME!"

//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

//$("#main").append(funThoughts);

var name = "Michele Franzese"
var role = "Web Developer"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Michele Franzese",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "631-512-3772",
		"email" : "mfranzese24@me.com",
		"github" : "mfranzese24",
		"twitter" : "@longislandcolor",
		"location" : "Port Jefferson Station, NY"
	},
	"welcomeMessage" : "Welcome to my Resume",
	"skills" : ["direct sales", "leadership", "operations", "web development"],
	"image" : "images/michele.jpg"
};

var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
$("#header").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
$("#header").append(formattedEmail);
var formattedGit = HTMLgithub.replace("%data%",bio.contact.github);
$("#header").append(formattedGit);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
$("#header").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
$("#header").append(formattedLocation);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedPic = HTMLbioPic.replace("%data%",bio.image);
$("#header").append(formattedPic);

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
}

var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Business Account Manager",
		"location": "Huntington, NY",
		"dates": "August 2012 - Present",
		"description": "In this direct sales role, I work primarily on premises with our Small Business customers within an assigned territory. Generating sales for both new and existing customers across a variety of customer needs, I help to build a relationship while building revenue by offering and supporting customized solutions across One AT&T. Developing strategic internal partnerships with our Company Owned Retail locations as well as internal support personnel only enhances our ability together to exceed our sales goals while ensuring a seamless experience for our Small Business customers across channels."
	},
	{
		"employer": "AT&T",
		"title": "Retail Sales Manager",
		"location": "Bethpage, NY",
		"dates": "August 2010 - August 2012",
		"description": "Exceeding sales goals, ensuring an extraordinary customer experience, running an operationally efficient business and developing employees are among the expectations of my position as the leader of a company owned retail location. Accomplishments in my time with AT&T include having been chosen as mentee to the Director of Sales, as well as winning multiple Top Gun Awards for leading my team to become a top performing location in the New York City Market."
	},
	{	
		"employer": "Marie Richards Jewelers",
		"title": "Director",
		"location": "Stony Brook, NY",
		"dates": "November 2006 - May 2010",
		"description": "Owned and operated by my family, I was responsible for running the business from both a sales and operational standpoint by managing a staff and overseeing daily operations including inventory control and visual merchandising. I participated in marketing, social and outside networking to drive business to the location, as I worked with and maintained relationships with outside vendors and networking partners."
	},
	{
		"employer": "AT&T",
		"title": "Assistant Sales Manager",
		"location": "Lake Grove, NY",
		"dates": "March 2004 - November 2006",
		"description": "Assisting with coaching and developing employees, running an efficient business including maintaining inventory levels, store appearance and daily paperwork as well as ensuring efficient and courteous handling of customer requests including sales and service resolutions were my responsibilities as an Assistant with AT&T. As an Assistant, I was given the additional responsibility to serve as Acting Manager as I developed toward the next level."
	}

	]
};

function displayWork(){
for (job in work.jobs){
	
	$("#workExperience").append(HTMLworkStart);
 
 var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
 var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
 var formattedWorkComplete = formattedEmployerTitle + formattedLocation + formattedWorkDates + formattedWorkDescription;
$(".work-entry:last").append(formattedWorkComplete);

}
}
displayWork();



var education = {
	"schools": [
	{
		"name": "Long Island University, CW Post Campus",
		"location": "Brookville, NY",
		"degree" : "Bachelor of Fine Arts",
		"majors" : "Fine Arts",
		"dates" : "1998 - 2002",
		"url" : "http://www.liu.edu/post"
	}
	]
};

function displaySchool(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

	var formattedSchool = HTMLschoolName.replace("%data%",education.schools[school].name);
	$(".education-entry:last").append(formattedSchool);
	var formattedSLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
	$(".education-entry:last").append(formattedSLocation);
	var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);
	var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
	$(".education-entry:last").append(formattedMajor);
	var formattedSchoolDate = HTMLschoolDates.replace("%data%",education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDate);
	}
}

displaySchool();

var projects = {

	"projects": [
	{
		"title": "Project Title",
		"dates": "Project dates",
		"description": "Project Description",
		"images": "images/michele.jpg/200/200",
	}
	]
}

projects.display = function (){

	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);
		var formattedProjectImage = HTMlprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

projects.display();
 bio = {
	"name" : "Anders Kensby",
	"role" : "Webdeveloper",
	"contacts" : {
		"mobile" : "+46 (0)70 260 96 94", 
		"email" : "anders.kensby@gmail.com",
		"github" : "moghan",
		"twitter" : "no twitter",
		"location" : "Arvika"
	},
	"welcomeMessage" : "Feel free to have a look at my resume.",
	"skills" : [
	"Teamleader experience", "Outside the box"
	],
	"bioPic" : "http://placebear.com/220/220"
}

education = {
	"schools" : [
	{
		"name" : "Karlstads universitet",
		"location" : "Karlstad",
		"degree" : "BA",
		"majors" : "CS",
		"dates" : "2015",
		"url" : "http://www.kau.se"
	},
	{
		"name" : "Solberga",
		"location" : "Arvika",
		"degree" : "BA",
		"majors" : "CS",
		"dates" : "2015",
		"url" : "http://www.kau.se"
	}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"date" : "2015",
			"url" : "http://www.udacity.com"
		}
	]
}

work = {
	"jobs" : [
		{
			"employer" : "Wermland Mechanics",
			"title" : "Montör",
			"location" : "Stockholm",
			"dates" : "June 2015 -",			
			"description" : "Brainless"
		},
		{
			"employer" : "REC Scanmodule",
			"title" : "Team Leader",
			"location" : "Göteborg",
			"dates" : "2008 - 2011",			
			"description" : "Responsible for..."
		},
		{
			"employer" : "ttttTEST",
			"title" : "Team Leader",
			"location" : "Malmö",
			"dates" : "2008 - 2011",			
			"description" : "Brainless"
		}

	]
}

project = {
	"projects" : [
		{
			"title" : "ObT6",
			"dates" : "2014",
			"description" : "My first github project",
			"image" : "http://www.placebear.com/200/200"
		},
		{
			"title" : "GeneralNeo",
			"dates" : "2016-",
			"description" : "EON battlefield emulator.",
			"image" : "http://www.placebear.com/200/200"
		},
		{
			"title" : "GeneralNeo",
			"dates" : "2016-",
			"description" : "EON battlefield emulator.",
			"image" : "http://www.placebear.com/200/200"
		},
		{
			"title" : "ObT6",
			"dates" : "2014",
			"description" : "My first github project",
			"image" : "http://www.placebear.com/200/200"
		},
		{
			"title" : "3rd",
			"dates" : "1984",
			"description" : "Great movie.",
			"image" : "http://www.placebear.com/200/200"
		}
	]
}





bio.display = function () {
	//Skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var i = 0 ; i < bio.skills.length ; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}

	}

	//Contacts
	var keyNames = Object.keys(bio.contacts);
	
	for (var i = 0 ; i < keyNames.length ; i++) {
		var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[keyNames[i]]);
		formattedContact = formattedContact.replace("%contact%", keyNames[i]);

		$("#topContacts").append(formattedContact);
	}

	//Role
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	//Name
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	//Welcome message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
	$("#header").append(formattedWelcomeMsg);
	console.log(formattedWelcomeMsg);


}

bio.display();




education.display = function () {
	for (school in education.schools)
	{
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);


		var formattedEntry = formattedName + formattedDegree + formattedDates + formattedMajor;
console.log(formattedEntry);
		$(".education-entry:last").append(formattedEntry);
	}
}

education.display();


project.display = function () {
	for (prj in project.projects)
	{
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[prj].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[prj].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[prj].description);
		var formattedImage = HTMLprojectImage.replace("%data%", project.projects[prj].image);


		var formattedEntry = formattedTitle + formattedDates + formattedDescription + formattedImage;
console.log(formattedEntry);
		$(".project-entry:last").append(formattedEntry);
	}
}

project.display();







work.display = function () {
	console.log("work.display");
	for (job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


		var formattedWorkEntry = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$(".work-entry:last").append(formattedWorkEntry);
	}
}

work.display();

/*
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
 
function locationizer(work_obj) {
	var jobLocationArray = [];

	for (job in work.jobs) {
		jobLocationArray.push(work.jobs[job].location);
	}

	return jobLocationArray;
}




bio.display();


$("#mapDiv").append(googleMap);

var locArr = locationizer(work);
*/
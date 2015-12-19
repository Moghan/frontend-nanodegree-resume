locationDescription = {
	'locations' : [
		{
			'name' : 'Töcksfors',
			'description' : 'Here I am now. Beautiful, and right between Oslo and Karlstad.'
		},
		{
			'name' : 'Arvika',
			'description' : 'The place where I grew up. Time to grow some more, somewhere else.'
		},
		{
			'name' : 'Karlstad',
			'description' : 'Studied here. A great place.'
		}
	]
};

bio = {
	'name' : 'Anders Kensby',
	'role' : 'Webdeveloper',
	'contacts' : {
		'mobile' : '+46 (0)70 260 96 94', 
		'email' : 'anders.kensby@gmail.com',
		'github' : 'https://github.com/Moghan',
		'location' : 'Töcksfors'
	},
	'welcomeMessage' : 'Feel free to have a look at my resume.',
	'skills' : [
	'C# certificate', 'HTML', 'CSS', 'JavaScript', 'Teamleader experience', 'Outside the box mentality'
	],
	'bioPic' : 'http://riots.se/me.jpg'
};

education = {
	'schools' : [
	{
		'name' : 'Karlstads universitet',
		'location' : 'Karlstad',
		'degree' : 'Degree of Bachelor of Science in Engineering',
		'majors' : 'Computer Science Engineering',
		'dates' : '2015',
		'url' : 'http://www.kau.se'
	}
	],
	'onlineCourses' : [
		{
			'title' : 'Front-End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : '2015',
			'url' : 'http://www.udacity.com'
		}
	]
};

work = {
	'jobs' : [
		{
			'employer' : 'Wermland Mechanics',
			'title' : 'Fitter',
			'location' : 'Töcksfors',
			'dates' : 'June 2015 -',			
			'description' : 'Assembly of sheet metal.'
		},
		{
			'employer' : 'REC Scanmodule',
			'title' : 'Team leader',
			'location' : 'Glava',
			'dates' : '2008 - 2011',			
			'description' : 'Support, educate, push Lean production, report.'
		}
	]
};

project = {
	'projects' : [
		{
			'title' : 'Polymer',
			'dates' : '2015-',
			'description' : 'First contact with Polymer',
			'image' : "http://www.placebear.com/200/200"
		},
		{
			'title' : 'GeneralNeo',
			'dates' : '2016-',
			'description' : 'EON battlefield emulator.',
			'image' : "http://www.placebear.com/200/200"
		}
	]
};

bio.display = function () {
	//Skills
	if (bio.skills.length > 0) {
		$('#header-info').append(HTMLskillsStart);

		for (var i = 0 ; i < bio.skills.length ; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}

	}

	//Contacts
	var keyNames = Object.keys(bio.contacts);
	
	for (var i = 0 ; i < keyNames.length ; i++) {
		var formattedContact = HTMLcontactGeneric.replace('%data%', bio.contacts[keyNames[i]]);
		formattedContact = formattedContact.replace('%contact%', keyNames[i]);

		$('#topContacts').append(formattedContact);
	}

	//Pic
	var formattedBiopic = HTMLbioPic.replace('%data%', bio.bioPic);
	$('#bioPic').append(formattedBiopic);

	//Role
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedRole);

	//Name
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(formattedName);

	//Welcome message
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedWelcomeMsg);
	console.log(formattedWelcomeMsg);
};

education.display = function () {
	for (var school in education.schools)
	{
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);


		var formattedEntry = formattedName + formattedDegree + formattedDates + formattedMajor;
		console.log(formattedEntry);
		$('.education-entry:last').append(formattedEntry);
	}
};

project.display = function () {
	for (var prj in project.projects)
	{
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', project.projects[prj].title);
		var formattedDates = HTMLprojectDates.replace('%data%', project.projects[prj].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', project.projects[prj].description);
		var formattedImage = HTMLprojectImage.replace('%data%', project.projects[prj].image);


		var formattedEntry = formattedTitle + formattedDates + formattedDescription + formattedImage;
console.log(formattedEntry);
		$('.project-entry:last').append(formattedEntry);
	}
};

work.display = function () {
	console.log('work.display');
	for (var job in work.jobs)
	{
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);


		var formattedWorkEntry = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$('.work-entry:last').append(formattedWorkEntry);
	}
};


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
 
$('#mapDiv').append(googleMap);

function footerDisplay () {
	var keyNames = Object.keys(bio.contacts);
	
	for (var i = 0 ; i < keyNames.length ; i++) {
		var formattedContact = HTMLcontactGeneric.replace('%data%', bio.contacts[keyNames[i]]);
		formattedContact = formattedContact.replace('%contact%', keyNames[i]);

		$('#footerContacts').append(formattedContact);
	}
}

footerDisplay();
bio.display();
education.display();
project.display();
work.display();

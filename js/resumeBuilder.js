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
		'twitter' : 'I do not have twitter!',
		'location' : 'Töcksfors'
	},
	'welcomeMessage' : 'Feel free to have a look at my resume.',
	'skills' : [
	'C# certificate', 'HTML', 'CSS', 'JavaScript', 'Teamleader experience', 'Outside the box mentality'
	],
	'biopic' : 'http://riots.se/me.jpg'
};

education = {
	'schools' : [
	{
		'name' : 'Karlstads universitet',
		'location' : 'Karlstad',
		'degree' : 'Degree of Bachelor of Science in Engineering',
		'majors' : ['Computer Science Engineering', 'test multiple majors', 'sec test'],
		'dates' : 2015,
		'url' : 'http://www.kau.se'
	},
	{
		'name' : 'Karlstads universitet',
		'location' : 'Karlstad',
		'degree' : 'Degree of Bachelor of Science in Engineering',
		'majors' : ['Computer Science Engineering'],
		'dates' : 2015,
		'url' : 'http://www.kau.se'
	}
	],
	'onlineCourses' : [
		{
			'title' : 'Front-End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
			'url' : 'http://www.udacity.com'
		},
		{
			'title' : 'Front-End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
			'url' : 'http://www.udacity.com'
		},
		{
			'title' : 'Front-End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
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

projects = {
	'projects' : [
		{
			'title' : 'Polymer',
			'dates' : '2015-',
			'description' : 'First contact with Polymer',
			'images' : ["http://www.placebear.com/200/200"]
		},
		{
			'title' : 'GeneralNeo',
			'dates' : '2016-',
			'description' : 'EON battlefield emulator.',
			'images' : ["http://www.placebear.com/200/200"]
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
		$('#footerContacts').append(formattedContact);
	}

	//Pic
	var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
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
};

education.display = function () {
	$.each(education.schools, function(index, school){
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', school.name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
		var formattedDates = HTMLschoolDates.replace('%data%', school.dates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
		var formattedEntry = formattedName + formattedDegree + formattedDates;
		$('.education-entry:last').append(formattedEntry);

		$.each(school.majors, function(index, major) {
			$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
		});
	});
		
	if(education.onlineCourses.length > 0) {
		$('.education-entry:last').append(HTMLonlineClasses);
		$.each(education.onlineCourses, function(index, course) {
			$('.education-entry:last').append(HTMLonlineTitle.replace('%data%', course.title));
			$('.education-entry:last').append(HTMLonlineSchool.replace('%data%', course.school));
			$('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.date));
			$('.education-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
		});
	}
};

projects.display = function () {
	$.each(projects.projects, function(prj, index) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[prj].title);
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[prj].dates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[prj].description);

		//Images is an array, but at this point I only want to use one picture.
		var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[prj].images[0]);

		var formattedEntry = formattedTitle + formattedDates + formattedDescription + formattedImage;
		$('.project-entry:last').append(formattedEntry);
	});
};

work.display = function () {
	$.each(work.jobs, function(job, index) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		var formattedWorkEntry = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

		$('.work-entry:last').append(formattedWorkEntry);
	});
};

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
 
$('#mapDiv').append(googleMap);

bio.display();
education.display();
projects.display();
work.display();
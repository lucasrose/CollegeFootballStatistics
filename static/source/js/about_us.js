$(document).ready(function(){
  addGrant()
  addKyle()
  addLucas()
})

function createPerson(name, major, bio, linkedInUrl, gitHubHTMLString){
  var html = "<div class='person'>" +
    "<div>" +
      "<h2 class='page-sub-header'>" + name + 
        "<div class='major'>" + major + " - VIRGINIA TECH</div>" +
        "<a class='linkedin-link' href='" + linkedInUrl + "'>LinkedIn</a>" +
        gitHubHTMLString + 
      "</h2>" +
    "</div>" +
"<div class='bio'>" + bio + "</div></div>"
  
  $('#inner').append(html)
}

function addLucas(){
  var name = "Lucas Rose"
  var major = "COMPUTER SCIENCE"
  var linkedInUrl = "https://www.linkedin.com/in/lucasrose7"
  var gitHubUrl = "https://github.com/lucasrose"
  var gitHubHTMLString = "<a class='github-link' href='" + gitHubUrl + "'>GitHub</a>"
  var bio = "Lucas is an incoming Software Developer at GE Digital, in San Francisco, California. Last summer he interned at Rackspace as a Software Developer, working primarily on frontend code, utilizing the React JS Framework. Sophomore year, Lucas worked part time and interned at Qualtrax, again doing frontend software developement. At both companies as side work he created mobile/desktop applications (Rackspace - Mac App, Qualtrax - Android/Web App). He likes to work out, play soccer, take photos, and travel."
  
  createPerson(name, major, bio, linkedInUrl, gitHubHTMLString)
}

function addKyle(){
  var name = "Kyle Johnson"
  var major = "COMPUTER SCIENCE AND MATHEMATICS"
  var linkedInUrl = "https://www.linkedin.com/in/kyle-johnson-0b9592bb"
  var gitHubHTMLString = ""
  var bio = "Kyle is an incoming Software Engineer at HCL Technologies, in Raleigh, North Carolina, and starts this June. Last summer and winter, he worked as a Software Engineering intern at AT&T. When he isn't programming, Kyle enjoys playing the guitar, running, cycling, and spending time with his friends. He also enjoys travelling. He spent a summer biking across the United States, and plans on biking several more continents in his lifetime. This summer, he is spending 23 days hiking and fishing in Alaska."
  
  createPerson(name, major, bio, linkedInUrl, gitHubHTMLString)
}

function addGrant(){
  var name = "Grant Hughes"
  var major = "COMPUTER SCIENCE"
  var linkedInUrl = "https://www.linkedin.com/in/grant-hughes-0430398a"
  var gitHubUrl = ""
  var bio = "Grant is an incoming employee at Unitedhealth Group in Raleigh, NC. He is working to pursue a career in Software Development and Data Science. He has a background heavily influenced by backend technologies, especially generating models utilizing machine learning concepts. He likes to exercise, travel, and learn history for fun!"
  
  createPerson(name, major, bio, linkedInUrl, gitHubUrl)
}
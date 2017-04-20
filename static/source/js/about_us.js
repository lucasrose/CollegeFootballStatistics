function createPerson(name, major, bio){
  var html = "<div class='person'>" +
    "<div>" +
      "<h2 class='page-sub-header'>" + name + 
        "<div class='major'>" + major + " - VIRGINIA TECH</div>" +
        "</h2>" +
    "</div>" +
"<div class='bio'>" + bio + "</div></div>"
  
  $('#inner').append(html)
}
var filtering = false;
var postCount = 0;

function Post(name, date, text)
{
  postCount+=1;
  var filt = findGetParameter("filter");
  filtering = true;
  if (filt != null)
  {
	  if (filt != name) 
	  {
		  return;
	  }
  }
  document.write("<div class='posts'>");
  document.write("<table><tr><td>");
  if (name == "kek") { name = "{SUPER_USER} " + name; }
  if (name == "mutt") { name = "{ADMIN} " + name; }
  if (text.split(" ")[0] == "[img]") { text = "<p style='border: solid 1px black;text-align:center;font-size:10px;'>[IMAGE POST]</p><img style='width:200px;width:200px;' src='" + text.split(" ")[1] + "' />"; }
  if (text.split(" ")[0] == "[link]") { text = "<p style='border: solid 1px black;text-align:center;font-size:10px;'>[LINK POST]</p><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a>"; }
  if (text.split(" ")[0] == "[YouTube]") { text = "<p style='border: solid 1px black;text-align:center;font-size:10px;'>[YouTube POST]</p><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe>"; }
  //if ((date.split(".")[0] == d.getDate()) && (date.split(".")[1] == d.getMonth()) && (date.split(".")[2] == d.getFullYear())) { date = "Today"; }
  document.write("<p id='name_date'><strong><span style='border: solid 1px black;'>" + name + "&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;" + date + "</span></strong></p></td></tr>");
  document.write("<tr><td><p><span style='font-family:arial;'>" + text + "</span></p></td></tr></table></div>");
  console.log("created post by "+ name +" with id: " + postCount);
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
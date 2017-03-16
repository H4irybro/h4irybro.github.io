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
  document.write("<div class='posts' style='border: solid 1px black'>");
  document.write("<table><tr><td>");
  if (text.split(" ")[0] == "[img]") { text = "<div><p style='border: solid 1px black;text-align:center;font-size:10px;'>[IMAGE POST]</p><img style='width:20%;width:20%;' src='" + text.split(" ")[1] + "' /></div>"; }
  if (text.split(" ")[0] == "[link]") { text = "<div><p style='border: solid 1px black;text-align:center;font-size:10px;'>[LINK POST]</p><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a></div>"; }
  if (text.split(" ")[0] == "[YouTube]") { text = "<div><p style='border: solid 1px black;text-align:center;font-size:10px;'>[YouTube POST]</p><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe></div>"; }
  //if ((date.split(".")[0] == d.getDate()) && (date.split(".")[1] == d.getMonth()) && (date.split(".")[2] == d.getFullYear())) { date = "Today"; }
  document.write("<p id='name_date'><strong><span style='border: solid 1px black;'>" + name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + date + "</span></strong></p></td></tr></table>");
  document.write("<p><span style='font-family:arial;'>" + text + "</span></p></div>");
  console.log("created post by "+ name +" with id: " + postCount);
}

function PostMore(name, date, textlines) // for code
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

  var text = "";
  for (var i=0; i < textlines.length; i++) {
    text += textlines[i] + "<br>";
  }

  document.write("<div class='posts' style='border: solid 1px black'>");
  document.write("<table><tr><td>");
  if (text.split(" ")[0] == "[img]") { text = "<div><p style='border: solid 1px black;text-align:center;font-size:10px;'>[IMAGE POST]</p><img style='width:200px;width:200px;' src='" + text.split(" ")[1] + "' /></div>"; }
  if (text.split(" ")[0] == "[link]") { text = "<div><p style='border: solid 1px black;text-align:center;font-size:10px;'>[LINK POST]</p><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a></div>"; }
  if (text.split(" ")[0] == "[YouTube]") { text = "<div><p style='border: solid 1px black;text-align:center;font-size:10px;'>[YouTube POST]</p><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe></div>"; }
  //if ((date.split(".")[0] == d.getDate()) && (date.split(".")[1] == d.getMonth()) && (date.split(".")[2] == d.getFullYear())) { date = "Today"; }
  document.write("<p id='name_date'><strong><span style='border: solid 1px black;'>" + name + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + date + "</span></strong></p></td></tr></table>");
  document.write("<p><span style='font-family:arial;'>" + text + "</span></p></div>");
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

function s3cr3t__() {
	var i = document.getElementById("secret");
	var j = findGetParameter("s3c");
	if (j != null) {
		i.innerHTML = "<span style='color:" + j + ";'>critiques</span>";
	}
}
var filtering = false;
var postCount = 0;

var profiles = {
  "kek":  "user_profiles\\kek.jpg",
  "mutt": "user_profiles\\mutt.jpg",
  "paddy":"user_profiles\\paddy.jpg"
};

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
  document.write("<table><tr><td id=\"tdstuff\">");

  if (text.split(" ")[0] == "[img]") 
    {
      text = "<div><img style='width:20%;width:20%;' src='" + text.split(" ")[1] + "' /></div>"; 
    }
  if (text.split(" ")[0] == "[link]") 
    { 
      text = "<div><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a></div>";
    }
  if (text.split(" ")[0] == "[YouTube]") 
    { 
      text = "<div><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe></div>"; 
    }

  document.write("<div><p id='name_date'>" + name + " @ " + date + "</p><img id=\"profile-image\" src=" + profiles[name] + " /></td>");
  document.write("<td><div style=\"width:100px;\"></div></div></td>"); // spacer
  document.write("<td><p style=\"font-family:sans-serif;\">" + text + "</p></td></table></div>");
  document.write("<div style=\"height: 35px;\"></div>");
  
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
  document.write("<table><tr><td id=\"tdstuff\">");

  if (text.split(" ")[0] == "[img]") 
    {
      text = "<div><img style='width:20%;width:20%;' src='" + text.split(" ")[1] + "' /></div>"; 
    }
  if (text.split(" ")[0] == "[link]") 
    { 
      text = "<div><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a></div>";
    }
  if (text.split(" ")[0] == "[YouTube]") 
    { 
      text = "<div><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe></div>"; 
    }

  document.write("<div><p id='name_date'>" + name + " @ " + date + "</p><img id=\"profile-image\" src=" + profiles[name] + " /></td>");
  document.write("<td><div style=\"width:100px;\"></div></div></td>"); // spacer
  document.write("<td><p><span style='font-family:arial;'>" + text + "</span></p></td></table></div>");
  document.write("<div style=\"height: 35px;\"></div>");
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
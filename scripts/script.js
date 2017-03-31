var filtering = false;
var postCount = 0;

var profiles = {
  "kek": "user_profiles\\kek.jpg",
  "mutt": "user_profiles\\mutt.jpg",
  "paddy": "user_profiles\\paddy.jpg",
  "forehead": "https://pbs.twimg.com/profile_images/655713281789841409/Rm3mwNNQ_400x400.jpg",
  "weedson": "https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-0/p526x296/15349758_129114567577209_2825970834131460331_n.jpg?oh=4539b1e4694cb44e5532750a9924436d&oe=595ED0AA",
};

function LoadF(url, callback) {
  var client = new XMLHttpRequest();
  client.open('GET', url);
  client.onreadystatechange = function() {
    callback(client.responseText);
  }
  client.send();
}

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

  if (text.split(" ")[0] == "[img]") 
    {
      text = "<div><img style='width:30%;width:30%;' src='" + text.split(" ")[1] + "' /></div>"; 
    }
  if (text.split(" ")[0] == "[link]") 
    { 
      text = "<div><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a></div>";
    }
  if (text.split(" ")[0] == "[YouTube]") 
    { 
      text = "<div><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe></div>"; 
    }

  document.write("<div class='posts' style='border: solid 1px black'>");
  document.write("<table><tr>");
  document.write("<td id=\"tdstuff\"><div><img id=\"profile-image\" src=" + profiles[name] + " /><p id='name_date'>" + name + "<br/><span style=\"font-size:10px;\">" + date + "</span></p></td>");
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

  if (text.split(" ")[0] == "[img]") 
    {
      text = "<div><img style='width:30%;width:30%;' src='" + text.split(" ")[1] + "' /></div>"; 
    }
  if (text.split(" ")[0] == "[link]") 
    { 
      text = "<div><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a></div>";
    }
  if (text.split(" ")[0] == "[YouTube]") 
    { 
      text = "<div><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe></div>"; 
    }

  document.write("<div class='posts' style='border: solid 1px black'>");
  document.write("<table><tr>");
  document.write("<td id=\"tdstuff\"><div style=\"padding-top: 10px;padding-left: 10px;\"><img id=\"profile-image\" src=" + profiles[name] + " /><p id='name_date'>" + name + "<br/><span style=\"font-size:10px;\">" + date + "</span></p></td>");
  document.write("<td><div style=\"width:100px;\"></div></div></td>"); // spacer
  document.write("<td><p><span style='font-family:arial;'>" + text + "</span></p></td></table></div>");
  document.write("<div style=\"height: 35px;\"></div>");
}

function PostFile(name, date, filename) {
  var text;
  LoadF(filename, function (str) { text = str; } );
  Post(name, date, text);
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

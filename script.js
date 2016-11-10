function Post(name, date, text)
{
  //var d = Date();
  document.write("<div class='posts'>");
  document.write("<table><tr><td>");
  console.log(parseURLParams(window.location));
  if (name == "kek") { name = "{SUPER_USER} " + name; }
  if (name == "mutt") { name = "{ADMIN} " + name; }
  if (text.split(" ")[0] == "[img]") { text = "<p style='border: solid 1px black;text-align:center;font-size:10px;'>[IMAGE POST]</p><img style='width:200px;width:200px;' src='" + text.split(" ")[1] + "' />"; }
  if (text.split(" ")[0] == "[link]") { text = "<p style='border: solid 1px black;text-align:center;font-size:10px;'>[LINK POST]</p><a href='"+ text.split(" ")[1] + "'>" + text.split("/")[2] + "</a>"; }
  if (text.split(" ")[0] == "[YouTube]") { text = "<p style='border: solid 1px black;text-align:center;font-size:10px;'>[YouTube POST]</p><iframe width='560' height='315' src='"+ text.split(" ")[1] + "' frameborder='0'></iframe>"; }
  //if ((date.split(".")[0] == d.getDate()) && (date.split(".")[1] == d.getMonth()) && (date.split(".")[2] == d.getFullYear())) { date = "Today"; }
  document.write("<p id='name_date'><strong><span style='border: solid 1px black;'>" + name + "&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;" + date + "</span></strong><br /></p>");
  document.write("<span style='font-family:arial;'>" + text + "</span>");
  document.write("</td></tr></table>");
  document.write("</div>");
  console.log("created post by"+ name);
}

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
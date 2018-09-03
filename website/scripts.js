// Filters links list in response to entering of search query character.
function searchLinks() {
    // Loop through all list items, and hide those who don't match the search filter.
    const filter = $("#searchBar")[0].value.toLowerCase();
    const links = $("#myLinks li");
    for (var i=0; i < links.length; i++) {
        const linkName = $(links[i]).find("a")[0];
        if ($(linkName).html().toLowerCase().indexOf(filter) == 0) {
            $(links[i]).show();
        } else {
            $(links[i]).hide();
        }
    }
}

// Loads the links data from the server and display a list of them.
function showLinks() {
    $.getJSON("https://cloudlinks.nfshost.com/links.php", function(data){
      for(i in data.links) {
        const url = data.links[i].url;
	const favicon_url = url + "/favicon.ico";
        $("#myLinks").append("<li>" +
          "<img src=\"link_type_out.png\">&nbsp;" + 
          "<img src=\"" + favicon_url + "\" width=\"16\">&nbsp;" +
          "<a href=\"" + url + "\">" + data.links[i].name + "</a></li>");
      }
    });
}

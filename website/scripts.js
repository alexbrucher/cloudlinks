function searchLinks() {
    // Declare variables
    var searchInput, filter, links, linkTag, i;
    searchInput = document.getElementById('searchBar');
    filter = searchInput.value.toUpperCase();
    links = document.getElementById("myLinks").getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query.
    for (var i in links) {
        linkTag = links[i].getElementsByTagName("a")[0];
        if (linkTag.innerHTML.toUpperCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}

function showLinks() {
    $.getJSON("https://cloudlinks.nfshost.com/links.php", function(data){
      for(i in data.links) {
        var url = data.links[i].url;
	var favicon_url = url + "/favicon.ico";
        $("#myLinks").append("<li>" +
          "<img src=\"link_type_out.png\">&nbsp;" + 
          "<img src=\"" + favicon_url + "\" width=\"16\">&nbsp;" +
          "<a href=\"" + url + "\">" + data.links[i].name + "</a></li>");
      }
    });
}

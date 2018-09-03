// Filters links list in response to entering of search query character.
function searchLinks() {
    var searchInput = document.getElementById('searchBar');
    var filter = searchInput.value.toLowerCase();

    // Loop through all list items, and hide those who don't match the search query.
    var links = document.getElementById("myLinks").getElementsByTagName('li');
    for (var i=0; i < links.length; i++) {
        var as = links[i].getElementsByTagName("a");
        var linkTag = as[0];
        if (linkTag.innerHTML.toLowerCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}

// Loads the links data from the server and display a list of them.
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

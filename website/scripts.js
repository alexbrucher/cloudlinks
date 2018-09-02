function searchLinks() {
    // Declare variables
    var searchInput, filter, links, linkTag, i;
    searchInput = document.getElementById('searchBar');
    filter = searchInput.value.toUpperCase();
    links = document.getElementById("myLinks").getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query.
    for (i = 0; i < links.length; i++) {
        linkTag = links[i].getElementsByTagName("a")[0];
        if (linkTag.innerHTML.toUpperCase().indexOf(filter) > -1) {
            links[i].style.display = "";
        } else {
            links[i].style.display = "none";
        }
    }
}

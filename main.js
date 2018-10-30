var isbn = prompt("Please enter ISBN", "0449212602");

$.getJSON(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`, function(data) {
    //JSON is in "data"
  $("#title").append(data[`ISBN:${isbn}`].title);
  $("#numPages").append(data[`ISBN:${isbn}`].number_of_pages);
  $("#coverImage").attr("src", data[`ISBN:${isbn}`].cover.large);
});

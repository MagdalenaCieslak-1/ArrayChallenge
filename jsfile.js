var movieList = ["Avengers: Infinity War", "Aquaman", "Solo: A Star Wars Story", "Fantastic Beasts: The Crimes of Grindelwald", "Black Panther", "Spider-Man: Into the Spider-Verse", "Jurassic World: Fallen Kingdom", "Ant-Man and the Wasp", "Bumblebee", "The Grinch"];

// console statement that outputs the list of movie titles
console.log("The full list of movies: " + movieList.join());

// statement that reverses and outputs the contents of the list - without changing the original list

var newMovieList = [...movieList].reverse();
console.log(newMovieList.join());

// statement that puts a movie on to the end of the original list and output using a console statement

movieList.push("Deadpool 2 ");
console.log(movieList.join());

// statement that puts a movie on to the start of the original list and output using a console statement

movieList.unshift("Mary Poppins Returns");
console.log(movieList.join());

// statement that inserts a movie as the second item in the list

movieList.splice(1,0, "Incredibles 2");
console.log(movieList.join());

// statement that inserts the list into the html page as as list of paragraphs (<p> tag)

/*var txt = " ";
movieList.forEach(myFunction);
document.getElementById("listOfMovies").innerHTML = txt;
function myFunction(value) {
  txt = "<p>" + txt + value + "</p>"; 
}
*/
document.getElementById("listOfMovies").innerHTML = "<p>" + movieList.join("</p> <p>") + "</p>";


// statement that inserts the list into the html page as an ORDERED (OL) list

document.getElementById("orderedList").innerHTML = "<ol> <li>" + movieList.join("</li> <li>") + "</li> </ol>";
const Cinema = function (films) {
  this.films = films;
};

/* map calls a provided callback function once for each element in an array,
   in order, and constructs a new array from the results. */
Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film) {
    return film.title;
  })
};

/* The find method executes the callback function once for each index of the
   array until it finds one where callback returns a true value */
Cinema.prototype.findByTitle = function (){
  return this.films.find(function(film) {
    return film.title;
  })
};

/* we pass in (genre) we use the .filter function, on films we then super duper
equals on films.genre and the genre we pass in   */
Cinema.prototype.getFilmsByGenre = function (genre) {
  return this.films.filter(function(film){
    return film.genre === genre;
  })
};

/* we pass in (year) we use the .some function, on films we then super duper
equals on films.year and the year we pass in */


/* some() executes the callback function once for each element present in the array
   until it finds one where callback returns a truthy value (a value that becomes true
   when converted to a Boolean). */
Cinema.prototype.filmsForYear = function (year) {
  return this.films.some(function(film){
    return film.year === year;
  })
};


// Cinema.prototype.checkLength = function (length) {
//   let filmLength = 0;
//   this.films.every(function(film){
//     return filmLength = filmLength + film.length
//   })
//   return filmLength;
// }

module.exports = Cinema;

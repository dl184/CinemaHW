const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film) {
    return film.title;
  })
};

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
equals on films.year and the year we pass in   */
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

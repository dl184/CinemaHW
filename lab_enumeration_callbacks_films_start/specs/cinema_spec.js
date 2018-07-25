const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  /* let allows us to access variables we create below */
  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;



  /* we create instances of 'film' using the properties defined in the film class */
  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    /* we pass films in to an array */
    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });


  it('should have a collection of films', function() {
    let actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  /* we list all the films in expcted then use cinema.filmTitles which is a method we wrote in the cinema class */
  it('should be able to get a list of film titles', function(){
    let expected = ["Moonlight", "Blade Runner 2049", "Dunkirk", "Black Panther", "T2 Trainspotting"];
    let actual = cinema.filmTitles();
    assert.deepStrictEqual(actual, expected);
  });

  /* we pass in an individual film and use .findByTitle method we wrote in cinema class */
  it('should be able to find a film by title', function(){
    let expected = moonlight;
    let actual = cinema.findByTitle();
    assert.deepStrictEqual(actual, expected)
  });

  /* we pass in 2 films of the same genre and use .getFilmsByGenre method we wrote in
     cinema class then pass in the genre of they films */
  it('should be able to filter films by genre', function(){
    let expected = [moonlight, trainspotting];
    let actual = cinema.getFilmsByGenre("drama");
    assert.deepStrictEqual(actual, expected)
  });


  it('should be able to check whether there are some films from a particular year', function(){
    let expected = true;
    let actual = cinema.filmsForYear(2017);
    assert.deepStrictEqual(actual, expected)
  });

  /*  we pass in a year that a film year that isnt there and set expected to false and use .filmsForYear
  which is a method in cinmea class, we use the same method on the test above */
  it('should be able to check whether there are no films from a particular year', function(){
    let expected = false;
    let actual = cinema.filmsForYear(1999);
    assert.deepStrictEqual(actual, expected)
  });

  /*  we put the running time at 100 and expect false as there are not films over that length and use .checkLength */
  // it('should be able to check whether all films are over a particular length', function(){
  //   let expected = false;
  //   let actual = cinema.checkLength(100);
  //   assert.deepStrictEqual(actual, expected)
  // });

  it('should be able to calculate total running time of all films');

});

module.exports = Cinema;

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((x) => x.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((e) => e.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const newArray = array.filter((e) => e.director === director);
  let long = newArray.length;
  const suma = newArray.reduce((a, b) => a + b.score, 0);
  let result = suma / long;
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const result = array.map((x) => x.title).sort();
  return result.slice(0, 20);
}
// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = [...array];
  result.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.year === b.year) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
    }
  });
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const movies = array.filter((movie) => {
    return movie.genre.includes(genre) && movie.score !== '';
  });
  const suma = movies.reduce((a, b) => a + b.score, 0);
  let long = movies.length;
  const result = suma / long;
  return Number(result.toFixed(2));
}

//---NIVELL 2---

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const newArray = array.map((movie) => {
    const newMovie = { ...movie };
    const duracion = newMovie.duration.split(' ');
    const horas = Number(duracion[0].replace('h', ''));
    let minuts = 0;
    if (duracion.length > 1) {
      minuts = Number(duracion[1].replace('min', ''));
    }
    const result = horas * 60 + minuts;
    newMovie.duration = result;
    return newMovie;
  });
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

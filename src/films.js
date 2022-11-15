// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((x) => x.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = [];
  result = array.filter((e) => e.director === director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const newArray = array.filter((e) => e.director === director);
  let long = newArray.length;
  const suma = newArray.reduce((a, b) => a + b.score, 0);
  let result = suma / long;
  console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  result = array.map((x) => x.title).sort();
  console.log('EXERCICE 4 ->', result);
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
  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  /*  array.filter((e) => e.duration);
  let tiempo = duration.split(':');
  let duradaTotal = parseInt(tiempo[0]) * 60 + parseInt(tiempo[1]);
  return duradaTotal; */
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

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

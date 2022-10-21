
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((film) => film.director);
  // console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
// DIU QUE ESTA BE, PERO NO VEIG EL RESULTAT EN EL LOG

function getMoviesFromDirector(array, director) {
  const moviesFromDirector = array.filter((film) => film.director === director);
  // console.log('EXERCICE 2 ->', moviesFromDirector);
  return moviesFromDirector;
 
}

// Exercise 3: Calculate the average of the films of a given director. 
function moviesAverageOfDirector(array, director) {
  
  let average = 0;
  
  const directorFilms = array.filter(film => film.director === director);
  const numberOfFilms = directorFilms.length;
  let maxScore = directorFilms.reduce ((totalScore, film) => {
    return totalScore + film.score;
  },0);

  // console.log('EXERCICE 3 ->', directorFilms);
  // console.log('EXERCICE 3 ->', numberOfFilms);
  average = Number((maxScore / numberOfFilms).toFixed(2));
  // console.log('EXERCICE 3 ->',average);
  return average
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const firtsTwuenty = [...array]
  .map(film => film.title)
  .sort()
  .slice(0,20)
  // console.log('EXERCICE 4 ->', firtsTwuenty)
  return firtsTwuenty;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  
  const filmByYear = array
  .map(film => film)
  .sort((a, b) =>{ 
    if(a.year > b.year){
      return 1
    }else if(a.year < b.year){
      return -1
    }else if(a.year === b.year){
      if(a.title.localeCompare(b.title) == 1){
        return 1
      }else{
        return -1
      }
    }  
  }); 
  console.log('EXERCICE 5 ->', filmByYear);
  return filmByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

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
    bestFilmOfYear,
  };
}

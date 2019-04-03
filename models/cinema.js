const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = (films) => {
  const result = films.map( (film) => {
   return film.title;
  });
  return result;
};

Cinema.prototype.findFilmByTitle = (films, title ) => {
  const result = films.find( (film) => {
    return film.title === title
  });
  return result;
};

Cinema.prototype.filterFilmsByGenre = (films, genre) => {
  const result = films.filter( (film) => {
    return film.genre === genre
    }
  );
  return result;
};

Cinema.prototype.filterByYear = (films, year) => {
  const result = films.filter( (film) => {
    if (film.year === year) {
      return film
    }
    else {
      return false;
    };
  });
  return result;
};

Cinema.prototype.checkAllFilmsLength = (films, length) => {
  array = []
  films.filter( (film) => {
    if (film.length > length)
      array.push(film)
  });
  if (array.length === films.length) {
    return true
  }
    return false
};

Cinema.prototype.calculateTotalFilmTimes = (films) => {
  let result = films.reduce( (sum, film) => {
    return sum += film.length
  }, 0);
  return result;
};

Cinema.prototype.filterFilmsByProperty = (films, property) => {
  const result = films.filter( (film) => {
    if (property === film.genre) {
      return film;
    } else if (property === film.length) {
      return film;
    } else if (property === film.year) {
     return film
   };
 });
  return result;
};

module.exports = Cinema;

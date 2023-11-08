const moviesAndShows = [
{
    title: "Il Signore degli Anelli: La Compagnia dell'Anello",
    year: 2001,
    genre: "Fantasy",
    rating: 9.2,
    type: "movie"

},
{
    title: "Breaking Bad",
    year: 2008,
    genre: "Drama",
    rating: 9.5,
    type: "tv",
    seasons: 5

},
{
    title: "La forma dell'acqua",
    year: 2017,
    genre: "Fantasy",
    rating: 7.3,
    type: "movie"
},
{
    title: "Game of Thrones",
    year: 2011,
    genre: "Fantasy",
    rating: 9.3,
    type: "tv",
    seasons: 8
},
{
    title: "Titanic",
    year: 1997,
    genre: "Drama",
    rating: 7.8,
    type: "movie"
},
{
    title: "Stranger Things",
    year: 2016,
    genre: "Science Fiction",
    rating: 8.7,
    type: "tv",
    seasons: 4
},
{
    title: "Inception",
    year: 2010,
    genre: "Science Fiction",
    rating: 8.8,
    type: "movie"
},
{
    title: "Friends",
    year: 1994,
    genre: "Comedy",
    rating: 8.5,
    type: "tv",
    seasons: 10
},
{
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    type: "movie"
},
{
    title: "The Crown",
    year: 2016,
    genre: "Drama",
    rating: 8.6,
    type: "tv",
    seasons: 5
}
]

class Movie {
    #title;
    #year;
    #genre;
    #rating;
    #type;
    constructor (title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;

    }
    get title(){
        return this.#title;
    }
    get year(){
        return this.#year;
    }
    get genre(){
        return this.#genre;
    }
    get rating(){
        return this.#rating;
    }
    get type(){
        return this.#type;
    }
    set title(value){
        this.#title = value;
    }
    set year(value){
        this.#year = value;
    }
    set genre(value){
        this.#genre = value;
    }
    set rating(value){
        this.#rating = value;
    }
    set type(value){
        this.#type = value;
    }
    

    toString(){
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    }
}

class TvSeries extends Movie {
    seasons;

    constructor (title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;

    }
    toString(){
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
    }
}


const show1 = new Movie(moviesAndShows[0].title,moviesAndShows[0].year,moviesAndShows[0].genre,moviesAndShows[0].rating,moviesAndShows[0].type);
let show2 = new Movie("titanic","1999","drama","8","movie")
let show3 = new TvSeries("Better Call Saul", 2015, "drama", 9, "tv", 6)
// console.log(show1.toString());
// console.log(show2.toString());
// console.log(show3.toString());

const typeShows = moviesAndShows.map(element => {
    if (element.type === "movie") {
      return new Movie(element.title, element.year, element.genre, element.rating, element.type);
    } else if (element.type === "tv") {
      return new TvSeries(element.title, element.year, element.genre, element.rating, element.type, element.seasons);
    }
  });

// console.log(typeShows[0].type);

function averageMovieRatingGenre (movieList, genre){
    const movieArray = movieList.filter(movie => (movie.type === "movie" && movie.genre === genre)) 
    // console.log(movieArray);
    let somma = 0;
    movieArray.forEach(element => { console.log(somma += element.rating);
    });
    let avgRating = somma / movieArray.length;
    return avgRating;
}

const nuovoArray = averageMovieRatingGenre(typeShows, "Fantasy");
console.log(nuovoArray);

function movieGenreList (movieList) {
    const movieArray = movieList.filter(movie => (movie.type === "movie"));
    const genreList = [];
    movieArray.forEach(movie => {
        if (!genreList.includes(movie.genre)) {
            genreList.push(movie.genre)
        }
    })
    return genreList;
}

// console.log(movieGenreList(typeShows));

//task 8 
// Creiamo una funzione che filtri i film in base ad un genere passato come argomento e ne ritorni un array con all’interno il risultato della funzione toString() di ogni film.
function movieByGenreInfos (movieList, genre){
    const movieArray = movieList.filter(movie => (movie.type === "movie" && movie.genre === genre))
    const movieInfos = [];
    movieArray.forEach(movie => { movieInfos.push(movie.toString())
    });
    return movieInfos;
}

// console.log(movieByGenreInfos(typeShows, "Drama"));

//bonus 1


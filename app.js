// Dummy data for startup video posters as placeholders
const randomVideos = [
    {
        title: "Star Wars: Episode IV - A New Hope",
        year: "1977",
        plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
        director: "George Lucas",
        actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
        poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
        title: "Placeholder Movie 2",
        year: "2023",
        plot: "This is a placeholder plot for movie 2.",
        director: "Director 2",
        actors: "Actor 3, Actor 4",
        poster: "https://m.media-amazon.com/images/M/MV5BZDhlZmRlNmMtYmMyYy00Zjg0LWI0ZmQtYzNiNWM5YTU4YTI3XkEyXkFqcGdeQXVyNjQ0NjY3MDY@._V1_SX300.jpg"
    },
    {
        title: "Placeholder Movie 3",
        year: "2023",
        plot: "This is a placeholder plot for movie 3.",
        director: "Director 3",
        actors: "Actor 5, Actor 6",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        title: "Placeholder Movie 4",
        year: "2023",
        plot: "This is a placeholder plot for movie 4.",
        director: "Director 4",
        actors: "Actor 7, Actor 8",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
        title: "Placeholder Movie 5",
        year: "2023",
        plot: "This is a placeholder plot for movie 5.",
        director: "Director 5",
        actors: "Actor 9, Actor 10",
        poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
        title: "Placeholder Movie 6",
        year: "2023",
        plot: "This is a placeholder plot for movie 6.",
        director: "Director 6",
        actors: "Actor 11, Actor 12",
        poster: "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
    }
];

// Function to display startup video placeholders from array above
function displayRandomVideos() {
    const movieDataContainer = document.getElementById('movieDataContainer');
    movieDataContainer.innerHTML = '';

    randomVideos.forEach(video => {
        const movieLi = document.createElement('li');
        movieLi.classList.add('video');

        movieLi.innerHTML = `
            <div class="video__wrapper">
                <img src="${video.poster}" class="video__img" alt="${video.title} Poster" />
                <div class="video__wrapper--bg"></div>
                <div class="video__description">
                    <h3 class="video__description--title">${video.title} (${video.year})</h3>
                    <h4 class="video__description--sub-title">Director: ${video.director}</h4>
                    <p class="video__description--para">${video.plot}</p>
                    <div class="video__description--links">
                        <a href="#" class="video__description--link">
                            <i class="fas fa-link"></i> Placeholder Link
                        </a>
                    </div>
                </div>
            </div>
        `;
        movieDataContainer.appendChild(movieLi);
    });
}

// Call this function for video placeholders?
document.addEventListener('DOMContentLoaded', function() {
    displayRandomVideos();




    

    const inputField = document.getElementById('movieTitle');
    const searchButton = document.getElementById('searchButton');
    const sortDropdown = document.getElementById('sortDropdown');

    // Event listener for the search button click
    searchButton.addEventListener('click', handleSearch);

    // Event listener for the Enter key press
    inputField.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
            searching()
        }
    });


    sortDropdown.addEventListener('change', function() {
        const selectedOption = sortDropdown.value;
        if (selectedOption === 'a-to-z') {
            sortMoviesAlphabetically(true);
        } else if (selectedOption === 'z-to-a') {
            sortMoviesAlphabetically(false);
        }
    });
});


// this code adds the loading background

function searching() {
        const loading = document.querySelector(`.modal__overlay--loading`)
        loading.classList += " modal__overlay--visible"
        setTimeout(() => {
            loading.classList.remove("modal__overlay--visible")
            console.log("it worked 1")
        }, 1500)
    }

    


// Function to fetch movies from API based on search term
async function fetchMoviesByTitle(title) {
    const encodedTitle = encodeURIComponent(title);
    const apiUrl = `https://www.omdbapi.com/?s=${encodedTitle}&apikey=1a2156b7`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Whoops, our bad...response was not ok');
        }
        
        const movieData = await response.json();
        return movieData.Search ? movieData.Search : null; // Return movies
        
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return null;
    }
}

// Function to fetch movie details from OMDB API based on movie ID?
async function fetchMovieDetails(imdbID) {
    const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&plot=short&apikey=1a2156b7`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const movieDetails = await response.json();
        return movieDetails;
        
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
}

// Function to handle the search
async function handleSearch() {
    const inputField = document.getElementById('movieTitle');
    const movieDataContainer = document.getElementById('movieDataContainer');
    const displayedMovieIDs = new Set();
    const title = inputField.value.trim();
    
    if (title === '') {
        // Clears movie data if input is empty?
        movieDataContainer.innerHTML = '';
        displayedMovieIDs.clear();
        return;
    }

    try {
        // Fetch movie data based on current input
        const movies = await fetchMoviesByTitle(title);
        movieDataContainer.innerHTML = '';
        
        if (movies) {
            let displayedCount = 0; // Counter to keep track of displayed movies. Movies kept coming in duplicates due to js script being enterd at the beginning AND the end of the document.  Do not need counter 

            for (let i = 0; i < movies.length && displayedCount < 6; i++) {
                const movie = movies[i];

                if (displayedMovieIDs.has(movie.imdbID)) {
                    continue; // Skip duplicate movie
                }

                const movieDetails = await fetchMovieDetails(movie.imdbID);
                if (movieDetails) {
                    displayedMovieIDs.add(movieDetails.imdbID); // Track displayed movie
                    displayedCount++; // Increment the counter

                    const movieLi = document.createElement('li');
                    movieLi.classList.add('video');
                    
                    // Construct poster image using movie data
                    const posterUrl = `http://img.omdbapi.com/?apikey=1a2156b7&i=${movieDetails.imdbID}`;

                    // this is the code that injects video data into the wrapper ...super important

                    movieLi.innerHTML = `
                        <div class="video__wrapper">
                            <img src="${posterUrl}" class="video__img" alt="${movieDetails.Title} Poster" />
                            <div class="video__wrapper--bg"></div>
                            <div class="video__description">
                                <h3 class="video__description--title">${movieDetails.Title} (${movieDetails.Year})</h3>
                                <h4 class="video__description--sub-title">Director: ${movieDetails.Director}</h4>
                                <p class="video__description--para">${movieDetails.Plot}</p>
                                <div class="video__description--links">
                                    <a href="https://www.imdb.com/title/${movieDetails.imdbID}" class="video__description--link" target="_blank">
                                        <i class="fas fa-link"></i> IMDb
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                    movieDataContainer.appendChild(movieLi);
                }
            }
        } else {
            movieDataContainer.innerHTML = '<li class="error-message">No movies found</li>';
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
        movieDataContainer.innerHTML = '<li class="error-message">Error fetching movie data. Please try again later.</li>';
    }   
    sortDropdown.value = 'default';
}

// async function onSortChange(event) {
    
 

// )
//     console.log('this ran')
//     movieLi.Title.sort(A, Z)



// }

function sortMoviesAlphabetically(ascending = true) {
        const movieDataContainer = document.getElementById('movieDataContainer');
        const movies = Array.from(movieDataContainer.children);
    
        movies.sort((a, b) => {
            const titleA = a.querySelector('.video__description--title').textContent.toLowerCase();
            const titleB = b.querySelector('.video__description--title').textContent.toLowerCase();
            return ascending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
        });

    // Clear the container and append sorted movies
    movieDataContainer.innerHTML = '';
    movies.forEach(movie => movieDataContainer.appendChild(movie));

    const sorting = document.querySelector(`.modal__overlay--loading`)
        sorting.classList += " modal__overlay--visible"
        setTimeout(() => {
            sorting.classList.remove("modal__overlay--visible")
            console.log("it worked 1")
        }, 1000)
}
// render movies sami doma

const getMovies = (callb) => {
    $.get("/movies", (res) => {
        callb(res);
    });
}

getMovies(console.log);
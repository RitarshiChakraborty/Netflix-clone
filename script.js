function searchMovies()
{
    let movieName = document.getElementById("search").value;   // value property only works with input fields

    if(movieName !== "")
    {
        let result = movies.filter(function(movie)
                    {
                        return movie.name.toUpperCase().includes(movieName.toUpperCase());
                    })


        // No movies found
        if(result.length == 0)
        {
            
        }

        displayMovie(result);
    }

    else{
        displayMovie(movies);
    }

}   



let movies = [

    {
        name:"Amazon Obhijaan",
        rating: "6.7",
        poster: "https://m.media-amazon.com/images/M/MV5BNGI4MGQ4MzktOTE1Yy00ZmFlLTgxZGYtNzUyOWQ0NWZlNTVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        description: "Anna, an Italian woman, approaches Shankar, an explorer, to accompany her in search of the golden city of El Dorado and he accepts the offer and sets out on an adventure through the Amazon."
    },

    {
        name:"Avengers: Infinity War",
        rating: "8.4",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
        description: "The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan."
    },

    {
        name:"Justice League",
        rating: "6.1",
        poster: "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        description: "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy."
    },

    {
        name:"Your Name",
        rating: "8.4",
        poster: "https://m.media-amazon.com/images/I/81Srfj485IL.jpg",
        description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person."
    },

    {
        name:"The Tomorrow War",
        rating: "6.6",
        poster: "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        description: "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species."
    },

    {
        name:"Weathering With You",
        rating: "7.5",
        poster: "https://rukminim2.flixcart.com/image/850/1000/k3ncakw0/poster/8/t/r/medium-anime-tenki-no-koweathering-with-you-main-wall-d-cor-original-imafmq6csgxfdyge.jpeg?q=90&crop=false",
        description: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather."
    },

    {
        name:"Annabelle",
        rating: "5.4",
        poster: "https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
        description: "A couple begins to experience terrifying supernatural occurrences involving a vintage doll shortly after their home is invaded by satanic cultists."
    },

    {
        name:"Lagaan",
        rating: "8.1",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "During the British Raj, a farmer named Bhuvan accepts the challenge of Captain Andrew Russell to beat his team in a game of cricket and enable his village to not pay taxes for the next three years."
    },

    {
        name:"Edge of Tomorrow",
        rating: "7.9",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg",
        description: "After the alien forces launch an attack on Earth and threaten to wipe out the human race, Captain Cage, who is trapped in a time loop, teams up with a warrior to save the planet."
    },

    {
        name:"Avengers: Endgame",
        rating: "8.4",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        description: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
    },

    {
        name:"The Dark Knight",
        rating: "9.0",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        description: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late."
    },

    {
        name:"The Nun",
        rating: "5.3",
        poster: "https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg",
        description: "A priest and a novice arrive in Romania to investigate the death of a young nun. However, things take an ugly turn after they encounter a supernatural force"
    },

    {
        name:"12th Fail",
        rating: "9.0",
        poster: "https://m.media-amazon.com/images/M/MV5BZDI4OTM1ZjMtOWQxMC00OTY5LTg3NjQtMjlhMWVjODFlYTY4XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg",
        description: "IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC."
    },

    {
        name:"Batman v Superman: Dawn of Justice",
        rating: "6.5",
        poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        description: "Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all."
    },

    {
        name:"5 Centimeters Per Second",
        rating: "7.5",
        poster: "https://i.pinimg.com/474x/f0/6a/94/f06a9402122d4d84334314d644513775.jpg",
        description: "Stuck in the past and unable to make any new memories, Takaki and Akari cling to the hope of seeing each other again. They live their everyday lives half-heartedly, both hurting themselves and the people around them."
    },

    {
        name:"Captain America: Civil War",
        rating: "7.8",
        poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
        description: "When the collective governments decide to ratify the Sokovia Accords, a legal document that regulates superhuman activity, it leads to a discordance between Captain America and Iron Man."
    },

    {
        name:"I Want To Eat Your Pancreas",
        rating: "8.0",
        poster: "https://i.pinimg.com/originals/1a/82/e1/1a82e13747ed52a173d894f55465fca5.jpg",
        description: "A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness. This secret brings the two together, as she lives out her final moments."
    },

    {
        name:"Unstoppable",
        rating: "6.8",
        poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8129775_p_v8_ao.jpg",
        description: "An unmanned, half-mile-long freight train hurtles towards a town at breakneck speed. An engineer and a young conductor, who happen to be on the same route, must race against time to try and stop it."
    },

    {
        name:"Avatar",
        rating: "7.9",
        poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    },

    {
        name:"Chander Pahar",
        rating: "6.4",
        poster: "https://m.media-amazon.com/images/M/MV5BMjE4MDE1Mjg5Nl5BMl5BanBnXkFtZTgwMTAyNzA4MDE@._V1_.jpg",
        description: "Shankar Roy Chowdhary, a 20-year-old man from Bengal, leaves his family and goes to Africa to the Mountain of the Moon in search of gold and diamond mines."
    },

    // {
    //     name:"",
    //     rating: "",
    //     poster: "",
    //     description: ""
    // },

    // {
    //     name:"",
    //     rating: "",
    //     poster: "",
    //     description: ""
    // },
];




function displayMovie(data)
{

    document.getElementById("movies").innerHTML="";

    let HtmlString = ``;


    for(let i=0; i<data.length; i++)
    {
        HtmlString = HtmlString + `
        <div class="movie">
        <div class="overlay">
            <div class="video"></div>
    
            <div class="details">
                <h1>${data[i].name}</h1>
                <h2>${data[i].rating}</h2>
                <p>${data[i].description}</p>
            </div>
            </div>
            <img class="poster" src="${data[i].poster}" alt="">
        </div>`;
    }


    document.getElementById("movies").innerHTML = HtmlString;
}

displayMovie(movies);

// Another way of creating elements

// let movie = document.createElement("div");  
// movie.classList.add("movie");  // <div class="movie"></div>

// let overlay = document.createElement("div");
// overlay.classList.add("overlay");


// movie.appendChild(overlay);  // overlay becomes a child of movie

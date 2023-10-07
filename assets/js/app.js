const cl = console.log;

const addMovie = document.getElementById('addMovie');
const onBackdropcontrol = document.getElementById('backdrop');
const onMoviecontrol = document.getElementById('moviemodel');
const onfillform = document.getElementById('fillform');

const onCancel = [...document.querySelectorAll('.cancel')];

const movieTitle = document.getElementById('movieTitle');
const imageUrl = document.getElementById('imageUrl');
const movieRating = document.getElementById('movieRating');
const moviecard = document.getElementById('moviecard');
const ratingg = document.getElementById('rating');

let emptyArray = [];

const onCreatobj = eve => {
    eve.preventDefault()
    let newobj = {
        title : movieTitle.value,
        imageurl : imageUrl.value,
        rating : movieRating.value, 
    }
    emptyArray.push(newobj);
    cl(emptyArray)
    onfillform.reset(); 
    onMovieModel();

    let result = '';

    emptyArray.forEach(eve => {
    
        result += `
        <div class="col-md-4">
        <div class="card">
            <div class="card-header"><strong>${eve.title}</strong></div>
            <div class="card-body">
                <figure class="m-0">
                    <img src="${eve.imageurl}" alt="movie"
                </figure>
            </div>
            <div class="card-footer">
            <div class="row">
            <div class="col-md-3">
                <span class='${rating(eve.rating)}' id="rating">${eve.rating}</span>
            </div>
            <div class="col-md-9 text-right">
                <button class="btn btn-outline-danger">Delete</button>
            </div>
           </div>
            </div>
        </div>
    </div> 
        `
        
    })
    moviecard.innerHTML = result;
    
}



const onMovieModel = () => {
    onBackdropcontrol.classList.toggle('active');
    onMoviecontrol.classList.toggle('active');

    
}
onCancel.forEach(ele => {
    ele.addEventListener('click', onMovieModel);
});







addMovie.addEventListener('click',onMovieModel);

onfillform.addEventListener('submit', onCreatobj);
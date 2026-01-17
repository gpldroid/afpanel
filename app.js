let movies = [];


fetch("data/movies.json")
.then(r => r.json())
.then(data => {
movies = data;
renderMovies(movies);
});


function renderMovies(list) {
const box = document.getElementById("movies");
box.innerHTML = "";


list.forEach(m => {
box.innerHTML += `
<div class="card">
<img src="${m.poster}" loading="lazy" />
<h3>${m.title}</h3>
<p>${m.description}</p>
</div>
`;
});
}


search.oninput = e => {
const q = e.target.value.toLowerCase();
renderMovies(movies.filter(m => m.title.toLowerCase().includes(q)));
};

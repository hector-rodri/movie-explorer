async function searchMovie() {
    var query = document.getElementById("searchInput").value;
    var resultsList = document.getElementById("results");
    resultsList.innerHTML = "";

    if (query.trim() === "") {
        alert("Please enter a movie title.");
        return;
    }

    try {
        const api = await fetch(`http://www.omdbapi.com/?apikey=141a79ce&t=${query}`);
        var data = await api.json();

        if (data.Response === "False") {
            alert("Movie not found!");
            return;
        }

        var li = document.createElement('li');
        li.innerHTML = `
            <img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/80x120?text=No+Image'}" alt="Poster">
            <div>
                <h3>${data.Title} (${data.Year})</h3>
                <p>${data.Plot}</p>
            </div>
        `;

        if (resultsList.querySelector('li')) {
            return; 
        }
        resultsList.appendChild(li);

    } catch (error) {
        alert('Error getting data: ' + error);
    }
}

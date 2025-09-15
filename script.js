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
        li.textContent = `${data.Title} (${data.Year})`;
        resultsList.appendChild(li);

    } catch (error) {
        alert('Error getting data: ' + error);
    }
}

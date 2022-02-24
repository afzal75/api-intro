function loadAlbum (){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbum();

function displayAlbums(albums) {
    // console.log(albums);
    const albumContainer = document.getElementById('albums');
    for(const album of albums) {
        const p = document.createElement('p');
        p.innerText = `album: ${album.title}`;
        albumContainer.appendChild(p);
    }
}
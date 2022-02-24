function addComment () {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
addComment();


function displayComment (comments) {
    console.log(comments);
    const commentContainer = document.getElementById('comment');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>${comment.name}</h2>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `;
        commentContainer.appendChild(div);
    }
}
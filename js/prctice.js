function userButton () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayButton(data));
}

function displayButton(data){
    const ul = document.getElementById('users')
    for (const button of data){
        console.log(button.name);
        const li = document.createElement('li');
        li.innerText = `name: ${button.name}, email: ${button.email}`;
        ul.appendChild(li);
    }
}


function loadPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data));
}
loadPosts();



function displayPosts(posts){
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${post.title}</h3
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}






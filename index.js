const postList = document.getElementById('post-list');


let posts = JSON.parse(localStorage.getItem('posts')) || [];

postList.innerHTML = '';


if (posts.length === 0) {
    postList.innerHTML = '<li>No posts yet. Create a new post!</li>';
} else {
 
    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${post.title}</strong><br>
            ${post.content} <br>
            <a href="post.html?id=${post.id}">View/Edit</a>
        `;
        postList.appendChild(li);
    });
}
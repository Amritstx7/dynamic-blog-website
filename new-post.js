const form = document.getElementById('new-post-form');
const titleInput = document.getElementById('post-title');
const contentInput = document.getElementById('post-content');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    let posts = JSON.parse(localStorage.getItem('posts')) || [];


    const newPost = {
        id: Date.now(), 
        title: titleInput.value,
        content: contentInput.value
    };

    posts.push(newPost);


    localStorage.setItem('posts', JSON.stringify(posts));

    
    titleInput.value = '';
    contentInput.value = '';

    alert('Post added successfully!');
});
const form = document.getElementById('edit-post-form');
const titleInput = document.getElementById('edit-title');
const contentInput = document.getElementById('edit-content');
const deleteBtn = document.getElementById('delete-post'); 

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

let posts = JSON.parse(localStorage.getItem('posts')) || [];

let post = posts.find(p => p.id == postId);

if (post) {
    titleInput.value = post.title;
    contentInput.value = post.content;
} else {
    alert('Post not found!');
    window.location.href = 'index.html';
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    post.title = titleInput.value;
    post.content = contentInput.value;

    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post updated successfully!');
    window.location.href = 'index.html';
});


deleteBtn.addEventListener('click', function() {
    if (confirm('Are you sure you want to delete this post?')) {
        posts = posts.filter(p => p.id != postId); 
        localStorage.setItem('posts', JSON.stringify(posts));
        alert('Post deleted successfully!');
        window.location.href = 'index.html';
    }
});
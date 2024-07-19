let posts = [];
function displayPosts() {
    const blogPostsElement = document.getElementById('blog-posts');
    blogPostsElement.innerHTML = ''; 

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const authorElement = document.createElement('p');
        authorElement.classList.add('author');
        authorElement.textContent = `Written by ${post.author}`;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);

        blogPostsElement.appendChild(postElement);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    const newPost = {
        title: title,
        content: content,
        author: author
    };

    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    displayPosts();

    document.getElementById('blog-form').reset();
}

const form = document.getElementById('blog-form');
form.addEventListener('submit', handleFormSubmit);

document.addEventListener('DOMContentLoaded', () => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
        posts = storedPosts;
        displayPosts();
    }
});

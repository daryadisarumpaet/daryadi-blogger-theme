const replybox = document.querySelector('#top-ce'); // Or, .comment-replybox-thread

if (replybox) {
    const comment_form = document.querySelector('.comment-form');
    comment_form.appendChild(replybox);
}

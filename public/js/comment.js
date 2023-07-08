const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('Click');
    const description = document.querySelector('#comment-desc').value.trim();
    const postId = document.querySelector('#comment-button').getAttribute('data-id');

    if (description) {
      console.log(description, postId);
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ description, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       // Refresh the page
      location.reload();

    } else {
      alert('Failed to comment');
    }
  }
};

  
  document
    .querySelector('#comment-button')
    .addEventListener('click', commentFormHandler);
  
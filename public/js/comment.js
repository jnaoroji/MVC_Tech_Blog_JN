const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#project-desc').value.trim();

    if (description) {
      console.log(description);
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ description, user_id ,date_created }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("DONE!");
      } else {
        alert(response.statusText);
      }
    }
  };

  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  
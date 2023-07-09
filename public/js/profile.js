//creates a new blog post
document.getElementById('new-project-form').onsubmit = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create Blog Post');
    }
  }
};

//deletes an exisiting blog post

const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach((button) => {
  button.addEventListener('click', async (event) => {
    console.log('click!');
    event.preventDefault();
    
    const id = button.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete Blog Post');
    }
  });
});


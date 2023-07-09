const updatePost = async (event) => {
  event.preventDefault();
  const postId = event.target.getAttribute('data-id');
  const title = document.getElementById('project-name').value;
  const description = document.getElementById('project-desc').value;

  const response = await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  
  if (response.ok) {
    document.location.replace('/profile'); 
  } else {
    alert('Failed to update Blog Post');
  }

};

const deletePost = async (event) => {
  //deletes an exisiting blog post
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete Blog Post');
    }
  }
};

document.querySelector('#post-button').addEventListener('click', updatePost);
document.querySelector('#delete-button').addEventListener('click', deletePost);
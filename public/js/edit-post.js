const updatePost = async (event) => {
  event.preventDefault();
  console.log('click');
  const postId = event.target.getAttribute('data-id');
  console.log(postId);
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

document.querySelector('#post-button').addEventListener('click', updatePost);
document.getElementById('edit-project-form').onsubmit = async (event) => {
  event.preventDefault();

  const postId = document.location.pathname.split('/')[2];

  const title = document.getElementById('project-name').value;
  const description = document.getElementById('project-desc').value;

  await fetch(`/api/profile/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/profile');

};


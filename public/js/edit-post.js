document.getElementById('edit-project-form').onsubmit = async (event) => {
  event.preventDefault();

  const projectId = document.location.pathname.split('/')[2];

  const title = document.getElementById('project-name').value;
  const description = document.getElementById('project-desc').value;

  await fetch(`/api/profile/${projectId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/profile');

};


// const commentButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/swaps/${id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   },

//   const addCommentHandler = async (event) => {
//     event.preventDefault();
//     const commentInput = document.getElementById(‘comment-text’);
//     const comment = commentInput.value.trim();
//     if (comment !== ‘’) {
//       const postId = event.target.getAttribute(‘data-id’);
//       try {
//         const response = await fetch(`/api/swaps/${id}/comments`, {
//           method: ‘POST’,
//           headers: {
//             ‘Content-Type’: ‘application/json’
//           },
//           body: JSON.stringify({ comment })
//         });
//         if (response.ok) {
//           // Comment added successfully, perform necessary actions (e.g., update UI)
//           commentInput.value = ‘’;
//           // Additional code here if needed
//         } else {
//           // Handle error response from the server
//           const errorData = await response.json();
//           console.error(‘Failed to add comment:’, errorData.message);
//         }
//       } catch (error) {
//         // Handle any network or other errors
//         console.error(‘Failed to add comment:’, error);
//       }
//     }
//   };
// };

// document
//   .querySelector('#post-button')
//   .addEventListener('onClick', commentButtonHandler);



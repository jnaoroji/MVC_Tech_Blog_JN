// // Finds the comment button and the comment form elements
// const commentButton = document.querySelector('.comment-button');
// const commentForm = document.querySelector('#comment-form');

// // Add event listener to the comment button
// commentButton.addEventListener('click', () => {
//   // Show the comment form by modifying the display property
//   commentForm.style.display = 'block';
// });


// const commentButtonHandler = async (event) => {
//     event.preventDefault();
  
//     // Get the comment text from the input field
//     const commentText = document.querySelector('#comment-input').value.trim();
  
//     if (commentText) {
//       // Retrieve the project ID (assuming you have it available)
//       const projectId = 'your_project_id';
  
//       // Send a request to the server to leave a comment on the project
//       const response = await fetch(`/api/projects/${projectId}/comments`, {
//         method: 'POST',
//         body: JSON.stringify({ commentText }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         // Comment added successfully
//         alert('Comment added!');
//         // You can perform additional actions here, such as updating the comments section or refreshing the page
//       } else {
//         // Failed to add comment
//         alert('Failed to add comment');
//       }
//     }
//   };


document.querySelector('.comment-button')
addEventListener('click', commentButtonHandler);

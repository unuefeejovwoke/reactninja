import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

// ... (import statements)

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const [commentText, setCommentText] = useState('');


  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
  
    const newComment = {
      id: new Date().getTime(), // You can use a better ID generation method
      text: commentText,
      author: 'Your Name', // You can set this dynamically based on your user system
    };
  
    // Assuming you have an API to add a comment, adjust the URL and method accordingly
    fetch(`http://localhost:8000/blogs/${blog.id}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      .then(response => response.json())
      .then(() => {
        // Update the local state to show the new comment
        setCommentText('');
      });
  };
  

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>

          {/* Display comments */}
          <div>
          <h3>Comments:</h3>
          {blog.comments && blog.comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>{comment.text}</p>
              <p>By {comment.author}</p>
            </div>
          ))}

          {/* Comment form */}
          <form onSubmit={handleCommentSubmit}>
            <textarea
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
              placeholder="Write a comment..."
            ></textarea>
            <button type="submit">Submit Comment</button>
          </form>
        </div>

        </article>
      )}
    </div>
  );
};

export default BlogDetails;

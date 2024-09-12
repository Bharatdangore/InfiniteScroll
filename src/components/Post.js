
// import React from 'react';

// const Post = React.forwardRef(({ post }, ref) => {
//   return (
//     <div ref={ref} style={{ margin: '20px', padding: '20px', border: '1px solid #ddd',backgroundColor: 'grey' }}>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// });

// export default Post;

import React from 'react';

function Post({ post }, ref) {
  return (
    <div ref={ref} style={{ margin: '20px', padding: '20px', border: '1px solid #ddd',
                        backgroundColor: 'grey',width: '600px', marginLeft: '400px' }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

const ForwardedPost = React.forwardRef(Post);

export default ForwardedPost;

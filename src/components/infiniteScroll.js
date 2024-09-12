import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from './Post';

function InfiniteScroll() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false);
  
  const observer = useRef(); // Observer को स्टोर करने के लिए

  const lastPostElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setLoading(false);
    };
    
    fetchPosts();
  }, [page]);

  return (
    <div>
      {posts.map((post, index) => {
        if (posts.length === index + 1) {
          return <Post ref={lastPostElementRef} key={post.id} post={post} />;
        } else {
          return <Post key={post.id} post={post} />;
        }
      })}
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;

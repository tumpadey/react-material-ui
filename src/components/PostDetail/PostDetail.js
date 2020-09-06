import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Comments from '../Comments/Comments';
import './PostDetail.css'


const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [])
  
    
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])



   
    return (
        <div>
            <div className="detailStyle">
                <h3>Id:{post.id}</h3>
                <h4>Title:{post.title}</h4>
                <p>Body:{post.body}</p>
                <h3>Comments</h3>
            </div>
           
            
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;
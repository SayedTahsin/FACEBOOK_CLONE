import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';
import { deepPurple } from '@mui/material/colors';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { useTabContext } from '@mui/base';



function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
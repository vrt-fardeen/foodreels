import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/reels.css'
import './home-fab.css'
import ReelFeed from '../../components/ReelFeed'

const Home = () => {
    const [ videos, setVideos ] = useState([])
    const navigate = useNavigate()
    // Autoplay behavior is handled inside ReelFeed

    useEffect(() => {
        axios.get("http://localhost:3000/api/food", { withCredentials: true })
            .then(response => {

                console.log(response.data);

                setVideos(response.data.foodItems)
            })
            .catch(() => { /* noop: optionally handle error */ })
    }, [])

    // Using local refs within ReelFeed; keeping map here for dependency parity if needed

    async function likeVideo(item) {
        try {
            // Try to make the request
            const response = await axios.post("http://localhost:3000/api/food/like", 
                { foodId: item._id }, 
                { withCredentials: true }
            )

            // If successful, update the UI
            if(response.data.like) {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { 
                    ...v, 
                    likeCount: (v.likeCount || 0) + 1
                } : v))
            } else {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { 
                    ...v, 
                    likeCount: Math.max(0, (v.likeCount || 0) - 1)
                } : v))
            }
        } catch (error) {
            // If error is authentication related, redirect to login
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                navigate('/user/login');
            } else {
                console.error('Error liking video:', error);
            }
        }
        
    }

    async function saveVideo(item) {
        try {
            const response = await axios.post("http://localhost:3000/api/food/save", 
                { foodId: item._id }, 
                { withCredentials: true }
            )

            if(response.data.save) {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { 
                    ...v, 
                    savesCount: (v.savesCount || 0) + 1,
                    saves: (v.savesCount || 0) + 1
                } : v))
            } else {
                setVideos((prev) => prev.map((v) => v._id === item._id ? { 
                    ...v, 
                    savesCount: Math.max(0, (v.savesCount || 0) - 1),
                    saves: Math.max(0, (v.savesCount || 0) - 1)
                } : v))
            }
        } catch (error) {
            // If error is authentication related, redirect to login
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                navigate('/user/login');
            } else {
                console.error('Error saving video:', error);
            }
        }
    }

    return (
        <>
            <button 
                className="create-food-fab"
                onClick={() => navigate('/food-partner/register')}
                title="Become a Food Partner"
            >
                <svg viewBox="0 0 24 24">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                    <path d="M19.9390657,13 C19.4459499,16.0533221 16.9278343,18.4110244 13.8161546,18.7604616 L13.8161546,21 L11.1838454,21 L11.1838454,18.6658793 C8.15298657,18.2415561 5.69642406,15.9459632 5.14024293,13 L3,13 L3,11 L5.07567146,11 C5.55088051,7.87954046 8.1369359,5.45780636 11.3067264,5.06557288 L11.3067264,3 L13.9390356,3 L13.9390356,5.07824655 C16.9874273,5.53095882 19.4459499,7.94661789 19.9390657,11 L22,11 L22,13 L19.9390657,13 Z M7.10388361,12 C7.56203726,9.6256624 9.62316183,7.86979785 12,7.86979785 C14.3768382,7.86979785 16.4379627,9.6256624 16.8961164,12 L7.10388361,12 Z" />
                </svg>
                Partner
            </button>
            <ReelFeed
                items={videos}
                onLike={likeVideo}
                onSave={saveVideo}
                emptyMessage="No videos available."
            />
        </>
    );
};

export default Home;
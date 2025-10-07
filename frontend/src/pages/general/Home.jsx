import React, { useRef, useEffect , useState} from 'react';
import './VideoCard.css';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';


// Sample data - replace with real data from your API
// const sampleVideos = [
//   {
//     id: "v1",
//     url: 'https://ik.imagekit.io/fardeen/cfd2ed6a-c6cf-447e-98ed-f267ab81ea77_TSSvWGHt6',
//     description: 'Delicious butter chicken made with authentic spices and fresh cream. Try our special recipe that has been perfected over generations.',
//     storeUrl: 'https://example.com/store1'
//   },
//   {
//     id: "v2",
//     url: 'https://ik.imagekit.io/fardeen/cfd2ed6a-c6cf-447e-98ed-f267ab81ea77_TSSvWGHt6',
//     description: 'Crispy wood-fired pizzas with fresh mozzarella and basil. Made in our traditional Italian stone oven.',
//     storeUrl: 'https://example.com/store2'
//   },
//   {
//     id: "v3",
//     url: 'https://ik.imagekit.io/fardeen/cfd2ed6a-c6cf-447e-98ed-f267ab81ea77_TSSvWGHt6',
//     description: 'Crispy wood-fired pizzas with fresh mozzarella and basil. Made in our traditional Italian stone oven.',
//     storeUrl: 'https://example.com/store2'
//   },
//   // Add more sample videos as needed
// ];

const Home = () => {
  const [videos, setVideos] = useState([]);
  const reelRef = useRef(null);
  const navigate = useNavigate();
 
  // Intersection Observer to handle video playback
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target.querySelector('video');
          if (!video) return;
          
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            // Only play if completely visible
            video.currentTime = 0; // Reset video position
            video.play().catch(() => {}); // Handle autoplay restrictions
          } else {
            video.pause();
            video.currentTime = 0; // Reset when not visible
          }
        });
      },
      {
        threshold: 1.0, // Require 100% visibility
        rootMargin: '0px' // No margin to ensure precise detection
      }
    );

    // Observe all video cards
    const cards = reelRef.current?.querySelectorAll('.video-card');
    cards?.forEach(card => {
      observer.observe(card);
      // Reset video when component mounts
      const video = card.querySelector('video');
      if (video) {
        video.currentTime = 0;
        video.pause();
      }
    });

    return () => {
      cards?.forEach(card => {
        observer.unobserve(card);
        // Cleanup videos when component unmounts
        const video = card.querySelector('video');
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/api/food", { withCredentials: true })
    .then(response => {
      setVideos(response.data.foodItems);
    })
  })

  const setVideosRef = (id) => (el) => {
    if(!el){
      videoRefs.current.delete(id);
      return
    }
  }

  return (
    <div className="video-reel" ref={reelRef}>
      {videos.map(video => (
        <div key={video._id} className="video-card">
          <video 
            className="video-player"
            src={video.url}
            loop
            muted
            playsInline
            autoPlay
          />
          <div className="video-overlay">
            <p className="video-description">{video.description}</p>
            <button 
              className="store-button"
              onClick={() => window.open(video.storeUrl, '_blank')}
            >
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

import React, { useRef, useEffect, useState, lazy, Suspense } from 'react';
import './Horizontal.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoReturnDownBackOutline } from "react-icons/io5";

// Lazy load the Chinatown component
const Chinatown = lazy(() => import('./Chinatown'));

// Lazy loading video component
function LazyVideo({ src }) {
    const videoRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(videoRef.current);
                }
            });
        });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) observer.unobserve(videoRef.current);
        };
    }, []);

    return (
        <video ref={videoRef} className="video-background" autoPlay={isInView} loop muted>
            {isInView && <source src={src} type="video/mp4" />}
            Your browser does not support the video tag.
        </video>
    );
}

function Horizontal() {
    const targetsec = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetsec });
    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-108%']);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <section ref={targetsec} className='holderworks' id='archives'>
                <div className="holder2works">
                    <div className="video-background-container">
                        <LazyVideo src="/china.mp4" />
                    </div>
                    <motion.div style={{ x }} className="holder3">
                        <p style={{ marginTop: '50px', color: 'gray', position: 'fixed' }}>
                            <Link to={'/'}><IoReturnDownBackOutline /></Link>
                        </p>
                        <p className='workh1'>//ARCHIVES</p>
                        <Chinatown src='china.mp4' />
                        <Chinatown src='kodai.mp4' />
                        <Chinatown src='payyolipooram.mp4' />
                        <Chinatown src='mumbai.mp4' />
                        <Chinatown src='newspaper.mp4' />
                    </motion.div>
                </div>
            </section>
        </Suspense>
    );
}

export default Horizontal;

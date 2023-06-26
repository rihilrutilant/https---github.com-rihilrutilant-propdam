import React, { useEffect, useState } from 'react';
import "../Style/Home.css"
import Aos from 'aos';


const ImageSlider = ({ images, des, autoplayInterval = 3000 }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrev = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    const handleNext = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    useEffect(() => {
        Aos.init({});

        const autoplayTimer = setInterval(() => {
            handleNext();
        }, autoplayInterval);

        return () => {
            clearInterval(autoplayTimer);
        };
    }, [handleNext, autoplayInterval]);

    return (
        <div className="image-slider">
            <button className='handlePrev' onClick={handlePrev}>&lt;</button>
            <div className="slider-part" data-aos="fade-left" data-aos-delay="500">
                <img className='slider-img' src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
                <div className="dummy-tag">
                    <h3 >A dam of live properties.</h3>
                    <span style={{ color: "white" }}>{des[currentImage]}</span>
                </div>
            </div>
            <button onClick={handleNext} className='handlePrev'>&gt;</button>
        </div>
    );
};

export default ImageSlider;

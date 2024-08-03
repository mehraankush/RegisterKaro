"use client"
import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';

interface Testimonial {
    brand: string;
    comment: string;
    by: string;
}
interface CarouselProps {
    slides: Testimonial[];
    interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, interval);
        return () => clearInterval(intervalId);
    }, [nextSlide, interval]);

    return (
        <div className="flex justify-between mt-5">
            <div className='flex items-center'>
                <button className="rounded-full hover:bg-lightBlue p-2 px-3 border-black/30 border"
                    onClick={prevSlide}>
                    &larr;
                </button>
            </div>
            <div >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    >
                        <div className='flex '>
                            <div className='flex-1 flex justify-center items-center'>
                                <Image alt='brand'
                                    width={1000} height={1000}
                                    src={slide.brand}
                                    className='w-[300px] h-[300px] object-contain'
                                />
                            </div>

                            <div className='flex-1 flex justify-around flex-col items-center'>
                                <p>{slide.comment}</p>
                                <div className=' text-left w-full'>
                                    <p className='text-left font-bold'>-{slide.by}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center'>
                <button className="rounded-full hover:bg-lightBlue p-2 px-3 border-black/30 border"
                    onClick={nextSlide}>
                    &rarr;
                </button>
            </div>
        </div>
    );
};

import React from 'react';

const testimonials = [
    { id: 1, text: "Our game has surpassed 500 clients, each enjoying a unique and exciting experience. Join a community of passionate gamers who share your enthusiasm! Experience the thrill of gameplay that keeps players coming back for more. Discover why our game is the top choice for players seeking excitement.", author: "Game Dev Team", size: "large" },
    { id: 2, text: "The best gaming experience I've ever had!", author: "Alex", size: "small" },
    { id: 3, text: "An immersive and well-designed game. Highly recommend!", author: "Jordan", size: "small" },
    { id: 4, text: "This platform has brought me hours of fun and challenges.", author: "Taylor", size: "small" },
    { id: 5, text: "Great community and a fantastic game. Love it!", author: "Sam", size: "small" },
    { id: 6, text: "500 clients and counting! I’m one of the many happy players.", author: "Riley", size: "small" },
    { id: 7, text: "Thrilled to be part of this amazing gaming experience!", author: "Casey", size: "small" },
    { id: 8, text: "A must-play game that lives up to the hype!", author: "Morgan", size: "small" },
];

const TestimonialGrid = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 p-8">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">What Our Clients Are Saying</h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
                Hear from our satisfied players who have found joy, excitement, and challenge in our gaming platform. We’re proud to share some of their experiences and insights!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
                {testimonials.map(({ id, text, author, size }) => (
                    <div
                        key={id}
                        className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 
              ${size === "large" ? "lg:col-span-2 lg:row-span-2" : "col-span-1 row-span-1"}`}
                    >
                        <p className="text-gray-700 mb-4 italic text-lg">“{text}”</p>
                        <p className="text-right font-medium text-indigo-500">– {author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialGrid;

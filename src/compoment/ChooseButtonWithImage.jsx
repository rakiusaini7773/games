// ChooseButtonWithImage.js
import React from 'react';

const ChooseButtonWithImage = () => {
    // Points to display
    const reasons = [
        "Exciting Gameplay: Experience thrilling action and immersive worlds.",
        "Connect with Friends: Enjoy multiplayer modes and team up with friends.",
        "Skill Development: Enhance your strategic thinking and reflexes.",
        "Endless Entertainment: Discover new adventures and challenges."
    ];

   

    // Handler for button click
    const handleClick = () => {
        alert("Game Selected!"); // Placeholder action; replace with actual functionality
    };

    return (
        <div className="flex flex-col md:flex-row items-center space-y-7
         md:space-y-0 md:space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg m">
            <div className="flex-1 text-white"> {/* Text section */}
                <h2 className="text-2xl font-bold mb-4">Why You Should Choose a Game</h2>
                <ul className="list-disc list-inside space-y-2">
                    {reasons.map((reason, index) => (
                        <li key={index} className="text-lg">{reason}</li>
                    ))}
                </ul>
               
            </div>
            <div className="flex justify-center md:ml-auto"> {/* Flex container for a single image */}
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Wgd71awg7WCyvg9E9dLB04vAoySCXkw4g&s" // Replace with your image URL
                    alt="Choose a game"
                    className="w-32 h-32 md:w-96 md:h-96 object-cover rounded-lg border-4 border-yellow-400 transition-transform duration-200 hover:scale-105"
                />
            </div>
        </div>
    );
};

export default ChooseButtonWithImage;

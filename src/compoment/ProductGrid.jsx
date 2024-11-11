// PremiumSitesGrid.js
import React from 'react';
import premiumSites from '../data/gamesPhoto'; // Adjust the path as necessary

const PremiumSitesGrid = () => {
    // Group data by category
    const groupedData = premiumSites.reduce((acc, site) => {
        const { category } = site;
        if (!acc[category]) acc[category] = [];
        acc[category].push(site);
        return acc;
    }, {});

    return (
        <div className="p-4 space-y-8">
            {Object.keys(groupedData).map((category) => (
                <div key={category}>
                    <h2 className="text-2xl font-bold text-center mb-4">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {groupedData[category].map((site) => (
                            <div
                                key={site.name}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                <img
                                    src={site.image}
                                    alt={site.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 flex justify-center items-center flex-col">
                                    <h2 className="text-lg font-semibold">{site.name}</h2>
                                    <p className="text-gray-600 mt-2">Percentage: {site.percentage}</p>
                                    <p className="mt-2 text-yellow-500">
                                        Rating: {site.rating} ★
                                    </p>
                                    <a
                                        href={site.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                                    >
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PremiumSitesGrid;

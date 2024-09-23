import React from 'react';
import './SearchByType.css'; // Optional CSS file for better structure

export default function SearchByType() {
    const vehicleTypes = [
        { name: 'SUV', img: 'https://cdn-icons-png.flaticon.com/128/13584/13584003.png', link: '/search/SUV' },
        { name: 'Sedan', img: 'https://cdn-icons-png.flaticon.com/128/3202/3202003.png', link: '/search/Sedan' },
        { name: 'Hatchback', img: 'https://cdn-icons-png.flaticon.com/128/5035/5035167.png', link: '/search/Hatchback' },
        { name: 'Electric', img: 'https://cdn-icons-png.flaticon.com/128/4564/4564336.png', link: '/search/Electric' },
        { name: 'Convertible', img: 'https://cdn-icons-png.flaticon.com/128/5035/5035202.png', link: '/search/Convertible' },
        { name: 'Hybrid', img: 'https://cdn-icons-png.flaticon.com/128/3202/3202003.png', link: '/search/Hybrid' },
        { name: 'Coupe', img: 'https://cdn-icons-png.flaticon.com/128/4391/4391630.png', link: '/search/Coupe' },
        { name: 'Van', img: 'https://cdn-icons-png.flaticon.com/128/1433/1433678.png', link: '/search/Van' },
        { name: 'Truck', img: 'https://cdn-icons-png.flaticon.com/128/5814/5814855.png', link: '/search/Truck' }
    ];

    return (
        <>
            <h2 className="heading">Browse By Type</h2>
            <div className="vehicle-grid">
                {vehicleTypes.map((vehicle, index) => (
                    <a href={vehicle.link} key={index} className="vehicle-card">
                        <div className="vehicle-content">
                            <img src={vehicle.img} alt={vehicle.name} width="35" height="35" />
                            <h2 className="vehicle-title">{vehicle.name}</h2>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

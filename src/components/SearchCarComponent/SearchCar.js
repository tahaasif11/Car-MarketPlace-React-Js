import React, { useState } from 'react';
import './SearchCar.css'; // Import the CSS file

export default function SearchCar() {
    const [showCarDropdown, setShowCarDropdown] = useState(false);
    const [showMakeDropdown, setShowMakeDropdown] = useState(false);
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);

    const [selectedCar, setSelectedCar] = useState('Car');
    const [selectedMake, setSelectedMake] = useState('Model');
    const [selectedPrice, setSelectedPrice] = useState('Price');

    const handleDropdownToggle = (dropdown) => {
        if (dropdown === 'car') {
            setShowCarDropdown(!showCarDropdown);
            setShowMakeDropdown(false);
            setShowPriceDropdown(false);
        } else if (dropdown === 'make') {
            setShowMakeDropdown(!showMakeDropdown);
            setShowCarDropdown(false);
            setShowPriceDropdown(false);
        } else if (dropdown === 'price') {
            setShowPriceDropdown(!showPriceDropdown);
            setShowCarDropdown(false);
            setShowMakeDropdown(false);
        }
    };

    const handleOptionSelect = (type, option) => {
        if (type === 'car') {
            setSelectedCar(option);
            setShowCarDropdown(false);
        } else if (type === 'make') {
            setSelectedMake(option);
            setShowMakeDropdown(false);
        } else if (type === 'price') {
            setSelectedPrice(option);
            setShowPriceDropdown(false);
        }
    };

    return (
        <div className="search-container">
            <h2 className="heading">Find cars for sale and for rent near you</h2>
            <h2 className="search-title">Find Your Dream Car</h2>
            <div className="inputContainer">
                {/* Car Type Dropdown */}
                <div className="dropdownContainer">
                    <div className="dropdownButton" onClick={() => handleDropdownToggle('car')}>
                        {selectedCar}
                    </div>
                    {showCarDropdown && (
                        <div className="dropdownMenu">
                            {['New', 'Used', 'Certified Pre-Owned'].map((option) => (
                                <div key={option} className="dropdownItem" onClick={() => handleOptionSelect('car', option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="lineStyle"></div>

                {/* Car Make Dropdown */}
                <div className="dropdownContainer">
                    <div className="dropdownButton" onClick={() => handleDropdownToggle('make')}>
                        {selectedMake}
                    </div>
                    {showMakeDropdown && (
                        <div className="dropdownMenu">
                            {['Toyota', 'Ford', 'Tesla', 'BMW'].map((option) => (
                                <div key={option} className="dropdownItem" onClick={() => handleOptionSelect('make', option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="lineStyle"></div>

                {/* Price Range Dropdown */}
                <div className="dropdownContainer">
                    <div className="dropdownButton" onClick={() => handleDropdownToggle('price')}>
                        {selectedPrice}
                    </div>
                    {showPriceDropdown && (
                        <div className="dropdownMenu">
                            {['Under $20,000', '$20,000 - $50,000', 'Over $50,000'].map((option) => (
                                <div key={option} className="dropdownItem" onClick={() => handleOptionSelect('price', option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button type="submit" className='search-btn'><i className="fa fa-search"></i></button>
            </div>
            <img src="/tesla.png" className="search-image" alt="Tesla" />
        </div>
    );
}

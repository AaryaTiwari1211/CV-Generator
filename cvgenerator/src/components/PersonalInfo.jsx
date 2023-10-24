import React, { useState } from 'react';
import '../form.css';

const PersonalInfo = ({ formData, handleInputChange }) => {
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        mobile: false,
        linkedin: false,
        city: false,
        country: false,
    });

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim() !== '';
            case 'email':
                const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
                return emailPattern.test(value);
            case 'mobile':
                const mobilePattern = /^\d{10}$/;
                return value.trim() === '' || mobilePattern.test(value.substring(0, 10));
            case 'linkedin':
                return value.trim() !== '';
            case 'city':
                return value.trim() !== '';
            case 'country':
                return value.trim() !== '';
            default:
                return true;
        }
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        handleInputChange(event);

        const isValid = validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: !isValid,
        }));
    };

    return (
        <>
            <div className="personal-information">
                <h2 className="group-heading">
                    <span className="label">A</span> Personal Information
                </h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name || ''} onChange={handleFieldChange} required />
                {errors.name && <div className="error-message">Please enter your name.</div>}

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email || ''} onChange={handleFieldChange} required />
                {errors.email && <div className="error-message">Please enter a valid email address.</div>}

                <label htmlFor="mobile">Mobile Number:</label>
                <input type="text" id="mobile" name="mobile" value={formData.mobile || ''} onChange={handleFieldChange} required />
                {errors.mobile && <div className="error-message">Please enter a valid 10-digit mobile number.</div>}

                <label htmlFor="linkedin">LinkedIn:</label>
                <input type="text" id="linkedin" name="linkedin" value={formData.linkedin || ''} onChange={handleFieldChange} required />
                {errors.linkedin && <div className="error-message">Please provide your LinkedIn link.</div>}

                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={formData.city || ''} onChange={handleFieldChange} required />
                {errors.city && <div className="error-message">Please enter your city.</div>}

                <label htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" value={formData.country || ''} onChange={handleFieldChange} required />
                {errors.country && <div className="error-message">Please enter your country.</div>}
            </div>
        </>
    );
};

export default PersonalInfo;

import React, { useState } from 'react';
import '../form.css';
import { useAppContext } from './context/AppProvider';
const PersonalInfo = () => {
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        mobile: false,
        linkedin: false,
        city: false,
        country: false,
    });

    const {personalInfo, setPersonalInfo} = useAppContext();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonalInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

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
                <label className='text-white' htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={personalInfo.name || ''} onChange={handleFieldChange} required />
                {errors.name && <div className="text-red-500">Please enter your name.</div>}
                <label className='text-white' htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={personalInfo.email || ''} onChange={handleFieldChange} required />
                {errors.email && <div className="error-message">Please enter a valid email address.</div>}

                <label className='text-white' htmlFor="mobile">Mobile Number:</label>
                <input type="text" id="mobile" name="mobile" value={personalInfo.mobile || ''} onChange={handleFieldChange} required />
                {errors.mobile && <div className="error-message">Please enter a valid 10-digit mobile number.</div>}

                <label className='text-white' htmlFor="linkedin">LinkedIn:</label>
                <input type="text" id="linkedin" name="linkedin" value={personalInfo.linkedin || ''} onChange={handleFieldChange} required />
                {errors.linkedin && <div className="error-message">Please provide your LinkedIn link.</div>}

                <label className='text-white' htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={personalInfo.city || ''} onChange={handleFieldChange} required />
                {errors.city && <div className="error-message">Please enter your city.</div>}

                <label className='text-white' htmlFor="country">Country:</label>
                <input type="text" id="country" name="country" value={personalInfo.country || ''} onChange={handleFieldChange} required />
                {errors.country && <div className="error-message">Please enter your country.</div>}
            </div>
        </>
    );
};

export default PersonalInfo;

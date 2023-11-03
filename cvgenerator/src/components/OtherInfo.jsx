import React from 'react';
import '../form.css';
import { useAppContext } from './context/AppProvider';
const OtherInfo = () => {

    const { otherInfo, setOtherInfo } = useAppContext();

    const handleInfoChange = (event) => {
        const { name, value } = event.target;
        setOtherInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };
    return (
        <>
            <div className="other-information">
                <h2 className="group-heading">
                    <span className="label">E</span> Other Information
                </h2>
                <label htmlFor="skills">Skills:</label>
                <input
                    type="text"
                    id="skills"
                    name="skills"
                    value={otherInfo.skills} // Use formData.skills to access the skills value from the form data
                    onChange={handleInfoChange} // Use handleInputChange directly to update the form data
                />

                <label htmlFor="languages">Languages:</label>
                <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={otherInfo.languages} // Use formData.languages to access the languages value from the form data
                    onChange={handleInfoChange} // Use handleInputChange directly to update the form data
                />
            </div>
        </>
    );
};

export default OtherInfo;

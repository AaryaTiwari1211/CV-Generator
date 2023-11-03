import React, { useState } from 'react';
import '../form.css';
import { useAppContext } from './context/AppProvider';
const Education = () => {

    const { educations, setEducations } = useAppContext();

    const handleEducationChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducations = [...educations];
        updatedEducations[index][name] = value;
        setEducations(updatedEducations);
    };
    const handleAddEducation = () => {
        setEducations([...educations, {
            id: educations.length + 1,
            universityName: '',
            city: '',
            country: '',
            startDate: '',
            endDate: '',
            degreeName: '',
            gpa: '',
            relevantCourses: '',
        }]);
    }

    const handleRemoveEducation = (index) => {
        setEducations((prevEducations) =>
            prevEducations.filter((_, i) => i !== index)
        );
    };
    return (
        <>
            <div className="education">
                <h2 className="group-heading">
                    <span className="label">B</span> Education
                </h2>
                {educations.map((education, index) => (
                    <div key={education.id}>
                        {index > 0 && <div className="education-space" />}
                        <h3 className="education-heading">Education {index + 1}</h3>
                        <label>University Name:</label>
                        <input
                            type="text"
                            name="universityName"
                            value={education.universityName || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />
                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={education.city || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />
                        <label >Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={education.country || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />

                        <label>Start Date:</label>
                        <input
                            type="date"
                            name="startDate"
                            value={education.startDate || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />

                        <label>End Date:</label>
                        <input
                            type="date"
                            name="endDate"
                            value={education.endDate || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />

                        <label >Degree Name:</label>
                        <input
                            type="text"
                            name="degreeName"
                            value={education.degreeName || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />

                        <label >GPA:</label>
                        <input
                            type="text"
                            name="gpa"
                            value={education.gpa || ''}
                            onChange={(event) => handleEducationChange(index, event)}
                        />

                        <label >Relevant Courses:</label>
                        <input
                            type="text"
                            name="relevantCourses"
                            value={education.relevantCourses || ''}
                            onChange={(event) => handleEducationChange(index, event)}

                        />

                        <button className="px-4 py-2 m-5 text-white bg-red-500 rounded" onClick={() => handleRemoveEducation(index)}>Remove Education</button>
                    </div>
                ))}
                <div className="w-full text-center">
                    <button
                        type="button"
                        onClick={() => {
                            handleAddEducation();
                        }}
                        className="px-4 py-2 text-white bg-blue-500 rounded"
                    >
                        Add Education
                    </button>
                </div>
            </div>
        </>
    );
};

export default Education;

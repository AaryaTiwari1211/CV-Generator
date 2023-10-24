import React, { useState } from 'react';
import '../form.css';

const Education = ({ formData, handleEducationChange, handleAddEducation, handleRemoveEducation }) => {
    return (
        <>
            <div className="education">
                <h2 className="group-heading">
                    <span className="label">B</span> Education
                </h2>
                {formData.educations.map((education, index) => (
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

                        <button className='remove-buttons' onClick={() => handleRemoveEducation(index)}>Remove Education</button>
                    </div>
                ))}
                <div className="add-education">
                    <button
                        type="button"
                        onClick={() => {
                            handleAddEducation();
                        }}
                        className='add-buttons'
                    >
                        Add Education
                    </button>
                </div>
            </div>
        </>
    );
};

export default Education;

import React from 'react';
import '../form.css';
import { useAppContext } from './context/AppProvider';

const WorkExp = () => {
    const {
        workExperiences,
        setWorkExperiences,
        createExp,
        setCreateExp,
    } = useAppContext();

    const handleAddCreateExp = () => {
        setCreateExp([...createExp, {
            id: createExp.length + 1,
            userPrompt: '',
        }]);
    }

    const handleCreateExpChange = (index, event) => {
        const { name, value } = event.target;
        const updatedCreateExp = [...createExp];
        updatedCreateExp[index][name] = value;
        setCreateExp(updatedCreateExp);
    }


    const handleRemoveCreateExp = (index) => {
        setCreateExp((prevEducations) =>
            prevEducations.filter((_, i) => i !== index)
        );
    };

    const handleWorkExperienceChange = (index, event) => {
        const { name, value } = event.target;
        const updatedWorkExperiences = [...workExperiences];
        updatedWorkExperiences[index][name] = value;
        setWorkExperiences(updatedWorkExperiences);
    };

    const handleAddWorkExperience = () => {
        setWorkExperiences((prevWorkExperiences) => [
            ...prevWorkExperiences,
            {
                id: prevWorkExperiences.length + 1,
                companyName: '',
                city: '',
                country: '',
                startDate: '',
                endDate: '',
                titlePositionHeld: '',
                workDescription: '',
            },
        ]);
    };

    const handleRemoveWorkExperience = (index) => {
        setWorkExperiences((prevWorkExperiences) =>
            prevWorkExperiences.filter((_, i) => i !== index)
        );
    };

    return (
        <>
            <div className="work-experience">
                <h2 className="group-heading">
                    <span className="label">C</span> Work Experience
                </h2>
                {workExperiences.map((experience, index) => (
                    <div key={experience.id}>
                        {index > 0 && <div className="work-experience-space" />}
                        <h3 className="work-experience-heading">Work Experience {index + 1}</h3>
                        <label>Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={experience.companyName || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        />

                        <label>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={experience.city || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        />

                        <label>Country:</label>
                        <input
                            type="text"
                            name="country"
                            value={experience.country || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        />

                        <label>Start Date:</label>
                        <input
                            type="date"
                            name="startDate"
                            value={experience.startDate || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        />

                        <label>End Date:</label>
                        <input
                            type="date"
                            name="endDate"
                            value={experience.endDate || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        />

                        <label>Title/Position Held:</label>
                        <input
                            type="text"
                            name="titlePositionHeld"
                            value={experience.titlePositionHeld || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        />

                        <label>Work Description:</label>
                        <textarea
                            name="workDescription"
                            value={experience.workDescription || ''}
                            onChange={(event) => handleWorkExperienceChange(index, event)}
                        ></textarea>

                        <button className="px-4 py-2 m-5 text-white bg-red-500 rounded" type='button' onClick={() => handleRemoveWorkExperience(index)}>Remove Experience</button>
                    </div>
                ))}
                {
                    createExp.map((exp1, index) => (
                        <div key={exp1.id}>
                            <label>{`Your Prompt ${index + 1}:`}</label>
                            <textarea
                                name="userPrompt"
                                value={exp1.userPrompt || ''}
                                onChange={(event) => handleCreateExpChange(index, event)}
                            ></textarea>
                            <button className="px-4 py-2 m-5 text-white bg-red-500 rounded" onClick={() => handleRemoveCreateExp(index)}>Remove Created Experience</button>
                        </div>
                    ))
                }

                <div className="flex justify-center gap-10">
                    <button type='button' className="px-4 py-2 text-white bg-blue-500 rounded" onClick={handleAddWorkExperience}>
                        Add Work Experience
                    </button>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded" type='button' onClick={handleAddCreateExp}>
                        Create Work Experience
                    </button>
                </div>
            </div>
        </>
    );
};

export default WorkExp;

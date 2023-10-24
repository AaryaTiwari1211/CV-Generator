import React from 'react';
import '../form.css';

const Projects = ({ formData1, formData2, handleProjectChange, handleAddProject, handleRemoveProject, handleAddCreateProject, handleRemoveCreateProject, handleCreateProjectChange }) => {
    return (
        <>
            <div className="projects">
                <h2 className="group-heading">
                    <span className="label">D</span> Projects & Extra-curricular Experiences
                </h2>
                {formData1.projects.map((project, index) => (
                    <>
                        <div key={project.id}>
                            {index > 0 && <div className="project-space" />}
                            <h3 className="project-heading">Project /Extra-curricular activity {index + 1}</h3>
                            <label>Project Title / Extra-curricular Activity Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={project.title || ''}
                                onChange={(event) => handleProjectChange(index, event)}
                            />

                            <label>Date:</label>
                            <input
                                type="date"
                                name="date"
                                value={project.date || ''}
                                onChange={(event) => handleProjectChange(index, event)}
                            />

                            <label>City:</label>
                            <input
                                type="text"
                                name="city"
                                value={project.city || ''}
                                onChange={(event) => handleProjectChange(index, event)}
                            />

                            <label>Country:</label>
                            <input
                                type="text"
                                name="country"
                                value={project.country || ''}
                                onChange={(event) => handleProjectChange(index, event)}
                            />

                            <label>Position held:</label>
                            <input
                                type="text"
                                name="position"
                                value={project.position || ''}
                                onChange={(event) => handleProjectChange(index, event)}
                            />
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={project.description || ''}
                                onChange={(event) => handleProjectChange(index, event)}
                            ></textarea>
                        </div>
                        <button className='add-buttons' onClick={() => handleRemoveProject(index)}>Delete</button>
                    </>
                ))}
                {
                    formData2.createProject.map((project1, index) => (
                        <div key={project1.id}>
                            <label>{`Your Prompt ${index+1}:`}</label>
                            <textarea
                                name="userPrompt"
                                value={project1.userPrompt || ''}
                                onChange={(event) => handleCreateProjectChange(index, event)}
                            ></textarea>
                            <button className='remove-buttons' onClick={() => handleRemoveCreateProject(index)}>Delete Created Project</button>
                        </div>
                    ))
                }
                
                <div className="add-project">
                    <button type='button' className='add-buttons' onClick={handleAddProject}>
                        Add Project
                    </button>
                    <button type='button' className='add-buttons' onClick={handleAddCreateProject}>
                        Create Project
                    </button>
                </div>
            </div>
        </>
    );
};


export default Projects
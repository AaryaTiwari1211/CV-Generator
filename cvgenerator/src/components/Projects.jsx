import React from 'react';
import '../form.css';
import { useAppContext } from './context/AppProvider';
const Projects = () => {
    const { projects, setProjects, createProject, setCreateProject, formData1, formData2 } = useAppContext();

    const handleProjectChange = (index, event) => {
        const { name, value } = event.target;
        const updatedProjects = [...projects];
        updatedProjects[index][name] = value;
        setProjects(updatedProjects);
    };

    const handleAddProject = () => {
        setProjects((prevProjects) => [
            ...prevProjects,
            {
                id: prevProjects.length + 1,
                title: '',
                date: '',
                city: '',
                country: '',
                position: '',
                description: '',
            },
        ]);
    };

    const handleRemoveProject = (index) => {
        setProjects((prevProjects) =>
            prevProjects.filter((_, i) => i !== index)
        );
    };

    const handleCreateProjectChange = (index, event) => {
        const { name, value } = event.target;
        const updatedCreateProject = [...createProject];
        updatedCreateProject[index][name] = value;
        setCreateProject(updatedCreateProject);
    }

    const handleAddCreateProject = () => {
        setCreateProject((prevProjects) => [
            ...prevProjects,
            {
                id: prevProjects.length + 1,
                userPrompt: '',
            },
        ]);
    }

    const handleRemoveCreateProject = (index) => {
        setCreateProject((prevProjects) =>
            prevProjects.filter((_, i) => i !== index)
        );
    }
    return (
        <>
            <div className="projects">
                <h2 className="group-heading">
                    <span className="label">D</span> Projects & Extra-curricular Experiences
                </h2>
                {projects.map((project, index) => (
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
                        <button className="px-4 py-2 m-5 text-white bg-red-500 rounded" onClick={() => handleRemoveProject(index)}>Delete Project</button>
                    </>
                ))}
                {
                    createProject.map((project1, index) => (
                        <div key={project1.id}>
                            <label>{`Your Prompt ${index + 1}:`}</label>
                            <textarea
                                name="userPrompt"
                                value={project1.userPrompt || ''}
                                onChange={(event) => handleCreateProjectChange(index, event)}
                            ></textarea>
                            <button className="px-4 py-2 m-5 text-white bg-red-500 rounded" onClick={() => handleRemoveCreateProject(index)}>Delete Created Project</button>
                        </div>
                    ))
                }

                <div className="flex justify-center gap-10">
                    <button type='button' className="px-4 py-2 text-white bg-blue-500 rounded" onClick={handleAddProject}>
                        Add Project
                    </button>
                    <button type='button' className="px-4 py-2 text-white bg-blue-500 rounded" onClick={handleAddCreateProject}>
                        Create Project
                    </button>
                </div>
            </div>
        </>
    );
};


export default Projects
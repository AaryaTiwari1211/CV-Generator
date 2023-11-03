import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const AppProvider = ({ children }) => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        mobile: '',
        linkedin: '',
        city: '',
        country: '',
    });
    const [educations, setEducations] = useState([]);
    const [workExperiences, setWorkExperiences] = useState([]);
    const [projects, setProjects] = useState([]);
    const [createExp, setCreateExp] = useState([]);
    const [createProject, setCreateProject] = useState([]);
    const [otherInfo, setOtherInfo] = useState({
        skills: '',
        languages: '',
    });

    return (
        <AppContext.Provider
            value={{
                personalInfo,
                setPersonalInfo,
                educations,
                setEducations,
                workExperiences,
                setWorkExperiences,
                projects,
                setProjects,
                createExp,
                setCreateExp,
                createProject,
                setCreateProject,
                otherInfo,
                setOtherInfo,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
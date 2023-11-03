import React, { useEffect, useState } from 'react'
import '../form.css'
import logo from '../assets/logo.png'
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import WorkExp from './WorkExp';
import Projects from './Projects';
import OtherInfo from './OtherInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './context/AppProvider';

const MainForm = ({ setResult }) => {
    const navigate = useNavigate();
    const {
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
    } = useAppContext();

    const [isFormValid, setIsFormValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !personalInfo.name ||
            !personalInfo.email ||
            !personalInfo.mobile ||
            !personalInfo.linkedin ||
            !personalInfo.city ||
            !personalInfo.country
        ) {
            setIsFormValid(false);
            console.log("Form is invalid")
            return;
        }
        const data = {
            personalInfo,
            educations,
            projects,
            workExperiences,
            otherInfo,
            createExp,
            createProject
        };
        axios
            .post("http://localhost:4000/cv", data, {})
            .then((res) => {
                if (res.data.message) {
                    setResult(res.data.data);
                    navigate("/cv");
                    console.log(res.data);
                }
            })
            .catch((err) => console.error(err));
    };
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-white">
                    The purpose of this Information Form is to understand your profile better. Please fill in the details with accuracy and try to avoid unnecessary information, only focus on the valuable parts of your experiences and mention key learnings and achievements.
                </p>
            </div>
            {isFormValid && <p></p>}
            <form onSubmit={handleSubmit}>
                <PersonalInfo />
                <Education />
                <WorkExp />
                <Projects />
                <OtherInfo />
                <div className="w-full text-center">
                    <button type="submit" className="px-4 py-2 m-3 text-white bg-blue-500 rounded" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default MainForm
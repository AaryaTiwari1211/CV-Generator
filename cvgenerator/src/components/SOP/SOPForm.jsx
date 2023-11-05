import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SOPForm.css'
import axios from 'axios'
import { useAppContext } from '../context/AppProvider'

const SOPQuestion = ({ questions, handleInputChange, que, questionlabel }) => {
    return (
        <div className="flex flex-col items-center space-x-4">
            <label className='text-white'>{questionlabel}</label>
            <div className="flex space-x-4">
                <button
                    type='button'
                    onClick={() => handleInputChange(que, 'Yes')}
                    className={`px-4 py-2 rounded ${questions[que] === 'Yes' ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                    Yes
                </button>
                <button
                    type='button'
                    onClick={() => handleInputChange(que, 'No')}
                    className={`px-4 py-2 rounded ${questions[que] === 'No' ? 'bg-red-500' : 'bg-gray-300'}`}
                >
                    No
                </button>
            </div>
            <div className='h-10' />
        </div>
    )
}


const SOPForm = ({ setFinalSOPContent}) => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState({
        essays: 'No',
        personalityque: 'No',
        logincalque: 'No',
        mathsque: 'No',
        universityName: '',
        courseName: '',
        sop: '',
    });
    const {
        personalInfo,
        educations,
        projects,
        workExperiences,
        otherInfo,
    } = useAppContext();
    const handleInputChange = (question, value) => {
        setQuestions({
            ...questions,
            [question]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(questions);
        const formData = {
            personalInfo,
            educations,
            projects,
            workExperiences,
            otherInfo
        }

        // Send the data as an object with a 'questions' property
        axios.post('http://localhost:4000/sop', { questions: questions, formData: formData }, {})
            .then((res) => {
                if (res.data.message) {
                    setFinalSOPContent(res.data.sop);
                    console.log(res.data);
                }
                navigate('/sop');
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className='flex justify-center w-full'>
            <div className="p-6 space-y-6 bg-[#333] h-[100vh]  justify-center">
                <p className="p-6 text-4xl font-bold text-white bg-blue-500 rounded-2xl">Statement of Purpose Requirements</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <SOPQuestion handleInputChange={handleInputChange} questionlabel={'Do you need to write essays?'} que={'essays'} questions={questions} />
                    <SOPQuestion handleInputChange={handleInputChange} questionlabel={'Do you need to answer personality questions?'} que={'personalityque'} questions={questions} />
                    <SOPQuestion handleInputChange={handleInputChange} questionlabel={'Do you need to answer logical questions?'} que={'logincalque'} questions={questions} />
                    <SOPQuestion handleInputChange={handleInputChange} questionlabel={'Do you need to answer maths questions?'} que={'mathsque'} questions={questions} />'
                    <label className='text-white'>University Name</label>
                    <input type='text' className='' value={questions.universityName} onChange={(e) => handleInputChange('universityName', e.target.value)} />
                    <label className='text-white'>Program Name</label>
                    <input type='text' className='' value={questions.courseName} onChange={(e) => handleInputChange('courseName', e.target.value)} />
                </form>
                <div className='w-full text-center'>
                    <button type="submit" onClick={handleSubmit} className="px-4 py-2 text-white bg-blue-500 rounded">Next Step</button>
                </div>
            </div>
        </div>

    )
}

export default SOPForm
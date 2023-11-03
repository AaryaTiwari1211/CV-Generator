import React, { useEffect } from 'react'
import { useState } from 'react'
import { useAppContext } from '../context/AppProvider'; 
const SOP = ({ sopQuestions }) => {
    const [essay, setEssay] = useState('')
    const [personalityque, setPersonalityque] = useState('');
    const [logincalque, setLogincalque] = useState('');
    const [mathsque, setMathsque] = useState('');
    const {
        personalInfo,
        setPersonalInfo,
        educations,
        setEducations,
    } = useAppContext();
    useEffect(() => {
        console.log(personalInfo);
    },[personalInfo])
    return (
        <>
            {sopQuestions.essays === 'Yes' && (
                <>

                </>
            )}
        </>
    )
}

export default SOP
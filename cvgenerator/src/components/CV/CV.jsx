import React, { useEffect } from 'react'
import './CV.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../assets/logo.png'
import { Packer } from "docx";
import DocumentCreator from "../cv-generator";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';

const CV = ({ result }) => {
    const navigate = useNavigate();
    const { personalInfo } = useAppContext();
    const navigateHome = () => {
        navigate('/');
    };
    const navigateSOP = () => {
        navigate('/sopform');
    };

    useEffect(() => {
        console.log(personalInfo);
    })

    function generateDocx() {
        const documentCreator = new DocumentCreator();
        toast.success('Download Started', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        const doc = documentCreator.create([
            result.personalInfo,
            result.workExperiences,
            result.educations,
            result.projects,
            result.otherInfo
        ]);

        Packer.toBlob(doc).then(blob => {
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = "example.docx";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            console.log("Document created and downloaded successfully");
        });
    }

    return (
        <>
            <div className='result'>
                <div>
                    <p>
                        Your Resume has been generated. Click the button to download your Resume
                    </p>
                </div>
                <div className='download'>
                    <button className="px-4 py-2 m-5 text-white bg-blue-500 rounded" onClick={generateDocx}>Download Resume</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                    <button className='px-4 py-2 m-5 text-white bg-blue-500 rounded' onClick={navigateHome}>Create again</button>
                    <button className='px-4 py-2 m-5 text-white bg-blue-500 rounded' onClick={navigateSOP}>Generate SOP</button>
                </div>
            </div>
        </>
    );
};

export default CV
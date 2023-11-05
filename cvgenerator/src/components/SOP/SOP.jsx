import React, { useEffect } from 'react'
import { useState } from 'react'
// import generateSOPDocument from '../sop-generator';
import SOPDocumentCreator from '../sop-generator';
import { Packer } from "docx";


const SOP = ({ FinalSOPContent }) => {
    console.log(FinalSOPContent);

    const handleGenerateSOP = () => {
        const sopDocumentCreator = new SOPDocumentCreator();
        const sopDocument = sopDocumentCreator.createSOP(FinalSOPContent);
        Packer.toBlob(sopDocument).then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "SOP.docx";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    };

    return (
        <div>
            <h1>Statement of Purpose</h1>
            <button onClick={handleGenerateSOP}>Download SOP</button>
        </div>
    );
};

export default SOP;
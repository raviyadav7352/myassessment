import React, { useState, useEffect } from "react";
import './NewAssessment.css';
import DynamicSVG from "./DynamicSVG";
import CreateNewAssessment from "./CreateNewAssessment";
import MyAssessment from "./MyAssessment";

const NewAssessment = ({ assessmentTotal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [assessmentDataArray, setAssessmentDataArray] = useState([
        {
            assessmentName: 'Mathematics Assessment',
            selectedPurpose: 'job',
            selectedDescription: '',
            duration: '12:12',
            selectedSkills: ['html', 'css', 'javascript'],
            date: "20 Apr 2023",
             userCount:'45',
            users: [
                { user: 'RK' },
                { user: 'PK' },
            ]
        },
        {
            assessmentName: 'Computer Assessment',
            selectedPurpose: 'Skillup',
            selectedDescription: '',
            duration: '10:12',
            selectedSkills: ['python', 'java', 'c++'],
            date: "19 May 2023",
             userCount:'370',
            users: [
                { user: 'RK' },
                { user: 'PK' },
                { user: 'FK' },
            ]
        },
        {
            assessmentName: 'English Assessment',
            selectedPurpose: 'certification',
            selectedDescription: '',
            duration: '15:30',
            selectedSkills: ['english', 'communication'],
            date: "25 June 2023",
             userCount:'98',
            users: [
                { user: 'RK' },
                { user: 'FK' },
            ]
        },
        {
            assessmentName: 'Design Assessment',
            selectedPurpose: 'job',
            selectedDescription: '',
            duration: '08:45',
            selectedSkills: ['design', 'creative', 'user experience'],
            date: "10 July 2023",
             userCount:'',
            users: [
                { user: 'RK' },
            ]
        },
        {
            assessmentName: 'Science Assessment',
            selectedPurpose: 'Skillup',
            selectedDescription: '',
            duration: '09:00',
            selectedSkills: ['biology', 'chemistry', 'physics'],
            date: "05 Aug 2023",
            userCount:'56',
            users: [
                { user: 'CA' },
                { user: 'US' },
                { user: 'UK' },
            ]
        },
    ]);
    

    const handleToggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const handleAssessmentData = (data) => {
        setAssessmentDataArray(prevDataArray => [...prevDataArray, data]);
    };

    const handleDeleteAssessment = (index) => {
        const newDataArray = [...assessmentDataArray];
        newDataArray.splice(index, 1);
        setAssessmentDataArray(newDataArray);
    };

    useEffect(() => {
        assessmentTotal(assessmentDataArray.length);
    }, [assessmentTotal, assessmentDataArray.length]);

    return (
        <>
            <div className="new-assessment p30 border-dashed borderR12 flex-col alignC gap10 bg-main">
                <button type="button" className="plus-icon border0 flexM p10 bg-white borderR-full cur" onClick={handleToggleModal}>
                    <DynamicSVG svgName={'plus'} />
                </button>
                <h4 className="color-theme fs18 fw-500">New Assessment</h4>
                <p className="fs12 fw-500 color-theme textC">From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
            </div>
            <CreateNewAssessment isOpen={isModalOpen} onClose={handleToggleModal} onAssessmentData={handleAssessmentData} />
            {assessmentDataArray.map((assessmentData, index) => (
                <MyAssessment
                    key={index}
                    assessmentData={assessmentData}
                    onDelete={() => handleDeleteAssessment(index)}
                />
            ))}
        </>
    );
}

export default NewAssessment;

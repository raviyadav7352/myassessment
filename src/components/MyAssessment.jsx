import React, { useState } from "react";
import './MyAssessment.css'
import DynamicSVG from "./DynamicSVG";

const MyAssessment = ({ assessmentData, onEdit, onDelete }) => {
    // assessmentName,
    // selectedPurpose,
    // selectedDescription,
    // duration,
    // selectedSkills,
    // Date
    const [showMenu, setShowMenu] = useState(false);
    const handleMoreMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="my-assessment-wrapper p16 borderR12 border1">
            <div className="my-assessment-header pos-rel">
                <DynamicSVG svgName={'job'} />
                <div className="more-icon pos-abs cur flexM" onClick={handleMoreMenu}>
                    <DynamicSVG svgName='threeDot' />
                    <div className="more-menu-box">
                        <ul className={`list more-menu ${showMenu ? 'showMenu' : ''} `}>
                            <li className="more-menu-item fs12  fw-500" onClick={onEdit}>Edit</li>
                            <li className="more-menu-item fs12 color-failed fw-500" onClick={onDelete}>Delete</li>

                        </ul>
                    </div>
                </div>
                <div className="mT10 sm-mT0">
                    <h4 className="color-theme fs18 fw-500">{assessmentData.assessmentName}</h4>
                    <div className="flexC gap10 sm-gap5">
                        <p className="color-theme fs14 fW-bold">{assessmentData.selectedPurpose}</p>
                        <DynamicSVG svgName='vertLine' />
                        <div className="flexC gap5">
                            <div className="sm-dN"><DynamicSVG svgName='calender' /></div>
                            <div className="dN sm-block"><DynamicSVG svgName='clock' /></div>
                            <span className="color-info fs12 fw-500">{assessmentData.date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashed-hor-line mY16"></div>
            <div className="my-assessment-footer flex justifySB">
                <div className="flex gap14">
                    <div className="color-theme fs14">
                        <p className="">{assessmentData.duration}</p>
                        <p className="fs12">Duration</p>
                    </div>
                    <div className="color-theme fs14">
                        <p>00</p>
                        <p className="fs12">Questions</p>
                    </div>
                </div>
                <div className="flexC gap10">

                    <div className="share-box color-theme fs14 fw-500 cur">
                        <DynamicSVG svgName='share' />
                        Share
                    </div>
                    <div className="avatar-body">
                        {assessmentData.users.map((user, i) => (
                            <div
                                className="avatar "
                                key={i}
                                style={{
                                    zIndex: assessmentData.users.length + i,
                                    marginLeft: i === 0 ? 0 : "-15px",
                                }}
                            >{user.user}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAssessment;

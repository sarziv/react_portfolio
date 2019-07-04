import React from 'react';
import './Resume.css';
import {Link} from "react-router-dom";

function Resume() {
    return (
        <div className="resume">
            <div className="resumeHeader mb-3 justify-content-center">Resume
            </div>
            <div className="d-flex justify-content-center mb-4">

                <Link to="./resumeFiles/Šarūnas_Živila_ENG.pdf" target="_blank" download>
                    <button className="btn p-3 btnResume">
                        English Version
                    </button>
                </Link>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="./resumeFiles/Šarūnas_Živila_LT.pdf" target="_blank" download>
                    <button className="btn p-3 btnResume">
                        Lithuanian Version
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Resume;
import React from 'react';
import './Project.css';
import ProjectTree from './projectTree/ProjectTree'
import ProjectGallery from './projectGallery/ProjectGallery';
function Project() {



    return (
        <div className="project">
            <div className="projectHeader">Projects Tree</div>
            <div className="text-center orange">Links to projects</div>
            <div className="d-flex justify-content-center"><ProjectTree/></div>
            <div className="projectHeader mt-4">Projects Gallery</div>
            <div className="mb-4">

                <ProjectGallery/>

        </div>
        </div>
    );
}
export default Project;
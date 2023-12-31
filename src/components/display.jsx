import React from 'react';
import cvState from './cvState';

function Display() {
    const {
        basicInfo,
        handleBasicInfoChange,
        educations,
        handleEducationChange,
        addEducation,
        removeEducation,
        workExperiences,
        handleWorkExperienceChange,
        addWorkExperience,
        removeWorkExperience,
        skills,
        handleSkillChange,
        addSkill,
        removeSkill,
        projects,
        handleProjectChange,
        addProject,
        removeProject
    } = cvState();

    const {firstName, lastName, email, phone, address, city, state, zip} = basicInfo;

    return (
        <div className='display'>
            <div className="firstname">{firstName}</div>
            <div className="lastname">{lastName}</div>
        </div>
    );
}

export default Display;

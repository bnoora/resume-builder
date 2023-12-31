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

    return (
        <div>
            {/* Display the basicInfo and other data */}
        </div>
    );
}

export default Display;

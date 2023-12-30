import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import basicInfo from "./form/basicInfo";
import eduInfo from "./form/eduInfo";
import workExperience from "./form/workExperience";
import skill from "./form/skill";
import customField from "./form/customField";

function Editor() {
    const [basicInfo, setBasicInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        phone: '',
        github: ''
    });

    const [educations, setEducations] = useState([
        { 
            id: uuidv4(),
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            schoolCity: '',
            schoolState: '',
            isOngoing: false
        }
    ]);

    const [workExperiences, setWorkExperiences] = useState([
        {
            id: uuidv4(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            isCurrent: false,
            city: '',
            state: '',
            description: ''
        }
    ]);

    const [skills, setSkills] = useState([
        {
            id: uuidv4(),
            skill: ''
        }
    ]);

    const [customField, setCustomField] = useState([
        {
            id: uuidv4(),
            title: '',
            description: ''
        }
    ]);

    const handleBasicInfoChange = (e) => {
        const {name, value} = e.target;
        setBasicInfo({
            ...basicInfo,
            [name]: value
        });
    };

    const handleEducationChange = (id, newEducation) => {
        const updatedEducations = educations.map(education => {
            if (education.id === id) {
                return {...newEducation, id: education.id};
            }
            return education;
        });
        setEducations(updatedEducations);
    };

    const addEducation = () => {
        setEducations([...educations, {id: uuidv4(), school: '', degree: '', startDate: '', 
        endDate: '', schoolCity: '', schoolState: '', isOngoing: false}]);
    }

    const removeEducation = (id) => {
        setEducations(educations.filter(education => education.id !== id));
    }

    const handleWorkExperienceChange = (id, newWorkExperience) => {
        const updatedWorkExperiences = workExperiences.map(workExperience => {
            if (workExperience.id === id) {
                return {...newWorkExperience, id: workExperience.id};
            }
            return workExperience;
        });
        setWorkExperiences(updatedWorkExperiences);
    };

    const addWorkExperience = () => {
        setWorkExperiences([...workExperiences, {id: uuidv4(), company: '', position: '', startDate: '', 
        endDate: '', isCurrent: false, city: '', state: '', description: ''}]);
    }

    const removeWorkExperience = (id) => {
        setWorkExperiences(workExperiences.filter(workExperience => workExperience.id !== id));
    }

    const handleSkillChange = (id, newSkill) => {
        const updatedSkills = skills.map(skill => {
            if (skill.id === id) {
                return {...newSkill, id: skill.id};
            }
            return skill;
        });
        setSkills(updatedSkills);
    };

    const addSkill = () => {
        setSkills([...skills, {id: uuidv4(), skill: ''}]);
    }

    const removeSkill = (id) => {
        setSkills(skills.filter(skill => skill.id !== id));
    }

    const handleCustomFieldChange = (id, newCustomField) => {
        const updatedCustomField = customField.map(customField => {
            if (customField.id === id) {
                return {...newCustomField, id: customField.id};
            }
            return customField;
        });
        setCustomField(updatedCustomField);
    };

    const addCustomField = () => {
        setCustomField([...customField, {id: uuidv4(), title: '', description: ''}]);
    }

    const removeCustomField = (id) => {
        setCustomField(customField.filter(customField => customField.id !== id));
    }

    return (
        <div className='editor'>
            <div className='editorSection'>
                <h1>Basic Info</h1>
                <div className='editorSectionContent'>
                    <basicInfo data={basicInfo} onChange={handleBasicInfoChange}/>
                </div>
            </div>
            <div className='editorSection'>
                <h1>Education</h1>
                <div className='editorSectionContent'>
                    {educations.map(education => (
                        <eduInfo key={education.id} data={education} onChange={handleEducationChange} 
                        onRemove={removeEducation}/>
                    ))}
                    <button onClick={addEducation}>Add Education</button>
                </div>
            </div>
            <div className='editorSection'>
                <h1>Work Experience</h1>
                <div className='editorSectionContent'>
                    {workExperiences.map(workExperience => (
                        <workExperience key={workExperience.id} data={workExperience} onChange={handleWorkExperienceChange} 
                        onRemove={removeWorkExperience}/>
                    ))}
                    <button onClick={addWorkExperience}>Add Work Experience</button>
                </div>
            </div>
            <div className='editorSection'>
                <h1>Skills</h1>
                <div className='editorSectionContent'>
                    {skills.map(skill => (
                        <skill key={skill.id} data={skill} onChange={handleSkillChange} 
                        onRemove={removeSkill}/>
                    ))}
                    <button onClick={addSkill}>Add Skill</button>
                </div>
            </div>
            <div className='editorSection'>
                <h1>Custom Fields</h1>
                <div className='editorSectionContent'>
                    {customField.map(customField => (
                        <customField key={customField.id} data={customField} onChange={handleCustomFieldChange} 
                        onRemove={removeCustomField}/>
                    ))}
                    <button onClick={addCustomField}>Add Custom Field</button>
                </div>
            </div>
        </div>
    )

}

export default Editor;
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useSharedState() {
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

    const [projects, setProjects] = useState([
        {
            id: uuidv4(),
            title: '',
            description: '',
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

    const handleProjectChange = (id, newProject) => {
        const updatedProjects = projects.map(project => {
            if (project.id === id) {
                return {...newProject, id: project.id};
            }
            return project;
        });
        setProjects(updatedProjects);
    }

    const addProject = () => {
        setProjects([...projects, {id: uuidv4(), title: '', description: ''}]);
    }

    const removeProject = (id) => {
        setProjects(projects.filter(project => project.id !== id));
    }

    return {
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
    };
}
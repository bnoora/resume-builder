import BasicInfo from "./form/basicInfo";
import EduInfo from "./form/eduInfo";
import WorkExperience from "./form/workExperience";
import Skill from "./form/skill";
import Project from "./form/projects";
import cvState from "./cvState";

function Editor() {
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
        <div className='editor'>
            <div className='editorSection'>
                <div className='editorSectionContent'>
                    <BasicInfo data={basicInfo} onChange={handleBasicInfoChange}/>
                </div>
            </div>
            <div className='editorSection'>
                <div className='editorSectionContent'>
                    {educations.map(education => (
                        <EduInfo key={education.id} data={education} onChange={handleEducationChange} 
                        onRemove={removeEducation}/>
                    ))}
                    <button onClick={addEducation}>Add Education</button>
                </div>
            </div>
            <div className='editorSection'>
                <div className='editorSectionContent'>
                    {workExperiences.map(workExperience => (
                        <WorkExperience key={workExperience.id} data={workExperience} onChange={handleWorkExperienceChange} 
                        onRemove={removeWorkExperience}/>
                    ))}
                    <button onClick={addWorkExperience}>Add Work Experience</button>
                </div>
            </div>
            <div className='editorSection'>
                <div className='editorSectionContent'>
                    {skills.map(skill => (
                        <Skill key={skill.id} data={skill} onChange={handleSkillChange} 
                        onRemove={removeSkill}/>
                    ))}
                    <button onClick={addSkill}>Add Skill</button>
                </div>
            </div>
            <div className='editorSection'>
                <div className='editorSectionContent'>
                    {projects.map(project => (
                        <Project key={project.id} data={project} onChange={handleProjectChange} 
                        onRemove={removeProject}/>
                    ))}
                    <button onClick={addProject}>Add Project</button>
                </div>
            </div>
        </div>
    )

}

export default Editor;
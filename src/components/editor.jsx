import basicInfo from "./form/basicInfo";
import eduInfo from "./form/eduInfo";
import workExperience from "./form/workExperience";
import skill from "./form/skill";
import Project from "./form/project";
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
                <h1>Projects</h1>
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
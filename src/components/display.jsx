import React from 'react';
import '../styles/display.css';

function Display(props) {
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
    } = props;

    const {firstName, lastName, email, linkedin, phone, github} = basicInfo;
    console.log(educations);

    return (
        <section className='display'>
            <div className="resumeCV">
                <section id='cvHead'>
                    <h1>{firstName} {lastName}</h1>
                    <ul>
                        {linkedin && <li>{linkedin}</li>}
                        {phone && <li>{phone}</li>}
                        {email && <li>{email}</li>}
                        {github && <li>{github}</li>}
                    </ul>
                </section>
                {educations.length > 0 && (
                    <section id='eduDisplaySection'>
                        <h2>Education</h2>
                        {educations.map(education => (
                            <div key={education.id} className='eduDisplay'>
                                <div className='schoolDegree'>
                                    <h4>{education.school}</h4>
                                    <p>{education.degree}</p>
                                </div>
                                <div className='dateLoc'>
                                    <p>{education.startDate} - {education.endDate}</p>
                                    <p>{education.schoolCity}, {education.schoolState}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
                {workExperiences.length > 0 && (
                    <section id='workDisplaySection'>
                        <h2>Work Experience</h2>
                        {workExperiences.map(workExperience => (
                            <div key={workExperience.id} className='workDisplay'>
                                <div className='companyPosition'>
                                    <div>
                                        <h4>{workExperience.company}</h4>
                                        <p>{workExperience.position}</p>
                                    </div>
                                    <div>
                                        <p>{workExperience.startDate} - {workExperience.endDate}</p>
                                        <p>{workExperience.city}, {workExperience.state}</p>
                                    </div>
                                </div>
                                <div id='workDesc'>
                                    <p>{workExperience.description}</p>
                                </div>

                            </div>
                        ))}
                    </section>
                )}
                {skills.length > 0 && (
                    <section id='skillDisplaySection'>
                        <h2>Skills</h2>
                        <ul>
                            {skills.map(skill => (
                                <li key={skill.id}>{skill.skill},</li>
                            ))}
                        </ul>
                    </section>
                )}
                {projects.length > 0 && (
                    <section id='projectDisplaySection'>
                        <h2>Projects</h2>
                        {projects.map(project => (
                            <div key={project.id} className='projectDisplay'>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </section>
    );
}

export default Display;

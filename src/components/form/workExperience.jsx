function WorkExperience(props) {
    const {data, onChange, onAdd, onRemove} = props;

    const workExperiences = Array.isArray(data) ? data : [];
    return (
        <section className="formSection">
            <form className="form">
                <h1>Work Expeirence</h1>
                {workExperiences.map((workExperience, index) => (
                    <section className="formDoubleSection" id="workExperienceSection" key={workExperience.id}>
                        <div className="formSection">
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" value={workExperience.company} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="position">Position</label>
                            <input type="text" name="position" id="position" value={workExperience.position} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="workStart">Start Date</label>
                            <input type="date" name="workStart" id="workStart" value={workExperience.workStart} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="workEnd">End Date</label>
                            <input type="date" name="workEnd" id="workEnd" value={workExperience.workEnd} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="workCity">City</label>
                            <input type="text" name="workCity" id="workCity" value={workExperience.workCity} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="workState">State</label>
                            <input type="text" name="workState" id="workState" value={workExperience.workState} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="isOngoing">Ongoing</label>
                            <input type="checkbox" name="isOngoing" id="isOngoing" checked={workExperience.isOngoing} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <button type="button" onClick={() => onRemove(workExperience.id)}>Remove</button>
                        </div>
                    </section>
                ))}
            </form>
        </section>
    )
}

export default WorkExperience;
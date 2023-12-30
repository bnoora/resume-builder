import React from 'react';

function EduInfo(props) {
    const {data, onChange, onAdd, onRemove} = props;

    return (
        <section className="formSection">
            <form className="form">
                <h1>Education</h1>
                {data.map((education, index) => (
                    <section className="formDoubleSection" id="educationSection" key={education.id}>
                        <div className="formSection">
                            <label htmlFor="school">School</label>
                            <input type="text" name="school" id="school" value={education.school} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" name="degree" id="degree" value={education.degree} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="schoolStart">Start Date</label>
                            <input type="date" name="schoolStart" id="schoolStart" value={education.schoolStart} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="schoolEnd">End Date</label>
                            <input type="date" name="schoolEnd" id="schoolEnd" value={education.schoolEnd} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="schoolCity">City</label>
                            <input type="text" name="schoolCity" id="schoolCity" value={education.schoolCity} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="schoolState">State</label>
                            <input type="text" name="schoolState" id="schoolState" value={education.schoolState} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="isOngoing">Ongoing</label>
                            <input type="checkbox" name="isOngoing" id="isOngoing" checked={education.isOngoing} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <button type="button" onClick={() => onRemove(education.id)}>Remove</button>
                        </div>
                    </section>
                ))}
                <button type="button" onClick={onAdd}>Add Education</button>
            </form>
        </section>
    )
}

export default EduInfo;

import React from 'react';

function EduInfo(props) {
    const {data, onChange, onRemove} = props;

    return (
        <section className="formSection">
            <form className="form">
                <div className="formDoubleSection">
                    <div className="formSection">
                        <label htmlFor="school">School</label>
                        <input type="text" name="school" id="school" value={data.school} onChange={e => onChange(data.id, {...data, school: e.target.value})}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree" id="degree" value={data.degree} onChange={e => onChange(data.id, {...data, degree: e.target.value})}/>
                    </div>
                </div>
                <div className="formDoubleSection">
                    <div className="formSection">
                        <label htmlFor="schoolStart">Start Date</label>
                        <input type="date" name="schoolStart" id="schoolStart" value={data.schoolStart} onChange={e => onChange(data.id, {...data, schoolStart: e.target.value})}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="schoolEnd">End Date</label>
                        <input type="date" name="schoolEnd" id="schoolEnd" value={data.schoolEnd} onChange={e => onChange(data.id, {...data, schoolEnd: e.target.value})}/>
                    </div>
                </div>
                <div className="formDoubleSection">
                    <div className="formSection">
                        <label htmlFor="schoolCity">City</label>
                        <input type="text" name="schoolCity" id="schoolCity" value={data.schoolCity} onChange={e => onChange(data.id, {...data, schoolCity: e.target.value})}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="schoolState">State</label>
                        <input type="text" name="schoolState" id="schoolState" value={data.schoolState} onChange={e => onChange(data.id, {...data, schoolState: e.target.value})}/>
                    </div>
                </div>
                    <div className="formSection">
                        <label htmlFor="isOngoing">Ongoing</label>
                        <input type="checkbox" name="isOngoing" id="isOngoing" checked={data.isOngoing} onChange={e => onChange(data.id, {...data, isOngoing: e.target.value})}/>
                    </div>
                    <div className="formSection">
                        <button type="button" onClick={() => onRemove(data.id)}>Remove</button>
                    </div>
            </form>
            <hr className='midLine'/>
        </section>
    )
}

export default EduInfo;

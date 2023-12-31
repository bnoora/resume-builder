

function WorkExperience(props) {
    const {data, onChange, onAdd, onRemove} = props;

    return (
        <section className="formSection">
            <form className="form">
                    <div className="formDoubleSection">
                        <div className="formSection">
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" value={data.company}  onChange={e => onChange(data.id, {...data, company: e.target.value})}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="position">Position</label>
                            <input type="text" name="position" id="position" value={data.position} onChange={e => onChange(data.id, {...data, position: e.target.value})}/>
                        </div>
                    </div>
                    <div className="formDoubleSection">
                        <div className="formSection">
                            <label htmlFor="workStart">Start Date</label>
                            <input type="date" name="workStart" id="workStart" value={data.workStart} onChange={e => onChange(data.id, {...data, workStart: e.target.value})}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="workEnd">End Date</label>
                            <input type="date" name="workEnd" id="workEnd" value={data.workEnd} onChange={e => onChange(data.id, {...data, workEnd: e.target.value})}/>
                        </div>
                    </div>
                    <div className="formDoubleSection">
                        <div className="formSection">
                            <label htmlFor="workCity">City</label>
                            <input type="text" name="workCity" id="workCity" value={data.workCity} onChange={e => onChange(data.id, {...data, workCity: e.target.value})}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="workState">State</label>
                            <input type="text" name="workState" id="workState" value={data.workState} onChange={e => onChange(data.id, {...data, workState: e.target.value})}/>
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

export default WorkExperience;
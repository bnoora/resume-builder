function Project(props) {
    const {data, onChange, onRemove} = props;

    return (
        <section className="formSection">
            <form className="form">
                    <section className="formDoubleSection" id="projectSection" key={data.id}>
                        <div className="formSection">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" value={data.title} onChange={e => onChange(data.id, {...data, title: e.target.value})}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" value={data.description} onChange={e => onChange(data.id, {...data, description: e.target.value})}/>
                        </div>
                        <div className="formSection">
                            <button type="button" onClick={() => onRemove(data.id)}>Remove</button>
                        </div>
                    </section>
            </form>
        </section>
    )
}

export default Project;
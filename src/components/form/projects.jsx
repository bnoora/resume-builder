function Project(props) {
    const {data, onChange, onAdd, onRemove} = props;

    const projects = Array.isArray(data) ? data : [];

    return (
        <section className="formSection">
            <form className="form">
                <h1>Projects</h1>
                {projects.map((project, index) => (
                    <section className="formDoubleSection" id="projectSection" key={project.id}>
                        <div className="formSection">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" value={project.title} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" value={project.description} onChange={(e) => onChange(index, e)}/>
                        </div>
                        <div className="formSection">
                            <button type="button" onClick={() => onRemove(project.id)}>Remove</button>
                        </div>
                    </section>
                ))}
                <button type="button" onClick={onAdd}>Add Project</button>
            </form>
        </section>
    )
}

export default Project;
function basicInfo() {
    const {data, onChange} = props;

    return (
        <section className="formSection">
            <form className="form">
                <h1>Basic Info</h1>
                <section className="formDoubleSection" id="nameSection">
                    <div className="formSection">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={onChange}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={onChange}/>
                    </div>
                </section>
                <section className="formDoubleSection">
                    <div className="formSection">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={data.email} onChange={onChange}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="linkedin">linkedIn</label>
                        <input type="text" name="linkedin" id="linkedin" value={data.linkedin} onChange={onChange}/>
                    </div>
                </section>
                <section className="formDoubleSection">
                    <div className="formSection">
                        <label htmlFor="phone">Phone (optional)</label>
                        <input type="tel" name="phone" id="phone" value={data.phone} onChange={onChange}/>
                    </div>
                    <div className="formSection">
                        <label htmlFor="github">Github (optional)</label>
                        <input type="text" name="github" id="github" value={data.github} onChange={onChange}/>
                    </div>
                </section>
            </form>
        </section>
    )
}

export default basicInfo;

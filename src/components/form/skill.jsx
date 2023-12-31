function Skill(props) {
  const { skill, handleChange } = props;
  return (
    <div className="formSection">
        <h1>Skill</h1>
        <label htmlFor="skill">Skill</label>
        <input type="text" name="skill" id="skill" value={skill} onChange={handleChange} />
    </div>
  );
}

export default Skill;
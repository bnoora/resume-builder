function Skill(props) {
  const { data, onChange } = props;
  return (
    <section className="formSection">
        <form className="form">
          <label htmlFor="skill">Skill</label>
          <input type="text" name="skill" id="skill" value={data.skill} onChange={e => onChange(data.id, {...data, skill: e.target.value})} />
        </form>
    </section>
  );
}

export default Skill;
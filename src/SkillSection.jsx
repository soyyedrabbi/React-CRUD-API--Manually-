const SkillSection = (props) => {
    return(
        <div className="skills">
            <h2>{props.name} Skills: </h2>
            <ul>
                {props.skills.map((item) => (
                <li key={item}>{item}</li>
                ))}
            </ul>
            <h2>{props.demo?.a}</h2>
        </div>
    );
};

export default SkillSection
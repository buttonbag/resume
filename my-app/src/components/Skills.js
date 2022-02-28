import skillsData from "../data/skillsData"
export default function Skills(props) {
    const skills = skillsData.map((skill, i) => (
        <li key={i}>{skill}</li>
    ))
    return (
        <div className="skills">
            <div className="section-title">superpowers</div>
            <div className="section-details">
                <ul className="skills-list">
                    {skills}
                </ul>
            </div>
        </div>
    )
}
import skillsData from "../data/skillsData"
export default function Skills(props) {
    const skills = skillsData.map((skill) => (
        <li>{skill}</li>
    ))
    return (
        <div class="skills">
            <div class="section-title">superpowers</div>
            <div class="section-details">
                <ul class="skills-list">
                    {skills}
                </ul>
            </div>
        </div>
    )
}
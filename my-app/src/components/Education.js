import educationData from "../data/educationData"


export default function Education() {
    const education = educationData.map((edu, i) => {
        return (
            <div className="edu-card" key={i}>
                <div className="edu-header">
                    <div className="edu--name">{edu.name}</div>
                    <div className="edu--type">{edu.type}</div>
                    <div className="edu--year">{edu.year}</div>
                </div>
                <div className="edu--description">
                    {edu.description}
                </div>
            </div>
        )
    })
    return (
        <div className="edu">
            <div className="section-title">education</div>
            <div className="section-details">
                {education}
            </div>
        </div>
    )
}
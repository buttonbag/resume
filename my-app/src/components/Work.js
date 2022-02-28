import workData from '../data/workData';

export default function Works() {
	const workArray = workData.map((work) => {
		return (
			<div className="work-card">
				<div className="work-header">
					<div className="position">{work.position}</div>
					<div className="name">{work.name}</div>
					<div className="year">{work.year}</div>
				</div>
				<div className="work-description">{work.description}</div>
			</div>
		);
	});
	return (
		<div className="work">
			<div className="section-title">work experience</div>
			<div className="section-details">{workArray}</div>
		</div>
	);
}

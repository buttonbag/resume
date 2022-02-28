import workData from '../data/workData';

export default function Works() {
	const workArray = workData.map((work, i) => {
		return (
			<div className="work-card" key={i}>
				<div className="work-header">
					<div className="work--position">{work.position}</div>
					<div className="work--name">{work.name}</div>
					<div className="work--year">{work.year}</div>
				</div>
				<div className="work--description">{work.description}</div>
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

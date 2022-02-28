import Education from "./Education";
import Skills from "./Skills";
import Works from "./Work";

export default function Content() {
    return (
        <div className="content">
            {/* <!-- profile --> */}
            <div className="profile">
                <div className="section-title">profile</div>
                <div className="section-details">Detail oriented Front End Developer and designer with a passion for learning new web technologies guided by my natural curiosity of all things web. Possesses a track record of creating fully functioning websites and ads from design phase all the way to production stage. Passionate about learning and implementing new technologies and a regular participant of local web developer meetups.</div>
            </div>
            {/* <!-- skills --> */}
            <Skills />
            {/* <!-- work experience --> */}
            <Works />
            {/* <!-- education --> */}
            <Education />
        </div>
    )
}
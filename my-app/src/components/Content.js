import Skills from "./Skills";
import Works from "./Work";

export default function Content() {
    return (
        <div class="content">
            {/* <!-- profile --> */}
            <div class="profile">
                <div class="section-title">profile</div>
                <div class="section-details">Detail oriented Front End Developer and designer with a passion for learning new web technologies guided by my natural curiosity of all things web. Possesses a track record of creating fully functioning websites and ads from design phase all the way to production stage. Passionate about learning and implementing new technologies and a regular participant of local web developer meetups.</div>
            </div>
            {/* <!-- skills --> */}
            <Skills />
            {/* <!-- work experience --> */}
            <Works />
            {/* <!-- education --> */}
            <div class="edu">
                <div class="section-title">education</div>
                <div class="section-details">
                    {/* <!-- edu1 --> */}
                    <div class="edu-card">
                        <div class="edu-header">
                            <div class="position">Westwood College, Chicago IL</div>
                            <div class="name">BA in Visual Communications</div>
                            <div class="year">2010</div>
                        </div>{/*  <!-- /edu-header --> */}
                        <div class="edu-description">
                            Relevant Courses:
                            Web/Media Production, Package Design, Cross Media Production, Advanced Image Editing, Color Theory and Advertising.
                        </div>
                    </div>
                    {/* <!-- edu2 --> */}
                    <div class="edu-card">
                        <div class="edu-header">
                            <div class="position">Meetups</div>
                            <div class="year">2017 - Present</div>
                        </div>{/*  <!-- /edu-header --> */}
                        <div class="edu-description">
                            I attend tons of free developer meetups during the summer to keep myself immersed into the internet of things and pizza. The good ones always have 'zas.
                        </div>
                    </div>
                    {/* <!-- edu2 --> */}
                    <div class="edu-card">
                        <div class="edu-header">
                            <div class="position">Codepen</div>
                            <div class="year">2017 - Present</div>
                        </div>{/*  <!-- /edu-header --> */}
                        <div class="edu-description">
                            I use Codepen as an online scratchpad to jot down new ideas that I've picked up along the way as well as experiments before implementing them in a live project.
                        </div>
                    </div>
                    {/* <!-- edu2 --> */}
                    <div class="edu-card">
                        <div class="edu-header">
                            <div class="position">Google</div>
                            <div class="year">2010 - present</div>
                        </div>{/*  <!-- /edu-header --> */}
                        <div class="edu-description">
                            I try to figure out what I don't already know and if I can't, I turn to the world's most famous teacher, Google!
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        {/* <!--   header --> */}
        <div class="header">
          {/* <!-- header name --> */}
          <h1 class="name">Louie Camacho</h1>
          {/* <!-- /header name --> */}
          {/* <!-- contact info --> */}
          <div class="contact">
            <a href="http://www.iambuttonbag.com">IamButtonbag.com</a>
            <span class="social">
              <a href="https://github.com/buttonbag"><i class="fab fa-github"></i></a>
              <a href="https://codepen.io/buttonbag"><i class="fab fa-codepen"></i></a>
              <a href="https://www.linkedin.com/in/louiecamacho/"><i class="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/iambuttonbag"><i class="fab fa-twitter"></i></a>
            </span>
            <a href="mailto:louiecamacho@gmail.com">louieCamacho@gmail.com</a>
            <span>773.952.0534</span>
          </div>{/* <!-- /contact info --> */}
        </div>
        {/* <!--   /header --> */}

        {/* <!--   content --> */}
        <div class="content">
          {/* <!-- profile --> */}
          <div class="profile">
            <div class="section-title">profile</div>
            <div class="section-details">Detail oriented Front End Developer and designer with a passion for learning new web technologies guided by my natural curiosity of all things web. Possesses a track record of creating fully functioning websites and ads from design phase all the way to production stage. Passionate about learning and implementing new technologies and a regular participant of local web developer meetups.</div>
          </div>
          {/* <!-- skills --> */}
          <div class="skills">
            <div class="section-title">superpowers</div>
            <div class="section-details">
              <ul class="skills-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>GSAP</li>
                <li>Sublime Text</li>
                <li>Git</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Animate</li>
                <li>After Effects</li>
                <li>InDesign</li>
              </ul>
            </div>
          </div>
          {/* <!-- work experience --> */}
          <div class="work">
            <div class="section-title">work experience</div>
            <div class="section-details">
              {/* <!-- work1 --> */}
              <div class="work-card">
                <div class="work-header">
                  <div class="position">Front End Developer</div>
                  <div class="name">Ogilvy & Mather</div>
                  <div class="year">2015 - Present</div>
                </div>{/*  <!-- /work-header --> */}
                <div class="work-description">
                  Developed, managed content and maintained HTML5 ads using GSAP Javascript library. Built responsive e-mail templates, created animated videos for Social Ads. Assisted in design and layout development. Trained the dev team in all aspects of development, including Git.
                </div>
              </div>
              {/* <!-- work2 --> */}
              <div class="work-card">
                <div class="work-header">
                  <div class="position">Front End Developer</div>
                  <div class="name">Staples/quill</div>
                  <div class="year">2014 - 2015</div>
                </div>{/*  <!-- /work-header --> */}
                <div class="work-description">
                  Designed, developed and maintained Wordpress pages. Created static banners for use on quill.com. Built a responsive email template used for all future email campaigns.
                </div>
              </div>
              {/* <!-- work3 --> */}
              <div class="work-card">
                <div class="work-header">
                  <div class="position">Web Designer & Developer</div>
                  <div class="name">Media Made Great</div>
                  <div class="year">2010 - 2014</div>
                </div>{/*  <!-- /work-header --> */}
                <div class="work-description">
                  Created & maintained the company’s website. Client work included websites, landing pages, and email marketing campaigns. Primarily hand coded HTML5, CSS3 and Javascript. Other responsibilities include production work and layout design.
                </div>
              </div>

            </div>
          </div>
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
        {/* <!--   /content --> */}
      </div>
    </div>
  );
}

export default App;

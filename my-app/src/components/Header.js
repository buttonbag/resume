import React from 'react';

export default function Header() {
    return (
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
    )
}
import React from 'react';
import slide1 from "../img/slide/slide1.jpg";


const Hero = () => {
    return (
        <section id="hero">
            <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active" style={{ backgroundImage: `url(${slide1})` }}>
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animated fadeInDown">Welcome to <span>Hidayah</span></h2>
                                <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
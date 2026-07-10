import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">

            <div className="overlay"></div>

            <div className="hero-content">
                <h1>상상을 현실로 만드는
                    <br />
                    내 손 안에 <span>스쿠스쿠</span>
                </h1>

                <h3>성결대학교 멋쟁이사자처럼</h3>

                <p>자신이원하는 IT 서비스를 구현하고 싶은
                    성결대학교 학생들이 모인 동아리입니다.
                </p>
            </div>

            

        </section>
        
    );
};

export default Hero;
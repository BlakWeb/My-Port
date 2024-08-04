import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile 2.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Jacob O. Yahaya,</span> frontend web developer based in
        Nigeria
      </h1>
      <p>
        I am a passionate front-end web developer from Nasarawa State, Nigeria
        with 3 years of expertise in web development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">Check my resume</div>
      </div>
    </div>
  );
};

export default Hero;

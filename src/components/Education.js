import React from "react";
import SoC from "../assets/SoC.png";
import Nush from "../assets/nush.png";

class Education extends React.Component {

  render() {
    return (
      <div className="content education">
        <h1>Education</h1>
        {/* <img src={SoC} /> */}
        <h3>NUS School of Computing</h3>
        <h5>Class of 2022, Computer Science</h5>
        <p>Current CAP: 4.5/5.0 (after Year 1)</p>
        <p>I’m only a quarter way through my University education, but I definitely learnt a lot in my freshmen year.
        I’m glad to have strengthen my foundation in CS, and also grabbed opportunities to further develop myself!</p>
        <br />
        <br />
        {/* <img src={Nush} /> */}
        <h3>NUS High School of Math & Science</h3>
        <h5>Class of 2015, Major in Math, Physics & Chemistry</h5>
        <p>Graduated CAP: 4.3/5.0</p>
        <p>My time at NUSH wasn't the greatest. I was playing soccer and computer games much more than studying.
        At one point, the vice-principal had to talk to me. It was only in my final year, when the reality of not being able to further my studies and even unemployment hit me,
        and I got my priorities straight. I'm forever grateful for the opportunities and second chances that NUSH provided me, and thankful for the friendships I built there!</p>

      </div>
    )
  }
}

export default Education;
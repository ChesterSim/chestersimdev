import React from "react";
import profilePic from "../assets/dp.png";
import "../styles.css";

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <img id="profile-pic" src={profilePic} alt="Profile of Chester Sim" />
        <h1>Hi, I'm Chester</h1>
        <p className="intro">A sophomore at NUS Computer Science, with dreams of becoming a software engineer/front-end developer.</p>
        <br />
        <p className="intro">Languages: <span>Javascript, Java, C</span> (familiar)</p>
        <p className="intro">Libraries: <span>React-Native, Redux, React</span></p>
      </div>
    )
  }
}

export default Home;
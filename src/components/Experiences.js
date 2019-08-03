import React from "react";

class Experiences extends React.Component {

  render() {
    return (
      <div className="content experience">
        <h1>Experiences</h1>
        <h2>Clique</h2>
        <p>Clique is a messaging-cum-calendar mobile app for the masses. The main focus of the app is group calendars,
        where your group chats have their own personalized calendar for members to get in sync with the group events!
        Many of our group chats we create involve some form of event that will be planned in the future.
        Be it your group project where you will have frequent meetings, or simply your clique of best friends
        that will hang out all the time, there are many a times where your plans are buried deep in a heap of messages.
        Clique aims to integrate the experience of group chats and calendars, to help better event planning and ensure
        that you never miss an event again!</p>
        <p>Clique is a summer project build with my friend <a href="https://github.com/andyylam" target="_blank">Andy Lam</a>,
        for NUS Orbital. It is my most complex software engineering project to date, and one that really made me learn by doing.</p>
        <p>Built with: <span>React-Native, Redux, React Native Firebase</span></p>
        <p>Repository: <a href="https://github.com/clique-orbital/clique2" target="_blank">Github</a></p>
        <br />
        <h2>NUS-IEEE Hackathon 2018</h2>
        <p>Facepay is a system whereby a user can make payments with his face. It was built with a Raspberry Pi attached with a camera,
        and integrating it with a Python script allows for facial recognition to be used as the security measure for payment.
        The team won first prize in the competition, even though we were all first-timers in a hackathon!</p>
        <p>Built with: <span>Python</span></p>
        <hr />
        <h2 style={{ textDecoration: "none" }}>Non-Programming Experiences</h2>
        <h3>Naiise</h3>
        <p>I was a marketing intern at homegrown startup Naiise. Over there, I learnt the use of <span>Google Adwords</span>,
        and created ad campaigns for the shop's products.</p>
        <h3>Openspace Ventures</h3>
        <p>Helped out with the admin side at Openspace Ventures for their AGM, but learnt a lot about the workings
        of a VC, and also the interactions with the invested startups.</p>
        <h3>Army</h3>
        <p>Awarded the Sword of Merit during my time in command school. Currently 2IC of Alpha Coy, 909SIR (NS). </p>
      </div >
    )
  }
}

export default Experiences;
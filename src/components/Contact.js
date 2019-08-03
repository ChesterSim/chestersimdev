import React from "react";

class Contact extends React.Component {

  render() {
    return (
      <div className="contact">
        <div className="icons">
          <a href="mailto:chestersimdy@gmail.com" id="mail"><i class="fas fa-envelope"></i></a>
          <a href="https://github.com/ChesterSim" target="_blank" id="github"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/chester-s-b5b610a7/" target="_blank" id="linkedin"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.facebook.com/freakwhat" target="_blank" id="facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/freakwhat/" target="_blank" id="instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div >
    )
  }
}

export default Contact;
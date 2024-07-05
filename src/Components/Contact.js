
export default function Contact(props){
    return(
    <div className="contact">
        <div className="head-about">
          <p>Contact Us</p>
        </div>
      <img src={props.image} alt="sarvagna"></img>
      <div className="social">
         <a href="https://www.linkedin.com/in/sarvagna-vemula" target="#">LinkedIn</a>
         <a href="https://github.com/VemulaSarvagna" target="#">GitHub</a>
      </div>
    </div>
    )
}
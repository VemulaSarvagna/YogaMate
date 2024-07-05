
export default function Header() {

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust the offset to account for the header height
                behavior: 'smooth',
            });
        }
    };


    return(
       <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">YogaMate</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={(e) => handleScroll(e, 'home')} href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
}
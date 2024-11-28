import nasaLogo from "../assets/nasa.png";
import '../styles/Header.css';

function Header({ today, setDate }) {
  const handleLogoClick = () => {
    setDate(today.toISOString().split('T')[0]); // Format YYYY-MM-DD
  };

  return (
    <div className="header">
      <img
        src={nasaLogo}
        alt="NASA Logo"
        className="header-logo"
        onClick={handleLogoClick}
      />
      <h1 className="header-title">Astronomy Picture of the Day</h1>
    </div>
  );
}

export default Header;

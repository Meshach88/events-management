import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="logo-container">
          <div className="logo-box">
            <p className="logo">Full Logo</p>
          </div>
        </div>
        <RxHamburgerMenu className="mobile-menu" />
      </div>
      <p>Welcome! here's your summary</p>
    </div>
  );
}

export default Header;

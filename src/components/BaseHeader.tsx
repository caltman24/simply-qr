import GithubIcon from "./Utility/GithubIcon";

const BaseHeader = () => {
  return (
    <header>
      <p className="brand">
        Simply<span className="clr-accent">QR</span>
      </p>
      <nav>
        <ul>
          <li>
            <a href="/" className="active-page">
              Generate
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
        <a href="https://github.com/caltman24/simply-qr" target="_blank">
          <GithubIcon />
        </a>
      </nav>
    </header>
  );
};

export default BaseHeader;

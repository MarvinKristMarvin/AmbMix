import "./Header.scss";

export default function Header() {
  return (
    <>
      <header className="Header">
        <nav>
          <a href="">
            <div>
              <h1>Froggus</h1>
            </div>
          </a>
          <a href="">
            <div>
              <img src="icons/person-fill.webp" alt="" className="selected" />
            </div>
          </a>
          <a href="">
            <div>
              <img src="icons/alarm-bold.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div>
              <img src="icons/search.webp" alt="" />
            </div>
          </a>
          <a href="">
            <div>
              <img src="icons/hamburger_icon.webp" alt="" />
            </div>
          </a>
        </nav>
      </header>
    </>
  );
}

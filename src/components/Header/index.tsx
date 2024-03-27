import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <nav className="container nav-bar">
        <Link to="/">
          <p className="nav-bar-title">Github API</p>
        </Link>
      </nav>
    </header>
  );
}

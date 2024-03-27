import { Link } from "react-router-dom";
import "./styles.css";

export default function HomeBody() {
  return (
    <main>
      <section className="container home-body-section">
        <div className="home-body-title">
          <h1 className="home-body-title-h1">Desafio Github API</h1>
          <h2 className="home-body-title-h2">
            DevSuperior - Escola de programação
          </h2>
        </div>
        <div>
          <Link to="/profile-search">
            <button className="home-body-button" type="submit">
              Começar
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

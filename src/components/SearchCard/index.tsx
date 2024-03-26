import "./styles.css";

export default function SearchCard() {
  return (
    <>
      <div className="card card-container">
        <div className="card-container-title">Encontre um perfil Github</div>
        <form>
          <input className="card-container-input" type="text" placeholder="Usuário Github" />
        </form>
        <div>
          <button className="home-body-button" type="submit">Encontrar</button>
        </div>
      </div>
    </>
  );
}

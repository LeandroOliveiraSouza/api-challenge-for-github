import "./styles.css";
import testImg from '../../assets/computer.png';

export default function Information() {
  return (
    <div className="card-container">
      <div className="container-information">
        <img className="img-information" src={testImg} alt="Teste" />
        <div className="card-information">
          <div className="title-information">Informações</div>
          <form>
            <input
              className="form-information-input"
              type="text"
              placeholder="Perfil: "
            />
            <input
              className="form-information-input"
              type="text"
              placeholder="Seguidores: "
            />
            <input
              className="form-information-input"
              type="text"
              placeholder="Localidade: "
            />
            <input
              className="form-information-input"
              type="text"
              placeholder="Nome: "
            />
          </form>
        </div>
      </div>
    </div>
  );
}

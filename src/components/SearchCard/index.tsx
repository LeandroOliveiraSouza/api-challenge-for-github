import "./styles.css";
import { ChangeEvent, FormEvent, useState } from "react";

type SearchCardProps = {
  onSearchUser: (profileUser: string) => void; // Função para passar sendUser para o ProfileSearch
};

export default function SearchCard({ onSearchUser }: SearchCardProps) {
  const [profileUser, setProfileUser] = useState<string>("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setProfileUser(event.target.value);
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearchUser(profileUser); // Chamar a função onSearchUser com o profileUser
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-container-title">Encontre um perfil Github</div>
        <form className="form-search" onSubmit={handleSearch}>
          <input
            name="profileUser"
            value={profileUser}
            className="card-container-input"
            type="text"
            placeholder="Usuário Github"
            onChange={handleInputChange}
          />
          <div>
            <button className="home-body-button" type="submit">
              Encontrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

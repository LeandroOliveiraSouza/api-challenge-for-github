import "./styles.css";
import { useEffect, useState } from "react";
import { ProfileDTO } from "../../models/profile";
import * as profileService from "../../services/profile-service.ts";

type InformationProps = {
  sendUser: string; // Defina o tipo de sendUser como string
};

export default function Information({ sendUser }: InformationProps) {
  const [profile, setProfiles] = useState<ProfileDTO>();

  useEffect(() => {
    profileService
      .findProfile(sendUser)
      .then((response) => {
        setProfiles(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, [sendUser]);

  return (
    <div className="card-container">
      <div className="container-information">
        <img className="img-information" src={profile?.avatar_url} alt="Foto do Perfil" />
        <div className="card-information">
          <div className="title-information">Informações</div>
          <form className="form-information">
            <input
              className="form-information-input"
              type="text"
              placeholder={`Perfil: ${profile?.url}`}
            />
            <input
              className="form-information-input"
              type="text"
              placeholder={`Seguidores: ${profile?.followers}`}
            />
            <input
              className="form-information-input"
              type="text"
              placeholder={`Localidade: ${profile?.location}`}
            />
            <input
              className="form-information-input"
              type="text"
              placeholder={`Nome: ${profile?.name}`}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

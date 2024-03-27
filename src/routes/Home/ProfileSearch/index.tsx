import SearchCard from "../../../components/SearchCard";
import Information from "../../../components/Information";
import { useState } from "react";
import UserNotFound from "../../../components/UserNotFound";
import { ProfileDTO } from "../../../models/profile";
import * as profileService from "../../../services/profile-service.ts";

export default function ProfileSearch() {
  const [sendUser, setSendUser] = useState<string>(""); // Estado para armazenar o sendUser
  const [profile, setProfile] = useState<ProfileDTO | undefined>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // Estado para controlar se o formulário foi enviado

  function handleSearchUser(profileUser: string) {
    setSendUser(profileUser); // Navegar para a rota com o sendUser
    setIsSubmitted(true); // Defina isSubmitted como true após o envio do formulário

    // Limpar o estado do perfil ao iniciar uma nova pesquisa
    setProfile(undefined);

    // Buscar o perfil do usuário apenas se o perfil do usuário não for vazio
    if (profileUser.trim() !== "") {
      profileService
        .findProfile(profileUser)
        .then((response) => {
          setProfile(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          setProfile(undefined); // Definir o perfil como nulo se ocorrer um erro
        });
    }
  }

  return (
    <main>
      <section className="container">
        <SearchCard onSearchUser={handleSearchUser} />{" "}
        {isSubmitted &&
          (profile !== undefined ? (
            <Information sendUser={sendUser} />
          ) : (
            <UserNotFound />
          ))}
      </section>
    </main>
  );
}

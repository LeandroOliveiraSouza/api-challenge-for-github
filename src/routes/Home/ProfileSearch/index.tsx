import SearchCard from "../../../components/SearchCard";
import UserNotFound from "../../../components/UserNotFound";

export default function ProfileSearch() {
  return (
    <main>
      <section className="container">
        <SearchCard />
        <UserNotFound />
      </section>
    </main>
  );
}

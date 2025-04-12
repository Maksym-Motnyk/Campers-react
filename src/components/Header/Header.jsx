import Navigation from "../Navigation/Navigation";
import css from "./header.module.css";
export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <a href="#">TravelTrucks</a>
        <Navigation />
      </div>
    </header>
  );
}

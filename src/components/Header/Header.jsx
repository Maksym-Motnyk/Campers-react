import Navigation from "../Navigation/Navigation";
import css from './header.module.css'
export default function Header() {
  return (
    <header className={css.header}>
      <a href="#">TravelTrucks</a>
      <Navigation/>
    </header>
  );
}

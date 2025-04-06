import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main>
      <section className={css.heroSection}>
        <div className={css.heroContainer}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <p className={css.heroText}>
            You can find everything you want in our catalog
          </p>
          <button onClick={() => navigate("/catalog")} className={css.heroBtn}>
            View Now
          </button>
        </div>
      </section>
    </main>
  );
}

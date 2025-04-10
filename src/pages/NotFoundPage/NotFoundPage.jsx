import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <p className={css.error}>NotFoundPage</p>
      <Link to="/">please, go to home page</Link>
    </div>
  );
}

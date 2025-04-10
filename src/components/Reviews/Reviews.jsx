import { useState, useEffect } from "react";
import axios from "axios";
import css from "./Reviews.module.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  useEffect(() => {
    async function getReviews() {
      try {
        const res = await axios.get(
          "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
        );
        setReviews(res.data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getReviews();
  }, []);

  return (
    <div>
      <ul>
        {reviews.slice(0, 1).map((review) => (
          <li key={review.id}>
            <ul>
              <li className={css.reviewListItem}>
                <p className={css.name}>{review.reviews[0]?.reviewer_name}</p>
                <p>{review.reviews[0]?.reviewer_rating}</p>
                <p className={css.comment}>{review.reviews[0]?.comment}</p>
              </li>
              <li>
                <p className={css.name}>{review.reviews[1]?.reviewer_name}</p>
                <p>{review.reviews[1]?.reviewer_rating}</p>
                <p className={css.comment}>{review.reviews[1]?.comment}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

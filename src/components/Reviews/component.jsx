export const Reviews = ({ reviews }) => {
    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}>
                    <div><strong>{review.user}:</strong> {review.text}</div>
                    <i>Rating: {review.rating} / 5</i>
                </li>
            ))}
        </ul>
    )
}
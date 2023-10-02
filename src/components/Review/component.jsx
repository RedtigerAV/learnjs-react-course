export const Review = ({ review }) => {
    return (
        <div>
            <div><strong>{review.user}:</strong> {review.text}</div>
            <i>Rating: {review.rating} / 5</i>
        </div>
    )
}
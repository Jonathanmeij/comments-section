import { useState } from "react";

export default function Rating(props) {
    const data = props.data;
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const score = data.score;

    function like() {
        if (isDisliked) {
            setIsDisliked(false);
            props.rateChange(props.id, score + 2);
        } else if (isLiked) {
            props.rateChange(props.id, score - 1);
        } else {
            props.rateChange(props.id, score + 1);
        }
        setIsLiked((prev) => !prev);
    }

    function dislike() {
        if (isLiked) {
            setIsLiked(false);
            props.rateChange(props.id, score - 2);
        } else if (isDisliked) {
            props.rateChange(props.id, score + 1);
        } else {
            props.rateChange(props.id, score - 1);
        }
        setIsDisliked((prev) => !prev);
    }

    return (
        <div className="rating-container">
            <div
                onClick={like}
                style={isLiked ? { color: "#666666" } : { color: "#ababab" }}
                className="count-button"
            >
                +
            </div>
            <div className="count">{data.score}</div>
            <div
                onClick={dislike}
                style={isDisliked ? { color: "#666666" } : { color: "#ababab" }}
                className="count-button"
            >
                -
            </div>
        </div>
    );
}

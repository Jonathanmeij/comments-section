export default function Rating(props) {
    const data = props.data;
    return (
        <div className="rating-container">
            <div className="count-button">+</div>
            <div className="count">{data.score}</div>
            <div className="count-button">-</div>
        </div>
    );
}

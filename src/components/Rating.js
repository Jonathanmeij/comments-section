export default function Rating(props) {
    const data = props.data;
    return (
        <div className="rating-container">
            <div>+</div>
            <div className="count">{data.score}</div>
            <div>-</div>
        </div>
    );
}

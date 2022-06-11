export default function Buttons(props) {
    return (
        <div className="comment-buttons">
            {props.isYou ? (
                <div className="you-button">
                    <div
                        className="comment-delete"
                        onClick={() => props.deleteComment(props.data.id)}
                    >
                        <img src={props.deleteIcon} alt=""></img>
                        <span>Delete</span>
                    </div>
                    <div className="edit-button">
                        <img src={props.editIcon} alt=""></img>
                        <span>Edit</span>
                    </div>
                </div>
            ) : (
                <div className="blue-button">
                    <img src={props.replyIcon} alt=""></img>
                    <span>Reply</span>
                </div>
            )}
        </div>
    );
}

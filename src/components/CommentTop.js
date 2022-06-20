import Buttons from "./Buttons.js";

export default function CommentTop(props) {
    return (
        <div className="comment-top">
            <img
                src={require(`../images/avatars/image-${props.data.user.username}.png`)}
                alt=""
                className="avatar"
            ></img>
            <span className="username">{props.data.user.username}</span>
            {props.isYou && (
                <div className="comment-you">
                    <span>you</span>
                </div>
            )}
            <span className="created-at">{props.data.createdAt}</span>

            {/* buttons for reply, delete, edit */}
            <Buttons
                data={props.data}
                isYou={props.isYou}
                deleteComment={props.deleteComment}
                openCommentEditor={props.openCommentEditor}
                toggleEdit={props.toggleEdit}
            />
        </div>
    );
}

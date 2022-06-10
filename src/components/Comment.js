import Rating from "./Rating.js";
import replyIcon from "../images/icon-reply.svg";
import editIcon from "../images/icon-edit.svg";
import deleteIcon from "../images/icon-delete.svg";

export default function Comment(props) {
    const data = props.data;
    const hasReplies = data["replies"] && data.replies.length > 0;
    const isYou = data.user.username === props.currentUser.username;

    const replies = () => {
        if (data["replies"] && data.replies.length !== 0) {
            return data.replies.map((reply) => {
                return (
                    <Comment
                        key={reply.id}
                        data={reply}
                        currentUser={props.currentUser}
                        deleteComment={() => props.deleteComment(reply.id)}
                        rateChange={props.rateChange}
                    ></Comment>
                );
            });
        }
    };

    const replyElements = replies();
    return (
        <div className="comment-section">
            <div className="comment-container">
                <Rating data={data} rateChange={props.rateChange} id={data.id} />
                <div className="comment-content">
                    <div className="comment-top">
                        <img
                            src={require(`../images/avatars/image-${data.user.username}.png`)}
                            alt=""
                            className="avatar"
                        ></img>
                        <span className="username">{data.user.username}</span>
                        {isYou && (
                            <div className="comment-you">
                                <span>you</span>
                            </div>
                        )}
                        <span className="created-at">{data.createdAt}</span>
                        <div className="comment-buttons">
                            {isYou ? (
                                <div className="you-button">
                                    <div
                                        className="comment-delete"
                                        onClick={() => props.deleteComment(props.data.id)}
                                    >
                                        <img src={deleteIcon} alt=""></img>
                                        <span>Delete</span>
                                    </div>
                                    <div className="edit-button">
                                        <img src={editIcon} alt=""></img>
                                        <span>Edit</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="blue-button">
                                    <img src={replyIcon} alt=""></img>
                                    <span>Reply</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <p>{data.content}</p>
                </div>
            </div>

            <div className="replies">
                {hasReplies && <div className="replies-divider"></div>}
                <div>{replyElements}</div>
            </div>
        </div>
    );
}

// {
//     "id": 1,
//     "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//     "createdAt": "1 month ago",
//     "score": 12,
//     "user": {
//       "image": {
//         "png": "./images/avatars/image-amyrobson.png",
//         "webp": "./images/avatars/image-amyrobson.webp"
//       },
//       "username": "amyrobson"
//     },
//     "replies": []
//   },

// {props.data.user.image.png}
//

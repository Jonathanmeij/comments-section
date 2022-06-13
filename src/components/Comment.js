import Rating from "./Rating.js";
import Buttons from "./Buttons.js";
import { useState } from "react";
import CommentEditor from "./CommentEditor.js";

export default function Comment(props) {
    const data = props.data;
    const hasReplies = data["replies"] && data.replies.length > 0;
    const isYou = data.user.username === props.currentUser.username;
    const [showReplyEditor, setShowReplyEditor] = useState(false);
    const isReply = data["replyingTo"];

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
                        addReply={props.addReply}
                    ></Comment>
                );
            });
        }
    };

    console.log(data.id + " " + isReply);
    function handleReply() {
        setShowReplyEditor((prev) => !prev);
        // props.addReply(props.id, content);
    }

    function addComment(content) {
        props.addReply(data.id, content);
        setShowReplyEditor(false);
    }

    const replyElements = replies();

    return (
        <div className="comment-section">
            <div className="comment-container">
                {/* like and dislike  */}
                <Rating data={data} rateChange={props.rateChange} id={data.id} />
                <div className="comment-content">
                    {/* comment header with profile picture, name, date */}
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

                        {/* buttons for reply, delete, edit */}
                        <Buttons
                            data={data}
                            isYou={isYou}
                            deleteComment={props.deleteComment}
                            handleReply={handleReply}
                        />
                    </div>

                    {/* comment content */}
                    <p className="content">{data.content}</p>
                </div>
            </div>

            {/* reply editor */}

            {showReplyEditor && (
                <CommentEditor currentUser={props.currentUser} addComment={addComment} />
            )}

            {/* replies */}
            <div className="replies">
                {hasReplies && <div className="replies-divider"></div>}
                <div className="reply-container">{replyElements}</div>
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

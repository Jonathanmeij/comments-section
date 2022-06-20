import { nanoid } from "nanoid";
import { useState } from "react";

export default function CommentEditor(props) {
    const [textArea, setTextArea] = useState("");

    function handleChange(e) {
        setTextArea(e.target.value);
    }

    function handleSubmit() {
        const comment = {
            id: nanoid(),
            content: textArea,
            createdAt: "now",
            score: 0,
            replyingTo: props.parentName,
            user: {
                image: {
                    png: `./images/avatars/image-${props.currentUser.username}.png`,
                    webp: `./images/avatars/image-${props.currentUser.username}.webp`,
                },
                username: props.currentUser.username,
            },
            replies: [],
        };

        props.addComment(comment);
    }

    return (
        <div className="editor comment-container">
            <img
                src={require(`../images/avatars/image-${props.currentUser.username}.png`)}
                alt=""
                className="avatar"
            ></img>
            <textarea
                value={textArea}
                onChange={handleChange}
                placeholder="Add a comment..."
            />
            <button className="editor-button" onClick={handleSubmit}>
                SEND
            </button>
        </div>
    );
}

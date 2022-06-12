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

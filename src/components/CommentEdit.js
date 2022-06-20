import { useState } from "react";

export default function CommentEdit(props) {
    const [textArea, setTextArea] = useState(props.data.content);

    function handleChange(e) {
        setTextArea(e.target.value);
    }

    function handleEdit() {
        props.handleEdit(props.id, textArea);
        props.toggleEdit();
    }

    return (
        <div className="commentEdit">
            <textarea
                value={textArea}
                onChange={handleChange}
                className="edit-textarea"
            />
            <button className="editor-button update" onClick={handleEdit}>
                UPDATE
            </button>
        </div>
    );
}

import { useState } from "react";
import jsonData from "../data.json";
import Comment from "./Comment";
import DeleteModal from "./DeleteModal";

export default function Main() {
    const [comments, setComments] = useState(jsonData.comments);
    const [currentUser] = useState(jsonData.currentUser);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteCommentId, setDeleteCommentId] = useState();

    function deleteCommentFromArray(id) {
        setShowDeleteModal(false);
        setComments((prevComments) => {
            let oldArray = prevComments;

            oldArray = oldArray.filter((comment) => comment.id !== id);
            oldArray.forEach((comment, index) => {
                oldArray[index].replies = comment.replies.filter(
                    (reply) => reply.id !== id
                );
            });

            return oldArray;
        });
    }

    function handleDelete(id) {
        setDeleteCommentId(id);
        setShowDeleteModal(true);
    }

    function handleRateChange(id, newValue) {
        setComments((prevComments) => {
            let oldArray = prevComments;

            oldArray = oldArray.map((comment) =>
                comment.id === id ? { ...comment, score: newValue } : comment
            );

            oldArray.forEach((comment, index) => {
                oldArray[index].replies = comment.replies.map((comment) =>
                    comment.id === id ? { ...comment, score: newValue } : comment
                );
            });

            return oldArray;
        });
    }

    const dataElements = comments.map((element) => {
        return (
            <Comment
                key={element.id}
                data={element}
                currentUser={currentUser}
                deleteComment={handleDelete}
                rateChange={handleRateChange}
            />
        );
    });

    return (
        <div>
            {dataElements}
            {showDeleteModal && (
                <DeleteModal
                    cancelModal={() => setShowDeleteModal(false)}
                    deleteComment={() => deleteCommentFromArray(deleteCommentId)}
                />
            )}
        </div>
    );
}

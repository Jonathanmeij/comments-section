export default function DeleteModal(props) {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <h2>Delete comment</h2>
                <p>
                    Are you sure you want to delete this comment? This will remove the
                    comment and can't be undone
                </p>
                <div className="modal-buttons-container">
                    <button
                        className="modal-button button-cancel"
                        onClick={props.cancelModal}
                    >
                        NO, CANCEL
                    </button>
                    <button
                        className="modal-button button-proceed"
                        onClick={props.deleteComment}
                    >
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
    );
}

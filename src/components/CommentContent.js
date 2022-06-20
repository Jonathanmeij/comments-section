export default function CommentContent(props) {
    return (
        <div className="content">
            {props.isReply ? (
                <div>
                    <span className="mention">@{props.data.replyingTo}</span>
                    {" " + props.data.content}
                </div>
            ) : (
                props.data.content
            )}
        </div>
    );
}

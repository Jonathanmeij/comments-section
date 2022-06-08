import { useState } from "react";
import jsonData from "../data.json";
import Comment from "./Comment";

export default function Main() {
    const [comments] = useState(jsonData.comments);
    // const [currentUser, setCurrentUser] = useState(jsonData.currentUser);

    const dataElements = comments.map((element) => {
        return <Comment key={element.id} data={element} />;
    });
    return <div>{dataElements}</div>;
}

import React from 'react';
import "./TaskCard.css";
import Tag from "./Tag"
import deleteIcon from "../assets/delete.jpeg";

const TaskCard = ({title, tags, handleDelete, index}) => {
    //defines task card features including title, tags and deletion
  return (
    <article className="task_card">
        <p className="task_text">
            {title}
        </p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
                {tags.map((tag, index) => (
                    <Tag  key = {index} tagName = {tag} selected />
                ))}
            </div>
            <div className="task_delete" onClick={()=> handleDelete(index)}>
                <img src={deleteIcon}
                className="delete_icon" alt="" />
            </div>
        </div>
    </article>
  )
};

export default TaskCard;

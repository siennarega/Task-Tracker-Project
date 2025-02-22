import React from 'react';
import "./Tag.css";

const Tag = ({tagName, selectTag, selected}) => {
    //defining tag colour for each tag category
    const tagStyle = {
        Studies: {backgroundColor: "#ff9cee"},
        Work: {backgroundColor: "#d5aaff"},
        Admin: {backgroundColor: "#c4faf8"},
        Other: {backgroundColor: "#ffffd1"},
        default: {backgroundColor: "#f9f9f9"},
    };
    //defining tag buttons
    return (
        <button 
            type="button" 
            className='tag'  
            style={selected ? tagStyle[tagName] : tagStyle.default}  
            onClick={() => selectTag(tagName)}> 
                {tagName}
        </button>
    );
};

export default Tag;

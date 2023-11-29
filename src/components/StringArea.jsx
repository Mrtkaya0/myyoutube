import React, { useState } from "react";

const StringArea = ({ text, max }) => {
    const [expand, setExpand] = useState(false);

    let shortText = text;

    if (text && text.length > max && expand) {
        shortText = text.slice(0, max) + "....Daha Fazlası";
    }

    return (
        <p onClick={() => setExpand(!expand)}>
            {shortText && shortText.split("\n").map((line, index) => (
                <span key={index}>
                    {line} 
                    <br />
                </span> 
            ))}
        </p>
    );
};

export default StringArea;
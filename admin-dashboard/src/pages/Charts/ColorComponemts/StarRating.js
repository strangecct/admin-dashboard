import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onselect = (f) => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onselect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({
    style = {},
    totalStars = 5,
    selected = 0,
    onRate = (f) => f,
}) {
    // const [selectedStars, setSelectStars] = useState(selected);
    return (
        <div
            style={{ padding: "5px", ...style, display: "flex" }}
            onClick={(e) => e.stopPropagation()}
        >
            {createArray(totalStars).map((item, i) => (
                <Star
                    key={i}
                    selected={i < selected}
                    onselect={() => {
                        onRate(i + 1);
                    }}
                />
            ))}
            <p>
                {selected} of {totalStars} stars
            </p>
        </div>
    );
}

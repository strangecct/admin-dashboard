import React from "react";
import { FaTrash } from "react-icons/fa";

import { useColors } from "../../../contexts/ContextProvider";
import StarRating from "./StarRating";
import { useNavigate } from "react-router-dom";

const Color = ({ id, color, title, rating }) => {
    const { ratingColor, delColor } = useColors();
    let navigate = useNavigate();

    return (
        <section onClick={() => navigate(`/colorapp/${id}`)}>
            <h1>{title}</h1>
            <div style={{ height: 50, backgroundColor: color }}>
                这一部分随便写点击什么
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    delColor(id);
                }}
            >
                <FaTrash />
            </button>
            <StarRating
                totalStars={7}
                selected={rating}
                onRate={(rating) => {
                    ratingColor(id, rating);
                }}
            />
        </section>
    );
};

export default Color;

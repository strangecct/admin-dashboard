import React from "react";
import { useParams } from "react-router-dom";

// import { useColors } from "./ColorProvider";
import { useColors } from "../../../contexts/ContextProvider";
import { Header } from "../../../components";
const ColorDetails = () => {
    // const params = useParams();
    // console.log(params);
    // const id = params.id;
    let { id } = useParams();

    let { colors } = useColors();

    let foundColor = colors.find((color) => color.id === id);
    console.log(foundColor);

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="" title="Details" />
            <div
                style={{
                    backgroundColor: foundColor.color,
                    height: 100,
                    width: 100,
                }}
            ></div>
            <div>{foundColor.title}</div>
            <div>
                <b>color</b>:{foundColor.color}
            </div>
        </div>
    );
};

export default ColorDetails;

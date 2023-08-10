import React, { useContext, useEffect } from "react";
import { useColors } from "../../../contexts/ContextProvider";
import Color from "./Color";

const Colorlist = () => {
    // return (
    //     <ColorContext.Consumer>
    //         {(context) => {
    //             if (!context.colors.length) return <div>No colors listed</div>;
    //             return (
    //                 <div>
    //                     {context.colors.map((color) => (
    //                         <Color key={color.id} {...color}></Color>
    //                     ))}
    //                 </div>
    //             );
    //         }}
    //     </ColorContext.Consumer>
    // );
    const { colors } = useColors();
    useEffect(() => {
        console.log(colors);
    });
    if (!colors.length) return <div>No colors listed</div>;
    return (
        <div>
            {colors.map((color) => (
                <Color key={color.id} {...color}></Color>
            ))}
        </div>
    );
};

export default Colorlist;

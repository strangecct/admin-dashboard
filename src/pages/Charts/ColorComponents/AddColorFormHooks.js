import React, { useState } from "react";
import { useInput } from "./useInput";
import { useColors } from "../../../contexts/ContextProvider";

export default function AddColorForm() {
    const { addColor } = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) => {
        e.preventDefault();
        console.log("submit");
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };
    return (
        <div style={{ height: "50px", verticalAlign: "center" }}>
            <form action="" onSubmit={submit}>
                <input
                    className="h-full"
                    {...titleProps}
                    type="text"
                    placeholder="color title ..."
                    required
                />
                <input
                    className=" ml-5 "
                    {...colorProps}
                    type="color"
                    required
                />
                <button className="h-full ml-5 pl-2  p-1 border-slate-900 bg-slate-50 rounded-1sm ">
                    Add
                </button>
            </form>
        </div>
    );
}

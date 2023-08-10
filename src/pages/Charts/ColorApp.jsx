import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "../../components";
import Colorlist from "./ColorComponents/Colorlist";
import AddColorForm from "./ColorComponents/AddColorFormHooks";

const ColorApp = () => {
    return (
        <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="color rating App" title="颜色评分页面" />
            <AddColorForm />
            <Colorlist />
        </div>
    );
};

export default ColorApp;

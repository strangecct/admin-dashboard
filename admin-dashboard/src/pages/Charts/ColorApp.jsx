import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "../../components";
import Colorlist from "./ColorComponemts/Colorlist";
import AddColorForm from "./ColorComponemts/AddColorFormHooks";

const ColorApp = () => {
    return (
        <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="rating App" title="评分的页面" />
            <AddColorForm />
            <Colorlist />
        </div>
    );
};

export default ColorApp;

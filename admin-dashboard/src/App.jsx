import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import ColorDetails from "./pages/Charts/ColorComponemts/ColorDetails";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
    Ecommerce,
    Orders,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Area,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor,
    Line,
    ColorApp,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";

const App = () => {
    const {
        activeMenu,
        themeSettings,
        setThemeSettings,
        currentMode,
        currentColor,
    } = useStateContext();

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    {/* 右下角设置 */}
                    <div
                        className="fixed right-4 bottom-4"
                        style={{ zIndex: "1000" }}
                    >
                        <TooltipComponent content="Settings" position="Top">
                            <button
                                type="button"
                                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                style={{
                                    backgroundColor: currentColor,
                                    borderRadius: "50%",
                                }}
                                onClick={() => setThemeSettings(true)}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {/* SideBar */}
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                            <Sidebar />
                        </div>
                    ) : (
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar />
                        </div>
                    )}
                    {/* Navigation对应的显示区 */}
                    <div
                        className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
           ${activeMenu ? "md:ml-72 " : "flex-2"}`}
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar />
                        </div>
                        {/* Dashboard */}
                        <div>
                            {themeSettings && <ThemeSettings />}
                            <Routes>
                                {/* Dashboard */}
                                <Route path="/" element={<Ecommerce />} />
                                <Route
                                    path="/ecommerce"
                                    element={<Ecommerce />}
                                />
                                {/* Pages */}
                                <Route path="/orders" element={<Orders />} />
                                <Route
                                    path="/employees"
                                    element={<Employees />}
                                />
                                <Route
                                    path="/customers"
                                    element={<Customers />}
                                />
                                {/* Apps */}
                                <Route path="/kanban" element={<Kanban />} />
                                <Route path="/editor" element={<Editor />} />
                                <Route
                                    path="/calendar"
                                    element={<Calendar />}
                                />
                                <Route
                                    path="/color-picker"
                                    element={<ColorPicker />}
                                />

                                {/* Funcs */}
                                <Route path="/line" element={<Line />} />
                                <Route path="/area" element={<Area />} />
                                <Route
                                    path="/colorapp"
                                    element={<ColorApp />}
                                />
                                <Route path="/pie" element={<Pie />} />
                                <Route
                                    path="/financial"
                                    element={<Financial />}
                                />
                                <Route
                                    path="/color-mapping"
                                    element={<ColorMapping />}
                                />
                                <Route path="/pyramid" element={<Pyramid />} />
                                <Route path="/stacked" element={<Stacked />} />
                                <Route
                                    path="/colorapp/:id"
                                    element={<ColorDetails />}
                                ></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;

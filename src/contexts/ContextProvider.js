import React, { createContext, useContext, useState } from "react";
import colorsData from "./color-list.json";
import { v4 } from "uuid";
// 全局共享数据
const StateContext = createContext();

export const useColors = () => useContext(StateContext);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    // 系统侧边导航属性
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    };
    // 系统颜色属性
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false);
    };
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem("themeColor", color);
        setThemeSettings(false);
    };

    // 下面的一部分是提供给colorApp的状态
    const [colors, setColors] = useState(colorsData);

    const addColor = (title, color) => {
        setColors([...colors, { id: v4(), rating: 0, title, color }]);
    };

    const ratingColor = (id, rate) => {
        setColors(
            colors.map((color) =>
                color.id === id ? { ...color, rating: rate } : color
            )
        );
    };

    const delColor = (id) => {
        setColors(colors.filter((color) => color.id !== id));
    };

    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu,
                // 传入的名字一样可以省略
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,

                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                themeSettings,
                setThemeSettings,

                setMode,
                setColor,
                // colorApp 传递
                colors,
                addColor,
                ratingColor,
                delColor,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
export const useStateContext = () => useContext(StateContext);
// 这一个的作用？call it as a hook

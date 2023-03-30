import React, { createContext, useContext, useState } from 'react'
// 全局共享数据
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const [screenSize, setScreenSize] = useState(undefined);

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }


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
                setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
// 这一个的作用？call it as a hook
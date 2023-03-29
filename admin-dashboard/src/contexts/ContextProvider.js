import React, { createContext, useContext, useState } from 'react'
// 全局共享数据
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    useProfile: File,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu
                // 传入的名字一样可以省略
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
// 这一个的作用？call it as a hook
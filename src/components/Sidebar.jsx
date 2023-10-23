import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/nav'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
    const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

    const handleCloseSideBar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
        // 当切换时检查
    }

    const activeLinkClass = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 round-lg text-white text-md m-2'
    const normalLinkClass = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 round-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (<>
                <div className='flex justify-between items-center'>
                    <Link
                        to='/'
                        onClick={() => setActiveMenu(false)}
                        className='items-center gap-3 ml-3 mt-4 flex text-xl
                    font-extrabold tracking-tight dark:text-white text-slate-900'
                    >
                        <SiShopware /> <span>Plasma</span>
                    </Link>
                    <TooltipComponent content='Menu' position='BottomCenter'>
                        <button
                            type='button'
                            onClick={() => setActiveMenu(prevActiveMenu =>
                                !prevActiveMenu
                            )}
                            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block xl:hidden'>
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10'>
                    {links.map(item => (
                        <div key={item.title}>
                            <p className='text-gray-400 m-3 mt-4 uppercase'>
                                {item.title}
                            </p>
                            {item.links.map(link => (
                                <NavLink
                                    to={`/${link.name.toLowerCase()}`}
                                    key={link.name}
                                    onClick={() => handleCloseSideBar()}
                                    style={({ isActive }) =>
                                        isActive ? { backgroundColor: currentColor } : {}
                                    }
                                    className={({ isActive }) => {
                                        return isActive ? activeLinkClass : normalLinkClass
                                    }}
                                >
                                    {link.icon}
                                    <span className='capitalize'>
                                        {link.name}
                                    </span>
                                </NavLink>
                                // 这里是react-router-dom包里的
                            ))}
                        </div>
                    ))}
                </div>

            </>)}
        </div>
    )
}

export default Sidebar
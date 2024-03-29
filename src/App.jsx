import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import ColorDetails from './pages/Charts/ColorComponents/ColorDetails'
import { Navbar, Footer, Sidebar, ThemeSettings, Login } from './components'

import {
  Monitor,
  Analysis,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Project,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
  ColorApp,
  BlackBoard,
  Summary,
  Upload
} from './pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'
//import BlackBoard from './pages/Charts/BlackBoard'

const loginContext = React.createContext(false)


const App = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentMode,
    currentColor,
  } = useStateContext()
  const [isLogin, setLogin] = useState(false)
  return (
    <loginContext.Provider value={isLogin}>
      <BrowserRouter>

        <div className={currentMode === 'Dark' ? 'dark' : ''}></div>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* 右下角设置 */}
          <div
            className="fixed right-4 bottom-4"
            style={{ zIndex: '1000' }}
          >
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  backgroundColor: currentColor,
                  borderRadius: '50%',
                }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* SideBar */}
          {
            <div className={activeMenu ?
              "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"
              : "w-0 dark:bg-secondary-dark-bg"}>
              <Sidebar />
            </div>}
          {/* Navigation对应的显示区 */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
        ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            {/* Dashboard */}
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/sdu" element={<Summary />} />
                <Route path="/timeline" element={<ColorPicker />} />


                {/* 研究方向 */}
                <Route path="/plasma" element={<Line />} />
                <Route path="/battery" element={<Kanban />} />
                <Route path="/colorapp" element={<ColorApp />} />
                <Route path="/colorapp/:id" element={<ColorDetails />} />
                <Route path="/algorithm" element={<Area />} />
                <Route path="/projects" element={<Project />} />

                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />


                {/* 工具 */}
                <Route path="/dashboard" element={<Monitor />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/aigc" element={<BlackBoard />} />
                <Route path="/gpt" element={<Editor />} />



                {/* 人员介绍页面 */}
                <Route path="/orders" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </loginContext.Provider>
  )
}

export default App

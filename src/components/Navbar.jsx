import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai' //要以组件形式使用
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Modal, message } from 'antd';


import qinzhe from '../data/avatar/qinzhe.jpg'

import { Cart, Chat, Notification, UserProfile, Login } from '../components'
import { useStateContext } from '../contexts/ContextProvider'

//创建一个函数式组件
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray '
    >
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'>
        {/* span代表未读消息 */}
      </span>
      {icon}
    </button>
  </TooltipComponent>
)



const Navbar = () => {
  const {
    activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize, currentColor
  } = useStateContext()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (flag) => {
    await new Promise((resolve) => {
      if (flag) {
        setTimeout(() => {
          messageApi.open({
            type: 'success',
            content: '登陆成功',
          });
          resolve()
        }, 300)
      }
      else {
        messageApi.open({
          type: 'error',
          content: '账户或密码错误',
        });
        //reject()
        return
      }
    })
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);//更新值
    handleResize();//赋初值
    // 只用来跟踪screenSize
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  // 如果第二个参数不传，只在开始调用，传screenSize后，这个属性更新时也会调用，会增加负载

  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (

    <div className='flex justify-between p-2 md:mx-6 relative'>
      {contextHolder}
      <Modal
        title="登录"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Login handleOk={handleOk} handleCancel={handleCancel} />
      </Modal>
      <NavButton
        title='Cart'
        customFunc={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='cart'
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='chat'
          customFunc={() => handleClick('chat')}
          color={currentColor}
          dotColor='#03c9d7'
          icon={<BsChatLeft />}
        />
        <NavButton
          title='notification'
          customFunc={() => handleClick('notification')}
          color={currentColor}
          dotColor='#03c9d7'
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content='profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => {
              showModal()
              handleClick('userProfile')
            }}
          >
            <div className='rounded-full w-8 h-8 relative overflow-hidden' >
              <img src={qinzhe} alt="user" />
            </div>
            <p>
              <span className='text-gray-400 text-14'>Hi,</span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Qin zhe</span>
            </p>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar
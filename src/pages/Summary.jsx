import React, { useState, useEffect } from 'react'

import { Button } from '../components'
import { earningData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { Header } from "../components";

const Summary = () => {
  const { currentColor } = useStateContext();
  // 添加动画
  const toRotate = ['html、css网页制作', '熟悉JavaScript', '掌握react框架使用'];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(' '); //当前显示的内容
  // 这里如果设置一个空值不会被识别为string？
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    return () => { clearInterval(ticker) };
  })

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText =
      isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelat => (prevDelat * 3 / 5))
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period)
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (

    <>
      <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Shandong University" title="山东大学" />
        <div className='w-64 text-xl rounded-lg italic font-semibold bg-cyan-700 p-5 m-5 border-spacing-1'>
          等离子体实验室
        </div>
        <div className=''>
          <h2 className='text-3xl  font-bold'>Profess Skill:&nbsp;&nbsp;
            <span className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
              <span className="wrap">{text}</span>
            </span>
          </h2>
          <div className='mt-10'>校园经历：英语六级，本科成绩前 20%，获得一次二等奖学金、两次三等奖学金，
            完成过自制耳机功放，基于stm32 的智能车、机器人，智能家居等硬件项目</div>
          <button onClick={() => console.log('connect')}>
            Connect the world
            {/*<ArrowRightCircle size={25} />*/}
          </button>
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>

        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg h-44  dark:text-gray-200 round-2xl
                    w-full lg:w-80 p-8 pt-9 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          {/* 第一个方块 */}
          <div className=' flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>￥9999</p>
            </div>
            <div className='mt-6'>
              <Button
                color='white'
                bgColor={currentColor}
                text='DownLoad'
                borderRadius='10px'
                size='md'
              />
            </div>
          </div>

        </div>
        {/* 小盒子flex换行 */}
        <div className='flex flex-wrap justify-center gap-1 items-center'>
          {earningData.map(item => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2lx opacity-0.9 rounded-full p-4 hover:drop-shadow-lg'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {/* bug 只有手动设置过一次后才能生效 */}
                  {item.percentage}
                </span>
              </p>
              <p className='text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </ >
  )
}

export default Summary
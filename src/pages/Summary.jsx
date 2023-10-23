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
          <div className='mt-10'>
            团队发展目标是以放电等离子体活性粒子性质及其在生物医学应用研究为核心方向，
            尤其是等离子活化水及活化油的生物医学应用价值，开展与需求院所和机构的深度合作，
            回应需求指标，目的为开发出成型稳定的医、农用放电等离子体实用设备，比如杀菌灭毒等离子体活化水、等离子体农作物保鲜仪、
            医用抗氧化抗癌活化磷虾油等。团队的长远科研路线特色是以扎实的放电等离子体基础理论研究为发展主阵地，
            将细致的模拟计算结合精准的实验技术转化为核心竞争点，立足于国际低温放电等离子体基础研究行业；
            积极拓展更多领域的交叉学科融合，以工业需求为导向，发展出适配生物医学、环境、
            材料和能源等学科的高效放电等离子应实用技术。
            团队发表SCI论文70余篇，封面文章一篇，授权发明专利与软件著作权30余项。
            承担国家自然科学基金等国家级项、省部级项目10余项。获得省优秀博士论文、省优秀硕士论文多篇。
            在“大气压等离子体活性粒子的产生极其与生物组织相互作用的理论研究”方面已经初步完成一系列创新性的研究成果。
          </div>
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
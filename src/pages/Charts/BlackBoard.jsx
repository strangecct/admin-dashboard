import React, { useEffect } from 'react'
import { BlackClass } from './BlackComponents'
import { Header } from "../../components";

const BlackBoard = () => {
  useEffect(() => {
    const instance = new BlackClass()
    instance.setBgColor('#a29bfe') //先执行了这句话，再触发的cilck，所以可以直接改颜色
    return () => {

    }
  }, [])

  return (
    <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="blackboard" title="绘画黑板" />
      <canvas id="canvas"></canvas>
    </div>
    //<div></div>
  )
}

export default BlackBoard
import React, { useEffect, useRef, useState } from 'react'
import { Header } from "../components";
import Project from '../components/Project';
import ProjectBlank from '../components/ProjectBlank';

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setTimeout(() => {
      const mock = new Array(200).fill('').map((str, i) => {
        return {
          content: '电力设备状态检测 ' + i,
        }
      })
      setProjects(mock)
    }, 500)
  }, [])
  const dom = useRef(null)
  const scrollTop = useRef(0)
  const handleScroll = () => {
    scrollTop.current = dom.current.scrollTop
    console.log('scroll', scrollTop.current)
    //计算需要渲染的范围
    setNeedRender((scrollTop.current / 100 | 0) - 2)
    console.log(needRender)
  }
  const [needRender, setNeedRender] = useState(0)
  return (
    <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="projects" title="项目列表" />
      <div
        className='h-screen'
        style={{ overflow: "scroll" }}
        onScroll={handleScroll}
        ref={dom}
      >
        {
          projects.map((item, ind) =>
            (ind >= needRender && ind <= needRender + 7)
              ? <Project {...item} key={ind} /> : <ProjectBlank />
          )
        }
      </div>
    </div>
  )
}

export default Projects
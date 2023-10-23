import React, { useEffect, useRef, useState } from 'react'
import { BsXLg } from 'react-icons/bs';

const Project = ({ content }) => {
  const getColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const { width, height } = { width: 400, height: 100 }
    return [r, g, b]
  }
  const [color, setBgColor] = useState([255, 255, 255])
  useEffect(() => {
    let c = getColor();
    //console.log(c)
    setTimeout(() => {
      setBgColor(c)
    }, 500)
  }, [])
  const handleClick = (e) => {
    offsetTop.current = e.target.offsetTop
    console.log(offsetTop.current)
  }
  const offsetTop = useRef(null)

  return (
    <div style={{ backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}
      className='m-2 h-24 w-400 text-xl flex items-center font-semibold justify-center'
      onClick={handleClick}
    >
      {content}

    </div>
  )
}

export default Project
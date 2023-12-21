import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Header } from "../../components";
import { Button, ColorPicker } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const BlackBoard = () => {
  const width = 800
  const height = 500
  const canvas = useRef()
  const canvasApp = useRef();
  const [bgColor, setBgColor] = useState('#999')
  const [lineColor, setLineColor] = useState('#000')
  const colors = ['#1B9CFC', '#FD7272', '#D6A2E8', '#55E6C1', '#6D214F', '#fff']


  const handleMouseDown = (e) => {
    canvasApp.current.strokeStyle = lineColor
    canvasApp.current.beginPath()
    console.log('Down', canvasApp, canvasApp.current.beginPath, lineColor)

    canvas.current.addEventListener('mousemove', handleMouseMove)
    canvas.current.addEventListener('mouseup', (e) => {
      canvas.current.removeEventListener('mousemove', handleMouseMove)
    })
  }
  const handleMouseMove = (e) => {
    canvasApp.current.lineTo(e.offsetX, e.offsetY)
    canvasApp.current.stroke()
  }

  const handleErase = () => {
    setLineColor(bgColor)
    canvasApp.current.lineWidth = 20;
  }

  const handleClear = () => {
    canvasApp.current.fillRect(0, 0, width, height)
  }

  const [open, setOpen] = useState(false);

  // 初始化操作
  useEffect(() => {
    canvasApp.current = canvas.current.getContext('2d')
    canvasApp.current.fillStyle = bgColor
    canvasApp.current.fillRect(0, 0, width, height)
    canvasApp.current.lineWidth = 5;
    console.log(canvas)
  }, [])

  return (
    <div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="工具" title="绘板" />
      <canvas
        id="canvas"
        width={width}
        height={height}
        ref={canvas}
        onMouseDown={handleMouseDown}
      />
      <div className='flex justify-center items-center mt-3'>
        <Button onClick={handleErase}>erase</Button>
        <Button onClick={handleClear}>clear</Button>
        {
          colors.map(color =>
            <div
              style={{ background: color }}
              className='border-1 border-color: rgb(100 116 139) w-10 h-7 ml-2 rounded-md'
              onClick={() => {
                setLineColor(color)
                canvasApp.current.lineWidth = 5;

              }}
            > </div>
          )
        }
        {/* <div
          onClick={() => { }}
          className='border-1 border-color: rgb(100 116 139) rounded-md mx-3 px-2 py-1'>
          more
        </div> */}
        <ColorPicker
          className='mx-3 '
          open={open}
          onOpenChange={setOpen}
          showText={() => (
            <DownOutlined
              rotate={open ? 180 : 0}
              style={{
                color: 'rgba(0, 0, 0, 0.25)',
              }}
            />
          )}
        />
      </div>
      <Button>save</Button>

    </div>
  )
}

export default BlackBoard
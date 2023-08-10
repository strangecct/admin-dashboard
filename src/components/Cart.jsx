import React, { useEffect } from 'react'


const Cart = () => {
     
    //   const height = 500,
    //   width = 800,
    //   el = document.querySelector('#canvas'),
    //   app = el.getContext('2d'),
    //   btns = document.createElement('div'), //放按钮的容器
    //   bgColor = '#000',
    //   lineColor = '#fff'

    //   useEffect(() => {
    //     initCanvas()
    // }, )

    //   const initCanvas = () => {
    //         el.width = width
    //         el.height = height
    //         app.fillStyle = lineColor
    //         app.fillRect(0, 0, width, height)
    //         el.insertAdjacentElement('afterend', btns)
    //         btns.classList.add('flex-button')
    //         app.lineWidth = 2;
    //   }

    //   this.bindEvent = function() {
    //         const callback = this.drawLine.bind(this)
    //         this.el.addEventListener('mousedown', () => {
    //         this.app.beginPath()
    //         this.app.strokeStyle = this.lineColor //白色线
    //         // this.app.moveTo(e.pageX, e.pageY)
    //         this.el.addEventListener('mousemove', callback)
    //         document.addEventListener('mouseup', () => {
    //             this.el.removeEventListener('mousemove', callback)
    //         })//如果把事件取消绑定到el上，在外部松开的话，就不能取消事件了，用冒泡接受
    //         })
    //   }
  
    //   this.clear() = function() {
            
    //   }
    //   drawLine(event: MouseEvent) {
    //     this.app.lineTo(event.offsetX, event.offsetY)
    //     this.app.stroke()
    // }
    //   this.erase()
    //   this.setLineColor()
    //   this.save()
    
    return (
        <div id="appBG">
    <canvas id="canvas"></canvas>
  </div>
    )
}

export default Cart
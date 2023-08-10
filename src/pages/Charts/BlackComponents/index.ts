

export class BlackClass {
  // 写上public之后会变成属性，不写的话就只是个形参
  constructor(
    public height: number = 500,
    public width: number = 800,
    public el: HTMLCanvasElement = document.querySelector('#canvas')!,
    private app = el.getContext('2d')!,
    private btns: HTMLDivElement = document.createElement('div'), //放按钮的容器
    private bgColor: string = '#000',
    private lineColor: string = '#fff'
  ) {
    this.initCanvas()
    this.bindEvent()

    this.clear()
    this.erase()
    this.setLineColor()
    this.save()

  }

  // 初始画布
  private initCanvas() {
    this.el.width = this.width
    this.el.height = this.height
    this.app.fillStyle = this.lineColor
    this.app.fillRect(0, 0, this.width, this.height)
    this.el.insertAdjacentElement('afterend', this.btns)
    this.btns.classList.add('flex-button')
    this.app.lineWidth = 2;
  }
  private bindEvent() {
    const callback = this.drawLine.bind(this)
    this.el.addEventListener('mousedown', () => {
      this.app.beginPath()
      this.app.strokeStyle = this.lineColor //白色线
      // this.app.moveTo(e.pageX, e.pageY)
      this.el.addEventListener('mousemove', callback)
      document.addEventListener('mouseup', () => {
        this.el.removeEventListener('mousemove', callback)
      })//如果把事件取消绑定到el上，在外部松开的话，就不能取消事件了，用冒泡接受
    })
  }
  private drawLine(event: MouseEvent) {
    this.app.lineTo(event.offsetX, event.offsetY)
    this.app.stroke()
  }

  public clear() {
    const era = document.createElement('button')
    era.innerText = 'clear'
    this.btns.insertAdjacentElement('afterbegin', era)
    era.addEventListener('click', () => {
      this.setBgColor(this.bgColor)
    })
    return this
  }

  public setBgColor(newColor: string) {
    this.bgColor = newColor
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.el.width, this.el.height)
    return this
  }

  public setLineColor() {
    const colors = ['#1B9CFC', '#FD7272', '#D6A2E8', '#55E6C1', '#6D214F', '#fff']
    const container = document.createElement('div')
    container.classList.add('line-color')
    colors.forEach(item => {
      const colorDiv = document.createElement('div')
      colorDiv.style.cssText = `width:20px;height:20px;background-color:${item}`
      colorDiv.addEventListener('click', () => {
        this.lineColor = item
        this.app.lineWidth = 2;
      })
      container.insertAdjacentElement('afterbegin', colorDiv);
    })
    this.btns.insertAdjacentElement('beforeend', container)

  }

  public erase() {
    const cel = document.createElement('button')
    cel.innerText = 'erase'
    this.btns.insertAdjacentElement('afterbegin', cel)
    cel.addEventListener('click', () => {
      this.lineColor = this.bgColor;
      this.app.lineWidth = 28;
    })
    return this
  }

  public save() {
    const save = document.createElement('button')
    save.innerText = 'save'
    this.btns.insertAdjacentElement('beforeend', save)
    const img = document.createElement('img')!
    save.addEventListener('click', () => {
      img.src = this.el.toDataURL('image/jpeg')
      img.classList.add('img-cut')
    })
    this.btns.insertAdjacentElement('afterend', img)
    return this
  }

}






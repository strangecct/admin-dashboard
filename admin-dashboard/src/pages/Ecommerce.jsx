import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'


const Ecommerce = () => {
    return (
        <div className='mt-12 '>
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
                                bgColor='blue'
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

            {/* 第二行图表 */}
            <div className='flex gap-10 flex-wrap justify-center'>
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                    {/* 标题栏 */}
                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Revenue Update</p>
                        <div className='flex items-center gap-4'>
                            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span>Expense</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    {/* 图表 */}
                    <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                        {/* 左侧折线图 */}
                        <div className='border-r-1 border-color m-4 pr-10'>
                            <div>
                                <p>
                                    <span className='text-3xl font-semibold'>14:39</span>
                                    <span className=' p-1.5 hover:drop-shadow-lg cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>32%</span>
                                </p>
                                <p className='text-gray-500 text-xl'>Budget</p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='text-3xl font-semibold'>16:00</span>
                                </p>
                                <p className='text-gray-500 text-xl'>Expense</p>
                            </div>
                            <div className='mt-5'>
                                <SparkLine
                                    currentColor='blue'
                                    id='line-sparkline'
                                    type='Line'
                                    height='80px'
                                    width='200px'
                                    data={SparklineAreaData}
                                    color='blue'
                                // 这个地方用函数式组件会报错，
                                // 原因可能是这个组件不允许输入的变动，在响应式动作中导致报错，所以只能继承pureComponent
                                // 也就是不允许二次渲染，可能与data没写死有关
                                />
                            </div>
                            <div className='mt-10'>
                                <Button
                                    color='white'
                                    bgColor='blue'
                                    text='Download Report'
                                    borderRadius='10px'
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default Ecommerce
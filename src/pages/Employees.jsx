import React from 'react'
import {
    GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Search, Toolbar
} from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white round-3xl'>
            <Header category='Page' title='Employees' />
            <p className='text-2xl font-semibold mt-2 mb-4 text-gray-300'>render with grid component of syncfusion</p>
            <GridComponent
                dataSource={employeesData}
                allowPaging
                toolbar={['Search']}
                width='auto'
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Employees
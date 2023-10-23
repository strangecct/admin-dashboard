import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {

  const selectionSettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <p className='text-2xl font-semibold mt-2 mb-4 text-gray-300'>render with grid component of syncfusion</p>
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={toolbarOptions}
        selectionSettings={selectionSettings}
        editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;

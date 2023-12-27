import { Header } from '../../components'
import { ProTable, } from '@ant-design/pro-components';
import { Link } from 'react-router-dom';
import { UploadOutlined, DownloadOutlined, CloudUploadOutlined } from '@ant-design/icons'
import React, { useRef, useState } from 'react';
import moment from 'moment';
// import { errorEnumMap, gptRequest } from './services';
// import './index.less';
import { Button, } from 'antd';
import { useColumns } from '../../components/useColumns';
import UploadForm from './uploadForm';

const Upload = () => {
  const actionRef = useRef();
  const [formValues, setFormValues] = useState({});

  const [drawerVisit, setDrawerVisit] = useState(false);
  const { columns } = useColumns();

  const onCreate = () => { }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='工具' title='数据上传' />
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        options={false}
        params={formValues} //传递额外参数
        toolBarRender={
          () => [
            <Button key="create" type='primary' disabled icon={<UploadOutlined />} onClick={onCreate}>本地创建</Button>,
            <Button key="upload" type='primary' icon={<CloudUploadOutlined />}
              onClick={() => {
                setDrawerVisit(true);
              }}>数据上传</Button>,
            <Button key="download" icon={<DownloadOutlined />} >全部下载</Button>,
          ]
        }
        // request={async (params) => {
        //   // console.log('origin params', params);
        //   return gptRequest({ ...params });
        // }}
        // expandable={{
        //   // 这里是否需要单独发送请求？一次完全展示
        //   expandedRowRender: (record) => <div className='expand-box'>
        //     <div className='left-side'>
        //       <h3>Error :</h3>
        //       <div className='left-initial-err' style={{ whiteSpace: 'pre-line' }}>
        //         {record.origin_content}
        //       </div>
        //     </div>
        //     <div className='right-side'>
        //       <div className='user-box'>
        //         <div className='user-text'>
        //           {record.gpt_prompt}
        //         </div>
        //         <div className='user-icon'>
        //           <UserOutlined />
        //         </div>
        //       </div>
        //       <div className='gpt-box'>
        //         <h3>GPT</h3>
        //         <div className='gpt-text'>{record.gpt_content}</div>
        //       </div>
        //     </div>
        //   </div>,
        //   rowExpandable: () => true,
        // }}
        rowKey="id"
        search={false}
        form={{
          colon: false,
          span: 8, // 每个表单项占用的栅格数,可以在search中设置
          syncToUrl: (values, type) => {
            if (type === 'get') {
              if (values.startTime && values.endTime) {
                return {
                  ...values,
                  created_at: [values.startTime, values.endTime],
                };
              }
              return { ...values };
            }
            return values;
          },
          onValuesChange: (_, values) => {
            setFormValues(values);
          },
        }}
        pagination={{ pageSize: 10 }}
        dateFormatter="string"
      />
      <UploadForm drawerVisit={drawerVisit} setDrawerVisit={setDrawerVisit} />
    </div >
  )
}

export default Upload
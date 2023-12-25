import { Header } from '../../components'
import { ProTable } from '@ant-design/pro-components';
import { Link } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons'
import React, { useRef, useState } from 'react';
import moment from 'moment';
// import { errorEnumMap, gptRequest } from './services';
// import './index.less';
import { Button } from 'antd';

const Upload = () => {
  const actionRef = useRef();
  const [formValues, setFormValues] = useState({});
  const columns = [
    {
      title: '设备类型',
      key: 'operator',
      dataIndex: 'operator',
      fieldProps: {
        className: 'inputNoBorder',
        placeholder: '',
      },
    },
    {
      title: 'Time',
      key: 'create_time',
      dataIndex: 'create_time',
      valueType: 'dateTime',
      ellipsis: true,
    },
    {
      title: '测量装置',
      key: 'vehicle_name',
      dataIndex: 'vehicle_name',
      fieldProps: {
        className: 'inputNoBorder',
        placeholder: '',
      },
      render: (text, record) => {
        return <Link to={`/baidu`}>{text}</Link>;
      },
    },
    {
      title: '测试/上传人员',
      key: 'package_name',
      dataIndex: 'package_name',
      fieldProps: {
        className: 'inputNoBorder',
        placeholder: '',
      },
      render: (text, record) => {
        return <Link to={`/rmp/package/${record.package_id}`}>{text}</Link>;
      },
    },
    {
      title: '测试时间',
      key: 'create_time',
      dataIndex: 'create_time',
      valueType: 'dateRange',
      fieldProps: {
        className: 'inputNoBorder',
        placeholder: ['Start Date', 'End Date'],
        ranges: {
          Today: [moment(), moment()],
          'This Week': [moment().startOf('week'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
        },
      },
      search: {
        transform: (value) => {
          if (!value) {
            return {};
          }
          let startTime, endTime;
          if (moment.isMoment(value[0])) {
            startTime = value[0].format('YYYY-MM-DD HH:mm:ss');
          } else {
            startTime = moment(value[0]).format('YYYY-MM-DD HH:mm:ss');
          }

          if (moment.isMoment(value[1])) {
            endTime = value[1].format('YYYY-MM-DD HH:mm:ss');
          } else {
            endTime = moment(value[1]).format('YYYY-MM-DD HH:mm:ss');
          }
          // console.log(startTime, endTime);
          return {
            start: startTime,
            end: endTime,
          };
        },
      },
    },
    {
      title: '故障状态',
      key: 'error_type',
      dataIndex: 'err_type',
      valueType: 'select',
      // valueEnum: errorEnumMap,
      fieldProps: {
        className: 'inputNoBorder',
        placeholder: '',
      },
      render: (text) => {
        return <div style={{ color: 'red' }}>{text}</div>;
      },
      width: 200,
    },
  ];
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
            <Button key="upload" type='primary' icon={<UploadOutlined />} >上传数据</Button>
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
          // span: 8, // 每个表单项占用的栅格数,可以在search中设置
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
    </div>
  )
}

export default Upload
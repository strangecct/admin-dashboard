import React, { useMemo } from 'react'

import moment from 'moment';
import { Link } from 'react-router-dom';

export const useColumns = () => {
  const columns = useMemo(
    () => [
      {
        title: '设备类型',
        key: 'operator',
        dataIndex: 'operator',
        // fieldProps: {
        //   className: 'inputNoBorder',
        //   placeholder: '',
        // },
        valueType: 'select',
        valueEnum: {
          1: { text: '断路器', value: 'breaker' },
          2: { text: '变压器', value: 'transformer' }
        }
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
    ], []
  )
  return { columns };
}

import {
  ProForm,
  DrawerForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  ProFormUploadButton
} from '@ant-design/pro-components';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
// import { errorEnumMap, gptRequest } from './services';
// import './index.less';
import { Button, Form, message } from 'antd';


const UploadForm = ({ drawerVisit, setDrawerVisit }) => {
  useEffect(() => {
    console.log('upload form', drawerVisit)
  })
  const waitTime = (time = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

  const [form] = Form.useForm();

  return (
    <>
      <DrawerForm
        onOpenChange={setDrawerVisit}
        title="数据上传"
        open={drawerVisit}
        resize={{
          onResize() {
            console.log('resize!');
          },
          maxWidth: window.innerWidth * 0.8,
          minWidth: 500,
        }}
        form={form}
        autoFocusFirstInput
        drawerProps={{
          destroyOnClose: true,
        }}
        submitTimeout={2000}
        onFinish={async (values) => {
          console.log('发起异步请求', values)
          await waitTime(2000);
          message.success('提交成功');
          // 不返回不会关闭弹框
          return true;
        }}
      >
        <ProFormText
          name="project"
          disabled
          label="项目名称"
          initialValue="xxxx项目"
        />

        <ProForm.Group>
          <ProFormSelect
            width="s"
            name="useMode"
            label="测量对象"
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
            required={true}
            // 两种写法都可以
            options={[
              { value: 'breaker', label: '断路器', },
              { value: 'transformer', label: '变压器' },
              { value: 'isolater', label: '隔离开关' },
              { value: 'gis', laber: 'GIS' }
            ]}
          />
          <ProFormSelect
            width="xs"
            options={["35kV", '72.5kV', "110kV",]}
            formItemProps={{
              style: {
                margin: 0,
              },
            }}
            name="level"
            label="电压等级"
            required={true}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            name="information"
            width="md"
            label="设备类别"
            tooltip="比如真空、SF6"
            placeholder="请输入"
          />
          <ProFormSelect
            rules={[
              {
                required: true,
              },
            ]}
            width="s"
            name="company"
            label="数据类别"
            placeholder="请选择"
            options={[
              { value: 'vibration', label: '振动信号' },
              { value: 'sound', label: '声音信号' },
              { value: 'hot', label: '热信号' },
            ]}
          />
          <ProFormText
            name="sensorType"
            width="s"
            label="传感器型号"
            placeholder="请输入"
          />
          <ProFormText
            name="state"
            width="md"
            label="设备状态"
            tooltip="比如正常、螺丝松动"
            placeholder="请输入"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width="s"
            name="experimenter"
            label="测量员"
            placeholder="请输入"
          />
          <ProFormDateRangePicker name="date" label="实验时间" />
        </ProForm.Group>
        <ProFormUploadButton
          extra="支持文件类型：.jpg .zip .doc .xlsx"
          label="实验数据"
          name="file"
          title="上传文件"
          tooltip="当前仅支持逐个上传"
          required={true}
        />
      </DrawerForm>
    </>
  );
};
export default UploadForm;
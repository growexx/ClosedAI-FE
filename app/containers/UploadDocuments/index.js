/**
 *
 * Profile
 *
 */

import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Card } from 'antd';
// import ImageUpload from 'components/ImageUpload/Loadable';
// import { StyledProfile } from './StyledProfile';
// import ProfileForm from './ProfileForm';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, message, Select, Space, Table, Upload } from 'antd';
import { StyledUploadWrapper } from './styledUploadDocument';
const { Option } = Select;
import { Link } from 'react-router-dom';
const { Dragger } = Upload;

export function UploadDocuments() {
  const [fileList, setFileList] = useState([]);

  const customRequest = ({ file, onSuccess }) => {
    // Simulate file upload using a customRequest function
    // In this example, we always call onSuccess to simulate a successful upload
    setTimeout(() => {
      onSuccess();
    }, 1000); // Simulate a 1-second upload process
  };

  const columns = [
    {
      title: 'File Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'File Size (MB)',
      dataIndex: 'size',
      key: 'size',
      render: (text, record) => (record.size / 1024 / 1024).toFixed(2),
    },
    {
      title: 'Select Option',
      key: 'select',
      render: (text, record) => (
        <Select defaultValue="option1" style={{ width: 120 }}>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <DeleteOutlined onClick={() => console.log('hey')} />
        </Space>
      ),
      width: '5%',
    },
  ];

  const props = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    customRequest: { customRequest },
    fileList,
    onChange(info) {
      console.log(info, 'hereee');
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      setFileList(info.fileList);
      console.log(info.fileList, 'final filelist');
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <StyledUploadWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="log">
          <div
            className="svg-icon"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="49"
              viewBox="0 0 55 49"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.2547 3.5L51.6374 44C52.0223 44.6667 51.5411 45.5 50.7713 45.5H4.00596C3.23617 45.5 2.75504 44.6667 3.13994 44L26.5226 3.5C26.9075 2.83334 27.8698 2.83333 28.2547 3.5ZM23.9246 2C25.4642 -0.666668 29.3132 -0.666665 30.8528 2L54.2354 42.5C55.775 45.1667 53.8505 48.5 50.7713 48.5H4.00596C0.926763 48.5 -0.997734 45.1667 0.541866 42.5L23.9246 2Z"
                fill="url(#paint0_linear_14_56)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_14_56"
                  x1="13.0101"
                  y1="10.6238"
                  x2="66.9577"
                  y2="33.6284"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#24DBDB" />
                  <stop offset="1" stopColor="#3CF08F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div
            className="heading"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Closed AI
          </div>
        </div>
        <div style={{ maxWidth: '550px', textAlign: 'center' }}>
          <p>Convert requirements to MindMap</p>
          <p>
            An innovative platform which helps users with the converting
            requirements for a product or a business and convert them to
            actionable output
          </p>
        </div>
        <div
          className="multi-upload-dragger"
          style={{ width: '700px', height: '220px' }}
        >
          <Dragger
            {...props}
            style={{
              backgroundColor: 'black',
              borderRradius: '25px',
              border: '2px dashed #3AD0CE',
              background: 'rgba(255, 255, 255, 0.04)',
              borderRadius: '25px',
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text drag-drop" style={{ color: 'white' }}>
              Drag and Drop or click to upload your files, click generate and
              see the magic happen
            </p>
            <p className="ant-upload-hint" style={{ color: 'white' }}>
              5 files max (Video, Audio, and PDFs only)
            </p>
          </Dragger>

          <div
            className="add-url-div"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '36px',
            }}
          >
            <Button
              to="#"
              className="url-button"
              style={{
                textAlign: 'center',
                marginTop: '31px',
                backgroundColor: '#090B13',
                border: 'none',
                color: 'white',
              }}
              onClick={() => {
                console.log(fileList, 'hello');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 17H7C5.61667 17 4.43733 16.5123 3.462 15.537C2.48667 14.5617 1.99933 13.3827 2 12C2 10.6167 2.48767 9.43733 3.463 8.462C4.43833 7.48667 5.61733 6.99933 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5627 7.48767 20.538 8.463C21.5133 9.43833 22.0007 10.6173 22 12C22 13.3833 21.5123 14.5627 20.537 15.538C19.5617 16.5133 18.3827 17.0007 17 17H13Z"
                  fill="#26DDD2"
                />
              </svg>
              <span
                style={{
                  marginLeft: '5px',
                  fontSize: '16px',
                }}
              >
                Have web pages you want us to scrape?
              </span>
            </Button>
          </div>
          <div>
            {fileList.length > 0 && (
              <Table
                style={{ backgroundColor: 'black' }}
                columns={columns}
                dataSource={fileList}
                pagination={false}
                showHeader={false}
              />
            )}
          </div>
        </div>
      </div>
    </StyledUploadWrapper>
  );
}

export default UploadDocuments;

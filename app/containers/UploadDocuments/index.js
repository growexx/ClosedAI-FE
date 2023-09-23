import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InboxOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Alert,
  Button,
  Form,
  Input,
  message,
  Modal,
  notification,
  Select,
  Space,
  Table,
  Tabs,
  Tooltip,
  Upload,
} from 'antd';
import axios from 'axios';
import { StyledUploadWrapper, AlertWrapper } from './styledUploadDocument';
import MindMap from '../../components/MindMap/index';
import UserStories from '../../components/UserStories/index';
import {
  initialNodes,
  initialEdges,
} from '../../components/MindMap/nodes-edges';
import { Stories } from '../../components/UserStories/sampleStories';
const { Option } = Select;
const { Dragger } = Upload;

export function UploadDocuments() {
  const [fileList, setFileList] = useState([]);
  const [urlList, setUrlList] = useState([]);
  const [urlIdCounter, setUrlIdCounter] = useState(1);
  const [fileTypeList, setFileTypeList] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('Uploading your files...');
  const [alertBg, setAlertBg] = useState('#25DCD8');
  const [uniqueId, setUniqueId] = useState(uuidv4().split('-')[0]);
  const [startOverModal, setStartOverModal] = useState(false);
  const [mindmapNodes, setMindmapNodes] = useState([]);
  const [mindmapEdges, setMindmapEdges] = useState([]);
  let limitFlag = false;

  const optionsArray = [
    {
      label: 'Product Vision',
      value: 'productVision',
    },
    {
      label: 'Competitor Data',
      value: 'competitorData',
    },
    {
      label: 'Call Recording',
      value: 'callRecording',
    },
    {
      label: 'Technical Document',
      value: 'technicalDocument',
    },
    {
      label: 'Feature List',
      value: 'featureList',
    },
  ];

  const handleDeleteRow = (rowKey, isFileList, fileName) => {
    if (isFileList) {
      const updatedFileList = fileList.filter(item => item.uid !== rowKey);
      setFileList(updatedFileList);
      const updatedFileTypeList = { ...fileTypeList };
      delete updatedFileTypeList[fileName];
      setFileTypeList(updatedFileTypeList);
    } else {
      const updatedUrlList = urlList.filter(item => item.urlId !== rowKey);
      setUrlList(updatedUrlList);
    }
  };

  const handleSelectChange = (value, record, isFile) => {
    if (isFile) {
      const updatedFileTypeList = { ...fileTypeList };
      updatedFileTypeList[record.name] = value;
      setFileTypeList(updatedFileTypeList);
    } else {
      const updatedUrlList = [...urlList];
      const index = urlList.findIndex(url => url.urlId === record.urlId);
      if (index !== -1) {
        updatedUrlList[index].documentType = value;
        setUrlList(updatedUrlList);
      }
    }
  };

  const updatedFileTypeList = { ...fileTypeList };
  const handleSubmit = () => {
    setLoading(true);
    fileList.forEach(file => {
      if (!Object.keys(fileTypeList).includes(file.name)) {
        updatedFileTypeList[file.name] = 'none';
        setFileTypeList(updatedFileTypeList);
      }
    });
    const websiteInfo = [];
    for (let index = 0; index < urlList.length; index += 1) {
      if (urlList[index].urlLink.trim() === '') {
        notification.error({
          message: 'Please enter a Url in the Input',
        });
        setLoading(false);
        return;
      }

      websiteInfo.push({
        site: urlList[index].urlLink.trim(),
        type: urlList[index].documentType,
      });
    }

    const data = new FormData();
    fileList.forEach(file => {
      data.append(`files`, file.originFileObj);
    });
    data.append('message', 'hello123');
    data.append('websiteInfo', JSON.stringify(websiteInfo));
    data.append('fileInfo', JSON.stringify(updatedFileTypeList));
    data.append('userId', uniqueId);

    const requestUrl =
      'https://node-mindmap-codeathon.onrender.com/summary/upload-data';
    axios
      .post(requestUrl, data, {})
      .then(res => {
        if (res.data.status === 1) {
          // notification.success({
          //   message:
          //     'Your files have been uploaded succesfully. Please wait untill we process the data and prepare the output ',
          // });
          setAlertMessage(
            'Your files have been successfully uploaded. Please wait untill we analyze the data and prepare the result',
          );
        } else {
          setAlertBg('red');
          setAlertMessage('Something went wrong. Please try again');
          // notification.error({
          //   message: res.data.message,
          // });
        }
      })
      .catch(err => {
        setAlertBg('red');
        setAlertMessage('Something went wrong. Please try again');
        // notification.error({
        //   message: err.message,
        // });
      });
  };

  const columns = [
    {
      title: 'File Name',
      dataIndex: 'name',
      key: 'name',
      width: '42%',
      align: 'left',
      render: text => (
        <div
          style={{
            width: '200px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'noWrap',
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: 'File Size (MB)',
      dataIndex: 'size',
      key: 'size',
      render: (text, record) => (
        <>{(record.size / 1024 / 1024).toFixed(2)} MB</>
      ),
      width: '25%',
      align: 'center',
    },
    {
      title: 'Select Option',
      key: 'select',
      render: (text, record) => (
        <Select
          placeholder="Select the type of document"
          style={{ width: 250 }}
          dropdownStyle={{ backgroundColor: '#090B13', color: 'white' }}
          onChange={value => handleSelectChange(value, record, true)}
          disabled={loading}
        >
          {optionsArray.map(option => (
            <Option
              key={option.value}
              value={option.value}
              style={{ color: 'white' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#090B13';
              }}
            >
              {option.label}
            </Option>
          ))}
        </Select>
      ),
      width: '25%',
      align: 'center',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteRow(record.uid, true, record.name)}
            disabled={loading}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
            }}
          />
        </Space>
      ),
      width: '10%',
      align: 'center',
    },
  ];

  const columns1 = [
    {
      title: 'Url-Link',
      dataIndex: 'urlLink',
      key: 'name',
      render: (text, record) => (
        <Form.Item>
          <Input
            style={{
              width: '300px',
              backgroundColor: '#090B13',
              color: 'white',
            }}
            placeholder="Add your URL here"
            value={urlList.find(x => x.urlId === record.urlId).urlLink}
            onChange={e => {
              const updatedUrlList = [...urlList];
              const index = updatedUrlList.findIndex(
                x => x.urlId === record.urlId,
              );
              if (index !== -1) {
                updatedUrlList[index].urlLink = e.target.value;
                setUrlList(updatedUrlList);
              }
            }}
            disabled={loading}
          />
        </Form.Item>
      ),
      width: '25%',
      align: 'left',
    },
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'size',
      width: '25%',
      align: 'center',
    },
    {
      title: 'Select Option',
      key: 'select',
      render: (text, record) => (
        <Select
          placeholder="Select the type of document"
          style={{ width: 250 }}
          dropdownStyle={{ backgroundColor: '#090B13', color: 'white' }}
          onChange={value => handleSelectChange(value, record, false)}
          disabled={loading}
        >
          {optionsArray.map(option => (
            <Option
              key={option.value}
              value={option.value}
              style={{ color: 'white' }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#090B13';
              }}
            >
              {option.label}
            </Option>
          ))}
        </Select>
      ),
      width: '25%',
      align: 'center',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteRow(record.urlId, false)}
            disabled={loading}
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: 'none',
            }}
          />
        </Space>
      ),
      width: '10%',
      align: 'center',
    },
  ];

  const props = {
    name: 'file',
    multiple: true,
    showUploadList: false,
    customRequest: () => {
      console.log('hello');
    },
    fileList,
    onChange(info) {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      if (info.fileList.length + urlList.length > 5) {
        if (!limitFlag) {
          limitFlag = true;
          notification.error({
            message: 'Files Limit reached',
            description:
              'At most 5 input resources are allowed including pdfs, audios, videos and websites to scrape.',
            onClose: () => {
              limitFlag = false;
            },
          });
        }
        return;
      }
      setFileList(info.fileList);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    accept: '.pdf,video/*,audio/*',
  };

  const onChange = key => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'MindMap',
      children: (
        <MindMap initialNodes={mindmapNodes} initialEdges={mindmapEdges} />
      ),
    },
    {
      key: '2',
      label: 'User Stories',
      children: <UserStories stories={Stories} />,
    },
    // {
    //   key: '3',
    //   label: 'Action Map',
    //   children: 'Content of Tab Pane 3',
    // },
  ];

  const fetchData = () => {
    // setStartOverModal(true);
    const requestUrl1 = `https://node-mindmap-codeathon.onrender.com/summary/mind-map?userId=${uniqueId}`;
    axios.get(requestUrl1, {}).then(res => {
      if (res.data.status === 1) {
        console.log('heree');
        setMindmapEdges(res.data.data.edges);
        setMindmapNodes(res.data.data.nodes);
      }
      console.log(res, 'Rushilll');
    });
    const requestUrl2 = `https://node-mindmap-codeathon.onrender.com/summary/user-stories?userId=${uniqueId}`;
    axios.get(requestUrl2, {}).then(res => {
      if (res.data.status === 1) {
        // console.log('heree');
        // setMindmapEdges(initialEdges);
        // setMindmapNodes(initialNodes);
      }
      console.log(res, 'Rushilll afterr');
    });
  };

  useEffect(() => {
    const events = new EventSource(
      `https://node-mindmap-codeathon.onrender.com/summary/events?userId=${uniqueId}`,
    );

    events.onmessage = event => {
      // const parsedData = JSON.parse(event.data);
      if (event.data === 'conversion complete') {
        fetchData();
      }
      console.log(event, 'data from events');
    };
  }, []);

  return (
    <>
      <AlertWrapper>
        <Alert
          message={alertMessage}
          type="success"
          style={
            !loading
              ? { display: 'none' }
              : { backgroundColor: alertBg, textAlign: 'center' }
          }
        />
      </AlertWrapper>
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
          <div style={{ maxWidth: '570px', textAlign: 'center' }}>
            <p>Convert requirements to MindMap</p>
            <p>
              An innovative platform which helps users with the converting
              requirements for a product or a business and convert them to
              actionable output
            </p>
          </div>
          <div
            className="multi-upload-dragger"
            style={{ width: '100%', maxWidth: '700px', height: '220px' }}
          >
            <Dragger
              {...props}
              style={{
                backgroundColor: 'black',
                borderRradius: '25px',
                border: '2px dashed rgb(43 225 196)',
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '25px',
              }}
              disabled={loading}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p
                className="ant-upload-text drag-drop"
                style={{ color: 'white' }}
              >
                <ul>
                  <li>Drag and Drop or click to upload your files</li>
                </ul>
              </p>
              <p className="ant-upload-hint">
                5 files max (Video, Audio, and PDFs only)
              </p>
            </Dragger>
          </div>
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
                display: 'flex',
                justifyContent: 'center',
              }}
              onClick={() => {
                if (fileList.length + urlList.length >= 5) {
                  notification.error({
                    message: 'Files Limit reached',
                    description:
                      'At most 5 input resources are allowed including pdfs, audios, videos and websites to scrape.',
                  });
                  return;
                }
                const newUrlList = [...urlList];
                newUrlList.push({
                  urlId: urlIdCounter,
                  urlLink: '',
                  url: 'Url',
                  documentType: 'none',
                });
                setUrlList(newUrlList);
                setUrlIdCounter(urlIdCounter + 1);
              }}
              disabled={loading}
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
                  marginLeft: '10px',
                  fontSize: '16px',
                }}
              >
                Have web pages you want us to scrape?
              </span>
            </Button>
          </div>
          <div className="attachment-container">
            <div style={{ width: '100%', maxWidth: '700px' }}>
              {fileList.length > 0 && (
                <Table
                  style={{ backgroundColor: 'black', maxWidth: '100%' }}
                  columns={columns}
                  dataSource={fileList}
                  pagination={false}
                  showHeader={false}
                />
              )}
            </div>
            <div style={{ width: '100%', maxWidth: '700px' }}>
              {urlList.length > 0 && (
                <Table
                  style={{ backgroundColor: 'black' }}
                  columns={columns1}
                  dataSource={urlList}
                  pagination={false}
                  showHeader={false}
                />
              )}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px',
            }}
          >
            <Tooltip
              title={
                urlList.length + fileList.length === 0
                  ? 'Upload a file or add a URL to generate'
                  : loading
                  ? 'Please wait untill we process your data'
                  : ''
              }
            >
              <Button
                disabled={urlList.length + fileList.length === 0 || loading}
                onClick={handleSubmit}
                className="generate-btn"
                style={{
                  pointerEvents:
                    urlList.length + fileList.length === 0 || loading
                      ? 'none'
                      : 'auto',
                }}
              >
                Generate
              </Button>
            </Tooltip>
          </div>
          {/* <div style={{ height: '1000px', border: '2px solid red' }}>hello</div> */}
          {/* <div style={{ marginTop: '40px' }}>
            <MindMap />
          </div> */}
          <div
            style={{
              margin: '50px 0',
              // width: '100%',
              // maxWidth: '700px',
              // overflowX: 'auto',
            }}
          >
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{ color: 'white', margin: '0 10px' }}
              key={mindmapNodes}
            />
          </div>
        </div>
      </StyledUploadWrapper>
      <Modal
        open={startOverModal}
        centered
        bodyStyle={{
          color: 'white',
          background: 'linear-gradient(71deg, #080509, #1a171c, #080509)',
          border: '2px solid white',
        }}
        footer={null}
      >
        <h2 style={{ color: 'red' }}>
          Oops! Something went wrong. Please try again.
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ backgroundColor: 'green', border: 'none', color: 'white' }}
            onClick={() => {
              setStartOverModal(false);
              window.location.reload();
            }}
          >
            Start Over
          </Button>
        </div>
      </Modal>
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#090B13',
          padding: '10px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <p>Unique User Id: {uniqueId}</p>
      </div>
    </>
  );
}

export default UploadDocuments;

import styled from 'styled-components';

export const AlertWrapper = styled.div`
  .ant-alert-message {
    // color: #044b04;
    color: black;
    font-size: 18px;
  }
  .ant-alert {
    position: fixed; /* Set position to fixed */
    top: 0; /* Stick it to the top of the viewport */
    width: 100%; /* Optionally, make it span the entire width */
    z-index: 9999; /* Optionally, control the z-index to manage stacking order */
  }
`;

export const StyledUploadWrapper = styled.div`
  color: white;
  padding: 10px 40px;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  .heading {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 5px;
    margin-bottom: 70px;
  }

  p:first-child {
    font-size: 100px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;

    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }
  .drag-drop {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .drag-drop ul {
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
    padding: 0;
    font-size: 16px;
  }
  .drag-drop ul li {
    list-style: none;
    position: relative;
    font-size: 20px;
    color: rgba(43, 225, 196, 0.7);
  }
  p.drag-drop {
    color: rgba(48, 231, 177, 0.5) !important;
    font-size: 14px !important;
  }
  .ant-upload.ant-upload-drag p.ant-upload-hint {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
  }
  .ant-upload-drag-icon svg {
    fill: rgba(255, 255, 255, 0.5);
  }
  .url-button:hover {
    background: rgba(0, 0, 0, 0.5) !important;
    border-radius: 25px;
  }
  .attachment-container {
    width: 100%;
    max-width: 700px;
  }
  .attachment-container > div:not(:empty) {
    padding: 5px 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .attachment-container > div input {
    border-color: transparent !important;
    border-radius: 6px;
    box-shadow: none !important;

    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.5) !important;
      box-shadow: none;
    }

    &:active,
    &:focus {
      border-color: rgba(43, 225, 196, 0.2) !important;
      box-shadow: none;
    }
  }
  .ant-upload-list-text-container {
    color: white;
  }
  .ant-upload-list {
    margin-top: 100px;
  }
  .ant-table {
    background-color: #090b13;
    border-bottom: none;
  }
  .ant-table-row {
    color: white;
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }
  .ant-table-cell-row-hover {
    background-color: none !important;
  }
  .ant-table-tbody > tr.ant-table-row-hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: none !important;
  }
  .ant-select-selector {
    border: none !important;
    background: none !important;
    color: white !important;
  }
  .ant-select-arrow {
    color: white !important;
  }
  .ant-table table {
    border-spacing: 0 1px !important;
  }
  .ant-table-tbody > tr > td {
    padding: 4px 4px !important;
  }
  .anticon {
    vertical-align: baseline !important;
  }
  .ant-form-item {
    margin-bottom: 0;
  }
  .generate-btn {
    width: 211px;
    height: 51px;
    border-radius: 25px;
    background: linear-gradient(111deg, #24dbdb 23.24%, #3cf08f 107.74%);
    border: none;
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .ant-btn.generate-btn[disabled],
  .ant-btn.generate-btn[disabled]:hover,
  .ant-btn.generate-btn[disabled]:focus,
  .ant-btn.generate-btn[disabled]:active {
    border-radius: 25px;
    background: linear-gradient(111deg, #24dbdb 23.24%, #3cf08f 107.74%);
    border: none;
    color: #000;
    opacity: 0.5;
  }
  .generate-btn .ant-btn[disabled],
  .generate-btn .ant-btn[disabled]:hover,
  .generate-btn .ant-btn[disabled]:focus,
  .generate-btn .ant-btn[disabled]:active {
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 25px;
    background: linear-gradient(111deg, #24dbdb 23.24%, #3cf08f 107.74%);
    border: none;
    color: #000;
    opacity: 0.5;
  }
  .ant-tooltip-disabled-compatible-wrapper {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    border: none;
  }
  .ant-tabs-tab {
    font-size: 22px;
    margin-bottom: -1px;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    padding-left: 22px;
  }
  .react-flow__panel.right {
    padding: 0;
  }
  .ant-tabs-tab .ant-tabs-tab-active {
    color: green !important;
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #2ae0c8 !important;
  }

  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    width: 100%;
    flex: 1 0 100%;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list .ant-tabs-tab {
    flex: 1;
    text-align: center;
    justify-content: center;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    padding: 0 !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 7px 7px 0 0;
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar {
    background: rgb(42, 224, 200);
  }
  .ant-tabs-nav::before,
  .ant-tabs-nav::after {
    border-color: rgba(255, 255, 255, 0.05) !important;
  }
  .ant-tabs-tab-btn {
    color: rgba(255, 255, 255, 0.5);
  }
  .ant-tabs-tab:hover .ant-tabs-tab-btn {
    color: rgba(42, 224, 200, 0.5);
  }
  .ant-upload.ant-upload-drag,
  .ant-upload-btn {
    transition: 0.2s ease;
  }
  .ant-upload.ant-upload-drag.ant-upload-drag-hover,
  .ant-upload-btn:hover {
    background: rgba(255, 255, 255, 0.1) !important;
  }
  .react-flow__panel.top.right {
    width: 100%;
    padding: 20px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .download-btn {
    margin-left: auto;
  }
`;

import styled from 'styled-components';

export const StyledUploadWrapper = styled.div`
  color: white;
  max-width: 1000px;
  margin: 70px auto;
  .heading {
    color: #fff;
    text-align: center;
    font-family: Nunito;
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
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
  }

  .drag-drop {
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-family: Nunito;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    border-radius: 10px;
    background: #25dcd8;
    color: #000;
    text-align: center;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

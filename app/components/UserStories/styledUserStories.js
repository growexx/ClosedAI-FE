import styled from 'styled-components';

export const StyledUserStoriesWrapper = styled.div`
  .ant-collapse {
    background: transparent !important;
    border: none;
  }
  .ant-collapse-item {
    background: #13151c;
    margin: 20px 0;
    border-bottom: none !important;
    border-radius: 10px !important;
  }
  .ant-collapse-content-box {
    background: #13151c;
  }
  .ant-collapse-header {
    color: white !important;
  }
  .ant-collapse-content {
    color: white;
    border-top: none;
  }
  .custom-panel-header {
    display: flex;
    margin-left: 20px;
  }

  .custom-panel-panel {
    display: flex;
    margin-left: 20px;
  }

  .custom-panel .ant-collapse-expand-icon:first-child {
    display: none;
  }
`;

export const StyledCustomPanelWrapper = styled.div`
  .ant-collapse-expand-icon {
    display: none;
  }
  .ant-collapse-header {
    padding-right: 0 !important;
  }

  .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    display: flex !important;
    align-items: center !important;
  }
`;

/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Button, Collapse } from 'antd';
import CsvDownloadButton from 'react-json-to-csv';
import PropTypes from 'prop-types';
import {
  StyledCustomPanelWrapper,
  StyledUserStoriesWrapper,
} from './styledUserStories';
const { Panel } = Collapse;

const UserStories = ({ stories }) => {
  console.log(stories);
  const data = [];
  stories.forEach((story, index) => {
    data.push({
      key: index,
      label: story.description,
      children: `<p>${story.description}<p>`,
    });
  });
  return (
    <StyledUserStoriesWrapper>
      <StyledCustomPanelWrapper>
        <Collapse accordion={false} expandIconPosition="end" collapsible="icon">
          <Panel
            header={
              <div
                className="custom-panel"
                style={{ marginLeft: '9px', display: 'flex' }}
              >
                <span className="serial-number" style={{ marginRight: '35px' }}>
                  No.
                </span>
                <span className="description" style={{ marginRight: '45px' }}>
                  Story Title
                </span>
              </div>
            }
            extra={
              <Button
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: 'none',
                }}
              >
                <span />
                <span style={{ marginLeft: '5px' }}>
                  {' '}
                  <CsvDownloadButton
                    data={stories}
                    filename="user_stories.csv"
                    style={{
                      cursor: 'pointer',
                      color: '#ffffff',
                      background: 'transparent',
                      border: 'none',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g opacity="0.5">
                        <path
                          d="M15.3332 8.00008L12.6665 5.33341V7.33342H6.6665V8.66675H12.6665V10.6667M0.666504 12.0001V4.00008C0.666504 3.64646 0.80698 3.30732 1.05703 3.05727C1.30708 2.80722 1.64622 2.66675 1.99984 2.66675H9.99984C10.3535 2.66675 10.6926 2.80722 10.9426 3.05727C11.1927 3.30732 11.3332 3.64646 11.3332 4.00008V6.00008H9.99984V4.00008H1.99984V12.0001H9.99984V10.0001H11.3332V12.0001C11.3332 12.3537 11.1927 12.6928 10.9426 12.9429C10.6926 13.1929 10.3535 13.3334 9.99984 13.3334H1.99984C1.64622 13.3334 1.30708 13.1929 1.05703 12.9429C0.80698 12.6928 0.666504 12.3537 0.666504 12.0001Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                    <span style={{ marginLeft: '2px' }}> Export</span>
                  </CsvDownloadButton>
                </span>
              </Button>
            }
          />
        </Collapse>
      </StyledCustomPanelWrapper>
      <Collapse accordion={false} expandIconPosition="end">
        {stories.map((item, index) => (
          <Panel
            header={
              <div className="custom-panel-header">
                <span className="serial-number" style={{ marginRight: '45px' }}>
                  {index + 1}
                </span>
                <span className="description" style={{ marginRight: '45px' }}>
                  {item.description}
                </span>
              </div>
            }
            key={index}
          >
            <div className="custom-panel-header">
              <span style={{ visibility: 'hidden', marginRight: '45px' }}>
                {index + 1}
              </span>
              <span style={{ marginRight: '45px' }}>
                {item.acceptanceCriteria}
              </span>
            </div>
          </Panel>
        ))}
      </Collapse>
    </StyledUserStoriesWrapper>
  );
};

UserStories.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default UserStories;

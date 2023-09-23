import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';
import { StyledUserStoriesWrapper } from './styledUserStories';

const UserStories = ({ stories }) => {
  const [accModal, setAccModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  return (
    <>
      <div
        style={{
          width: '1000px',
          minHeight: '1000px',
        }}
      >
        <StyledUserStoriesWrapper>
          <div className="container">
            <div className="gradient-cards">
              {stories.map(story => (
                <div className="card">
                  <div className="container-card bg-green-box">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <div className="svg-div">
                        <svg
                          width="40px"
                          height="40px"
                          viewBox="0 0 16 16"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginRight: '10px' }}
                        >
                          <title>story</title>
                          <desc>Created with Sketch.</desc>
                          <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                            sketchType="MSPage"
                          >
                            <g id="story" sketchType="MSArtboardGroup">
                              <g
                                id="Story"
                                sketchType="MSLayerGroup"
                                transform="translate(1.000000, 1.000000)"
                              >
                                <rect
                                  id="Rectangle-36"
                                  fill="#63BA3C"
                                  sketchType="MSShapeGroup"
                                  x="0"
                                  y="0"
                                  width="14"
                                  height="14"
                                  rx="2"
                                />
                                <path
                                  d="M9,3 L5,3 C4.448,3 4,3.448 4,4 L4,10.5 C4,10.776 4.224,11 4.5,11 C4.675,11 4.821,10.905 4.91,10.769 L4.914,10.77 L6.84,8.54 C6.92,8.434 7.08,8.434 7.16,8.54 L9.086,10.77 L9.09,10.769 C9.179,10.905 9.325,11 9.5,11 C9.776,11 10,10.776 10,10.5 L10,4 C10,3.448 9.552,3 9,3"
                                  id="Page-1"
                                  fill="#FFFFFF"
                                  sketchType="MSShapeGroup"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="card-title">
                        <div className="card-description">
                          {story.description}
                        </div>
                        <div>
                          <Button
                            className="criteria-btn"
                            onClick={() => {
                              setAccModal(true);
                              setModalContent(story.acceptanceCriteria);
                            }}
                          >
                            View Acceptance Criteria
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Modal
            centered
            open={accModal}
            bodyStyle={{
              color: 'white',
              background: 'linear-gradient(71deg, #080509, #1a171c, #080509)',
              border: '2px solid white',
            }}
            onOk={() => setAccModal(false)}
            onCancel={() => setAccModal(false)}
            footer={null}
            closeIcon={
              <span className="ant-modal-close-x" style={{ color: 'white' }}>
                X
              </span>
            }
          >
            <h2 style={{ marginBottom: '20px', color: 'white' }}>
              Acceptance Criteria:
            </h2>
            <p>{modalContent}</p>
          </Modal>
        </StyledUserStoriesWrapper>
      </div>
    </>
  );
};

UserStories.propTypes = {
  stories: PropTypes.array.isRequired,
};

export default UserStories;

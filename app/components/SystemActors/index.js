/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Collapse, Spin } from 'antd';
import PropTypes from 'prop-types';
import {
  StyledCustomPanelWrapper,
  StyledUserStoriesWrapper,
} from './StyledSystemActor';

const SystemActors = ({ stories, loading, error }) => {
  return !loading ? (
    !error ? (
      <StyledUserStoriesWrapper>
        <StyledCustomPanelWrapper />
        <Collapse accordion={false} expandIconPosition="end">
          {stories.map(item => (
            <div className="c-panel">
              <div className="custom-panel-header">
                {/* <span
                  style={{
                    color: 'white',
                    width: '75px',
                  }}
                >
                  {index + 1}
                </span> */}
                <span
                  className="story-description"
                  style={{ marginRight: '45px' }}
                >
                  {typeof item === 'string' ? item : Object.keys(item)[0]}
                </span>
              </div>
            </div>
          ))}
        </Collapse>
      </StyledUserStoriesWrapper>
    ) : (
      <p>Something went wrong</p>
    )
  ) : (
    <Spin
      style={{
        marginTop: '300px',
        marginLeft: '480px',
        fontSize: '50px',
        color: '#13151c',
      }}
      size="large"
    />
  );
};

SystemActors.propTypes = {
  stories: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default SystemActors;

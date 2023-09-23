import styled from 'styled-components';

export const StyledUserStoriesWrapper = styled.div`
  .container {
    width: 100% !important;
    height: 100% !important
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 992px) and (max-width: 1439px) {
      max-width: 1279px !important;
      padding: 0 !important;
      margin: 0 80px !important;
      width: auto !important;
    }

    @media screen and (max-width: 991px) {
      max-width: 959px !important;
      margin: 0 16px !important;
      padding: 0 !important;
      width: auto !important;
    }
  }

  .gradient-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
    padding: 30px;
    @media screen and (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  .container-title {
    text-align: center;
    padding: 0 !important;
    margin-bottom: 40px;
    margin-top: 30px !important;
    font-size: 40px;
    color: #fff;
    font-weight: 600;
    line-height: 60px;
  }

  .container-card {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(71deg, #080509, #1a171c, #080509);
    background-clip: padding-box;
    border-radius: 45px;
    padding: 20px;
    img {
      margin-bottom: 32px;
    }
  }

  .bg-green-box,
  .bg-white-box,
  .bg-yellow-box,
  .bg-blue-box {
    position: relative;
  }

  .bg-green-box::after,
  .bg-white-box::after,
  .bg-yellow-box::after,
  .bg-blue-box::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    content: '';
    z-index: -1;
    border-radius: 45px;
  }

  .bg-green-box::after {
    background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
  }

  .bg-white-box::after {
    background: linear-gradient(71deg, #121013, #b0afb0, #121013);
  }

  .bg-yellow-box::after {
    background: linear-gradient(71deg, #110e0e, #afa220, #110e0e);
  }

  .bg-blue-box::after {
    background: linear-gradient(71deg, #0c0a0e, #5f6fad, #0c0a0e);
  }

  .card-title {
    font-weight: 600;
    color: white;
    letter-spacing: -0.02em;
    line-height: 40px;
    font-style: normal;
    font-size: 28px;
    padding-bottom: 8px;
  }

  .card-description {
    font-weight: 600;
    line-height: 32px;
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 16px;
    width: 100%;
  }

  .criteria-btn {
    background-color: transparent;
    color: white;
    border: none;
    padding: 0;
    border-bottom: 1px solid white;
  }

  .customModalClassName .ant-modal-body {
    background-color: black !important;
    color: white !important;
  }

  .ant-modal-header {
    background-color: black;
    color: white;
  }

  .ant-modal-close-x {
    color: white !important;
  }
`;

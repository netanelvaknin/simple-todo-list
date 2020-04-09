import React from 'react';
import styled from 'styled-components/macro';
import { Card as AntdCard } from 'antd';

export const Card = styled(({ isCompleted, ...necessaryProps }) => (
  <AntdCard {...necessaryProps} />
))`
  width: 30rem;
  background: ${(props) => (props.isCompleted ? "#E6E6E6" : "white")};
  margin: 1rem;

  @media (max-width: 991px) {
    width: 70%;
    margin: 1rem auto;
  }

  @media (min-width: 1200px) {
    width: 27rem;
  }

  .ant-card-body {
    p {
      overflow-y: auto;
      overflow-x: hidden;
      min-height: 5rem;
      max-height: 5rem;
      word-break: break-word;
    }
  }
`;
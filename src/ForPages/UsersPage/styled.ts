import styled from 'styled-components';

export const ListContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  padding: 10px 15px;
  margin: 10px auto 0;
  background-color: beige;

  & .ant-pagination-item-active {
    background-color: #3178c6;
  }

  & .ant-pagination .ant-pagination-item-active a {
    color: #fff;
  }
`;

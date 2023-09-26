import styled from 'styled-components';
import { Select } from 'antd';

export const Container = styled.div`
  max-width: 1080px;
  width: 100%;
  padding: 10px 15px;
  margin: 10px auto 0;
  background-color: beige;
`;

export const StyledSelect = styled(Select)`
  width: 320px;
  height: 40px;

  & .ant-select .ant-select-selector {
    padding: 7px 11px;
  }

  & .ant-select-selector .ant-select-selection-item {
    font-size: 16px;
  }
`;

export const StepsContainer = styled.div`
  max-width: 1080px;
  width: 100%;
  padding: 10px 15px;
  margin: 10px auto 0;
  background-color: #fff;
`;

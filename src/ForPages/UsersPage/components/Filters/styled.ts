import styled from 'styled-components';
import { Input, Select } from 'antd';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledInputSearch = styled(Input)`
  width: 320px;
  height: 30px;
`;

export const StyledSelectSearch = styled(Select)`
  width: 320px;
`;

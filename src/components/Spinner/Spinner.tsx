import { FC } from 'react';
import { Spin } from 'antd';
import { SpinnerContainer } from '@/components/Spinner/styled';
import { ISpinner } from '@/components/Spinner/types';

const Spinner: FC<ISpinner> = ({ loading }) => {
  return (
    loading && (
      <SpinnerContainer>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </SpinnerContainer>
    )
  );
};

export default Spinner;

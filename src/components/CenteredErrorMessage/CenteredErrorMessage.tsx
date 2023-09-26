import { FC } from 'react';
import { ICenteredErrorMessage } from '@/components/CenteredErrorMessage/types';
import { ErrorContainer } from '@/components/CenteredErrorMessage/styled';

const CenteredErrorMessage: FC<ICenteredErrorMessage> = ({ message }) => {
  return <ErrorContainer>{message}</ErrorContainer>;
};

export default CenteredErrorMessage;

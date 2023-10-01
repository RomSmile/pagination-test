'use client';
import { FC, useMemo, useState } from 'react';
import { IUserPage } from './types';
import { Button, message, Steps, Typography } from 'antd';
import { ButtonsContainer, Container, StepsContainer } from './styled';
import { emailRegex, steps } from './defaultValues';
import { IUser } from '@/types/interfaces';
import UsersService from '@/services/UsersService';
import { useRouter } from 'next/router';

const { Title } = Typography;

const UserPage: FC<IUserPage> = ({ user }) => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<IUser>(user);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = async () => {
    const inputName = steps[currentStep].name;

    if (String(newUser[inputName]).length) {
      if (inputName === 'email') {
        if (emailRegex.test(newUser[inputName])) {
          setCurrentStep(currentStep + 1);
        } else {
          await message.warning(`Your email is not correct`);
        }
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      await message.warning(`Please enter the ${inputName}`);
    }
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const stepItems = useMemo(() => {
    return steps.map((step) => {
      return { ...step };
    });
  }, []);

  const CurrentComponent = steps[currentStep].children;

  const editUser = async () => {
    const response = await UsersService.editUser(newUser);
    if (response.status === 200) {
      await router.push('/users');
    }
  };

  return (
    <>
      <Container>
        <Title level={2}>{steps[currentStep].title}</Title>
        <CurrentComponent newUser={newUser} setNewUser={setNewUser} />

        <ButtonsContainer>
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="primary" onClick={editUser}>
              Done
            </Button>
          )}
          {currentStep > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={prev}>
              Previous
            </Button>
          )}
        </ButtonsContainer>
      </Container>
      <StepsContainer>
        <Steps current={currentStep} items={stepItems} />
      </StepsContainer>
    </>
  );
};

export default UserPage;

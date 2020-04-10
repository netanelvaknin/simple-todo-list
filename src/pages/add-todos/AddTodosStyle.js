import styled from 'styled-components/macro';
import { Input as antdInput } from 'antd';

export const AddTodosPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 5rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 22rem;
    padding: 1rem;
`;

export const Input = styled(antdInput)`
    margin-bottom: 1rem;
    height: 5rem;
    width: 100%;
`;
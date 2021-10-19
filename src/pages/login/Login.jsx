import React, {useState} from 'react';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: '75%' })};
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;

    /* &:focus {
        border: none;
    } */
`;
const Button = styled.button`
    width: 40%;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;

    &:disabled {
        cursor: not-allowed;
    }
`;

const Error = styled.span`
    color: red;
    font-size: 14px;
    margin: 10px 0;
`;


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const {error, isError, loading} = useSelector(state => state.user);

    const handleClick =(e)=> {
        e.preventDefault();
        login(dispatch, {username, password});
    }
    return (
        <>
        <Container>
            <Wrapper>
                <Title>ADMIN SIGN IN</Title>
                <Form>
                    <Input placeholder='Username' type='text' onChange={(e)=>setUsername(e.target.value)} />
                    <Input placeholder='Password' type='password' onChange={(e)=>setPassword(e.target.value)} />
                    <Button disbaled={loading} onClick={handleClick}>LOGIN</Button>
                    { isError && <Error>{error}</Error> }
                </Form>
            </Wrapper>
        </Container>
        </>
    )
}

export default Login

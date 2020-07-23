import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../navigation';
import { useTypedSelector } from '../store';
import { useDispatch } from 'react-redux';
import getActions from '../utils/getActions';
import actionTypes from '../store/actionTypes';
const Container = styled.div`
  background-color: lightBlue;
  height: 100vh;
`;
const H1 = styled.h1`
  margin: unset;
`;

const LandingPage = () => {
  const profileData = useTypedSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // async function fetchUsers(endpoint) {
    //   const res = await fetch(endpoint);
    //   let data = await res.json();
    //   data = data.map((user) => user.username);
    //   dispatch(
    //     getActions(actionTypes.GET_USERNAME, {
    //       data,
    //     })
    //   );
    // }

    // fetchUsers('https://jsonplaceholder.typicode.com/users');

    const data = {
      name: 'Terry',
      team: 'manchester',
    };
    dispatch(
      getActions(actionTypes.ADD_ARRAY, {
        data,
      })
    );
  }, [dispatch]);
  console.log('landing page reducer', profileData);
  return (
    <>
      <Nav />
      <Container>
        <header>Homepage</header>
      </Container>
    </>
  );
};

export default LandingPage;

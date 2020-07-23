import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.nav`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background-color: grey;
`;
const Ul = styled.ul`
  font-size: 0.8rem;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  flkex: 0 0 50%;
  cursor: pointer;
  list-style-type: none;
`;

const CustomUl = styled(Ul)`
  flex-direction: column;
  padding: unset;
  display: none;
`;

const Li = styled.li`
  font-size: 0.8rem;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
  margin: 0.5rem;
  :hover {
    color: white;
    background-color: grey;
    ${CustomUl} {
      display: block;
    }
  }
`;

const Logo = styled.img`
  height: 3.5rem;
  width: 3.5rem;
`;

const Navigation = () => {
  const history = useHistory();
  const routeTo = (id) => {
    history.push(`/${id}`);
  };
  return (
    <>
      <Wrapper>
        <Logo src={logo} className='App-logo' alt='logo' />
        <Ul>
          <Li>
            HOME
            <CustomUl>
              <Li> Section 1</Li>
              <Li> section 2</Li>
              <Li> Section 3</Li>
              <Li> Section 4</Li>
            </CustomUl>
          </Li>
          <Li onClick={() => routeTo('about')}>
            ABOUT US
            <CustomUl>
              <Li> About 1</Li>
              <Li> About 2</Li>
              <Li> About 3</Li>
              <Li> About 4</Li>
            </CustomUl>
          </Li>
        </Ul>
      </Wrapper>
    </>
  );
};
export default Navigation;

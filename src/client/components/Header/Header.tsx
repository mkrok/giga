import styled from 'styled-components';

const HeaderStyled = styled.div`
  height: 100px;
  width: 100%;
  color: #aaa;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1em;
  font-size: 1rem;
`;

const Header = () => <HeaderStyled>Giga Techspace coding challenge</HeaderStyled>;

export default Header;

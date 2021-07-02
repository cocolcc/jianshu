import styled from 'styled-components';
import LogoImage from '../static/logo.jpeg'

const HeaderWrapper = styled.div`
  display: flex;
  height: 56px;
  margin: 0 3px 0 3px;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled.a.attrs({href: '/'})`
  height: 56px;
  width: 120px;
  margin: 0;
  background-image: url(${LogoImage});
  background-size: 100%;
`

export { HeaderWrapper, Logo };
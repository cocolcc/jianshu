import style from './style.module.css'
import Logo from './Logo';
import Nav from './Nav';
import NavAddition from './NavAddition'

const Header = () => {
  return (
    <div className = { style.headerWrapper }>
      <Logo />
      <Nav />
      <NavAddition />
    </div>
  );
}

export default Header;
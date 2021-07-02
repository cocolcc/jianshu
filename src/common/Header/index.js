import style from './style.module.css'

const Header = () => {
  return (
    <div className = { style.headerWrapper }>
      <a className = { style.logo } href = '/' />
    </div>
  );
}

export default Header;
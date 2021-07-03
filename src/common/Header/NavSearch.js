import style from './style.module.css';

const NavSearch = () => {
  return (
    <input className={style.navSearch} placeholder={ '搜索' }/>
  );
}

export default NavSearch;
import style from './style.module.css';

const NavSearch = () => {
  return (
    <duv className={style.navSearchWrapper}>
      <input className={style.navSearch} placeholder={'搜索'} />
      <span className={`iconfont ${style.searchIcon}`}>&#xe65b;</span>
    </duv>
  );
}

export default NavSearch;
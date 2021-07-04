import style from './style.module.less';

const NavSearch = () => {
  return (
    <div className={style.navSearchWrapper}>
      <input className={style.navSearch} placeholder={'搜索'} />
      <span className={`iconfont ${style.searchIcon}`}>&#xe65b;</span>
    </div>
  );
}

export default NavSearch;
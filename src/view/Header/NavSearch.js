import { useState } from 'react';
import style from './style.module.less';

const NavSearch = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div className={style.navSearchWrapper}>
      <input
        className={`${style.navSearch} ${isFocus ? style.focus : ''}`}
        placeholder={'搜索'}
        onBlur={ inputOnBlur }
        onFocus={ imputOnFocus }
      />
      <span className={`iconfont ${style.searchIcon} ${isFocus ? style.focus : ''}`}>&#xe65b;</span>
    </div>
  );

  function inputOnBlur() {
    setIsFocus(false);
  }
  
  function imputOnFocus() {
    setIsFocus(true);
  } 
}

export default NavSearch;
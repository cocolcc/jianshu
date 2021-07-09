import { useSelector, useDispatch } from 'react-redux';
import { actionCreators }  from '../../store/header';
import style from './style.module.less';

const NavSearch = () => {
  const isFocus = useSelector(state => state.getIn(['header', 'isFocus']));
  const list = useSelector(state => state.getIn(['header', 'list']));
  const dispatch = useDispatch();

  function inputOnFocus() {
    dispatch(actionCreators.fetchSearchListAction());
    dispatch(actionCreators.searchFocusAction());
  }

  function inputOnBlur() {
    dispatch(actionCreators.searchBlurAction());
  }
  
  return (
    <div className={style.navSearchWrapper}>
      <input
        className={`${style.navSearch} ${isFocus ? style.focus : ''}`}
        placeholder={'搜索'}
        onBlur={ inputOnBlur }
        onFocus={ inputOnFocus }
      />
      <span className={`iconfont ${style.searchIcon} ${isFocus ? style.focus : ''}`}>&#xe65b;</span>
      {showSearchInfo(isFocus, list)}
    </div>
  );
}

const showSearchInfo = (isShow, list) => {
  if (isShow) {
    return (
      <div className={style.searchInfo}>
        <div className={style.searchInfoHeader}>
          <div className={style.searchInfoTitle}>热门搜索</div>
          <div className={style.searchInfoSwitch}>换一批</div>
        </div>
        {list.map((item) => {
          return (
            <a className={style.searchInfoItem} key={item} href='/'>{item}</a>
          );
        }) }
      </div>
    )
  } else {
    return null;
  }
}

export default NavSearch;
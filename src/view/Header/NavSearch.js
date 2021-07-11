import { useSelector, useDispatch } from 'react-redux';
import { actionCreators }  from '../../store/header';
import style from './style.module.less';

const NavSearch = () => {
  const isFocus = useSelector(state => state.getIn(['header', 'isFocus']));
  const list = useSelector(state => state.getIn(['header', 'list']));
  const isMouseIn = useSelector(state => state.getIn(['header', 'isMouseIn']));
  const currentPage = useSelector(state => state.getIn(['header', 'currentPage']));
  const totalPage = useSelector(state => state.getIn(['header', 'totalPage']));
  const dispatch = useDispatch();

  function inputOnFocus() {
    dispatch(actionCreators.fetchSearchListAction());
    dispatch(actionCreators.searchFocusAction());
  }

  function inputOnBlur() {
    dispatch(actionCreators.searchBlurAction());
  }

  function handelOnMouseEnter() {
    dispatch(actionCreators.onMouseEnterAction());
  }

  function handleOnMouseLeave() {
    dispatch(actionCreators.onMouseLeaveAction());
  }

  function changePage() {
    if (currentPage < totalPage) {
      dispatch(actionCreators.changePageAction(currentPage + 1));
    } else {
      dispatch(actionCreators.changePageAction(1));
    }
  }

  function showSearchInfo() {
    const tempList = list.toJS();
    if (tempList.length && (isFocus || isMouseIn)) {
      const showList = [];
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        if (tempList[i]) {
          showList.push(<a className={style.searchInfoItem} key={tempList[i]} href='/'>{tempList[i]}</a>);
        }
      }
      return (
        <div
          className={style.searchInfo}
          onMouseEnter={handelOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <div className={style.searchInfoHeader}>
            <div className={style.searchInfoTitle}>热门搜索</div>
            <div className={style.searchInfoSwitch} onClick={changePage}>换一批</div>
          </div>
          {showList}
        </div>
      )
    } else {
      return null;
    }
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
      {showSearchInfo()}
    </div>
  );
}

export default NavSearch;
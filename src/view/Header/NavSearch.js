import { connect } from 'react-redux';
import { actionCreators }  from '../../store/header';
import style from './style.module.less';

const NavSearch = (props) => {
  const { isFocus, inputOnBlur, imputOnFocus, fetchSearchList, list } = props;
  return (
    <div className={style.navSearchWrapper}>
      <input
        className={`${style.navSearch} ${isFocus ? style.focus : ''}`}
        placeholder={'搜索'}
        onBlur={ inputOnBlur }
        onFocus={ imputOnFocus }
      />
      <span className={`iconfont ${style.searchIcon} ${isFocus ? style.focus : ''}`}>&#xe65b;</span>
      {showSearchInfo(isFocus, fetchSearchList, list)}
    </div>
  );
}

const showSearchInfo = (isShow, fetchSearchList, list) => {
  if (isShow) {
    fetchSearchList();
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

const mapStateToProps = (state) => {
  return {
    isFocus: state.getIn(['header', 'isFocus']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    imputOnFocus() {
      dispatch(actionCreators.searchFocusAction());
    },
    inputOnBlur() {
      dispatch(actionCreators.searchBlurAction());
    },
    fetchSearchList() {
      dispatch(actionCreators.fetchSearchListAction());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
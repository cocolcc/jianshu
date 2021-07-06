import { connect } from 'react-redux';
import { actionCreators }  from '../../store/header';
import style from './style.module.less';

const NavSearch = (props) => {
  const { isFocus, inputOnBlur, imputOnFocus } = props;
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
}

const mapStateToProps = (state) => {
  return {
    isFocus: state.getIn(['header', 'isFocus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    imputOnFocus(){
      dispatch(actionCreators.getSearchFocusAction());
    },
    inputOnBlur(){
      dispatch(actionCreators.getSearchBlurAction());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
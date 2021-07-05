import { connect } from 'react-redux';
import actionCreators  from '../../store/actionCreators';
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
    isFocus: state.header.isFocus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputOnBlur(){
      const action = actionCreators.getHeaderSearchInputBlurAction();
      dispatch(action);
    },
    imputOnFocus(){
      const action = actionCreators.getHeaderSearchInputFocusAction()
      dispatch(action);
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
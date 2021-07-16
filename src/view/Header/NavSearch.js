import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { actionCreators }  from '../../store/header';
import { makeStyles } from '@material-ui/core/styles';

const useclassess = makeStyles({
  focus: {},
  navSearchWrapper: {
    position: 'relative',
  },
  navSearch: {
    transition: 'all 0.2s ease-in',
    width: '120px',
    margin: '0 20px',
    padding: '0 40px 0 20px',
    height: '38px',
    color: '#666',
    outline: 'none',
    border: 'none',
    borderRadius: '19px',
    background: '#eee',
    '&::placeholder': {
      color: '#999',
      fontSize: '14px',
    },
    '&$focus': {
      width: '200px',
    }
  },
  searchInfo: {
    position: 'absolute',
    padding: '20px 20px',
    top: '56px',
    left: '0px',
    width: '240px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
  },
  searchIcon: {
    transition: 'all 0.2s ease-in',
    position: 'absolute',
    width: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: '15px',
    right: '24px',
    top: '4px',
    '&$focus': {
      background: '#777',
      color: '#fff'
    }
  },
  searchInfoHeader: {
    display: 'flex',
    lineHeight: '17px',
    textAlign: 'center',
    marginBottom: '10px',
    justifyContent: 'space-between',
    searchInfoTitle: {
      fontSize: '14px',
      color: '#969696'
    }
  },
  searchInfoItem: {
    float: 'left',
    display: 'block',
    textDecoration: 'none',
    lineHeight: '20px',
    fontSize: '12px',
    borderRadius: '3px',
    padding: '0 5px',
    marginTop: '10px',
    marginRight: '10px',
    border: '1px solid #ddd',
    color: '#787878'
  },
  searchInfoSwitch: {
    cursor: 'pointer',
    fontSize: '13px',
    color: '#969696',
  },
  spin: {
    display: 'block',
    float: 'left',
    marginRight: '2px',
    transition: 'all 0.2s ease-in',
    transformOrigin: 'center center',
    transform: angle => `rotate(${angle}deg)`,
  }
});
const NavSearch = () => {
  const [angle, setAngle] = useState(0);
  const classes = useclassess(angle);
  const isFocus = useSelector(state => state.getIn(['header', 'isFocus']));
  const list = useSelector(state => state.getIn(['header', 'list']));
  const isMouseIn = useSelector(state => state.getIn(['header', 'isMouseIn']));
  const currentPage = useSelector(state => state.getIn(['header', 'currentPage']));
  const totalPage = useSelector(state => state.getIn(['header', 'totalPage']));
  const dispatch = useDispatch();

  function inputOnFocus() {
    (list.size === 0) && dispatch(actionCreators.fetchSearchListAction());
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
    setAngle(angle + 360);
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
        tempList[i] && showList.push(<a className={classes.searchInfoItem} key={tempList[i]} href='/'>{tempList[i]}</a>);
      }
      return (
        <div
          className={classes.searchInfo}
          onMouseEnter={handelOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <div className={classes.searchInfoHeader}>
            <div className={classes.searchInfoTitle}>热门搜索</div>
            <div
              className={classes.searchInfoSwitch}
              onClick={changePage}
            >
              <span
                className={`iconfont ${classes.spin}`}
              >&#xe851;</span>
              换一批
            </div>
          </div>
          {showList}
        </div>
      )
    } else {
      return null;
    }
  }
  
  return (
    <div className={classes.navSearchWrapper}>
      <input
        className={`${classes.navSearch} ${isFocus ? classes.focus : ''}`}
        placeholder={'搜索'}
        onBlur={ inputOnBlur }
        onFocus={ inputOnFocus }
      />
      <span className={`iconfont ${classes.searchIcon} ${isFocus ? classes.focus : ''}`}>&#xe65b;</span>
      {showSearchInfo()}
    </div>
  );
}

export default NavSearch;
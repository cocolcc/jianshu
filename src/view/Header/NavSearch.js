import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { actionCreators }  from '../../store/header';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import * as URI from '../../uri';
import RefreshIcon from '@mui/icons-material/Refresh';

const useclassess = makeStyles((theme) => ({
  focus: {},
  navSearchWrapper: {
    position: 'relative',
  },
  navSearch: {
    transition: 'all 0.2s ease-in',
    width: '0px',
    margin: '0 10px 0 10px',
    // padding: '0 40px 0 20px',
    padding: '0 19px 0 19px',
    height: '38px',
    color: '#666',
    outline: 'none',
    border: 'none',
    borderRadius: '19px',
    // background: '#eee',
    '&::placeholder': {
      color: theme.flat,
      fontSize: '16px',
      fontWeight: '400'
    }
  },
  isSearch: {
    width: '100px',
    // background: '#3C8DAD',
  },
  searchInfo: {
    position: 'absolute',
    padding: '20px 20px',
    top: '48px',
    left: '0px',
    width: '240px',
    background: '#fff',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
    borderRadius: '10px',
  },
  searchIcon: {
    color: theme.flat,
    transition: 'all 0.2s ease-in',
    position: 'absolute',
    width: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    borderRadius: '15px',
    right: '15px',
    top: '7px',
    '&$focus': {
      color: theme.primary,
    }
  },
  searchInfoHeader: {
    display: 'flex',
    lineHeight: '17px',
    textAlign: 'center',
    marginBottom: '10px',
    justifyContent: 'space-between'
  },
  searchInfoTitle: {
    fontSize: '14px',
    color: theme.title,
  },
  searchInfoItem: {
    float: 'left',
    display: 'block',
    textDecoration: 'none',
    lineHeight: '20px',
    fontSize: '12px',
    borderRadius: '15px',
    padding: '0 5px',
    marginTop: '10px',
    marginRight: '10px',
    border: `1px solid ${theme.flat}`,
    color: theme.flat,
    '&:hover': {
      color: theme.title,
      border: `1px solid ${theme.title}`,
    },
  },
  searchInfoSwitch: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '13px',
    lineHeight: '24px',
    textAlign: 'center',
    color: theme.flat,
    '&:hover': {
      color: theme.title,
    },
  },
  spin: {
    float: 'left',
    transition: 'all 0.2s ease-in',
    transformOrigin: 'center center',
    height: '24px',
    transform: angle => `rotate(${angle}deg)`,
  }
}));
const NavSearch = () => {
  const [angle, setAngle] = useState(0);
  // const [searchFoucus, setSearchFocus] = useState(false);
  const classes = useclassess(angle);
  const isFocus = useSelector(state => state.getIn(['header', 'isFocus']));
  const isSearch = useSelector(state => state.getIn(['header', 'isSearch']))
  const list = useSelector(state => state.getIn(['header', 'list']));
  const isMouseIn = useSelector(state => state.getIn(['header', 'isMouseIn']));
  const currentPage = useSelector(state => state.getIn(['header', 'currentPage']));
  const totalPage = useSelector(state => state.getIn(['header', 'totalPage']));
  const dispatch = useDispatch();

  function inputOnFocus() {
    (list.size === 0) && dispatch(actionCreators.fetchSearchListAction());
    dispatch(actionCreators.searchFocusAction());
  }

  function handleSearch() {
    dispatch(actionCreators.taggleSearchAction());
  }

  function inputOnBlur() {
    dispatch(actionCreators.searchBlurAction());
    // dispatch(actionCreators.searchOffAction());
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
        tempList[i] && showList.push(<NavLink className={classes.searchInfoItem} key={tempList[i]} to={URI.HOME}>{tempList[i]}</NavLink>);
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
              <div className={ classes.spin}><RefreshIcon /></div>
              {/* <span className={`iconfont ${classes.spin}`}>&#xe851;</span> */}
              <div>换一批</div>
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
        className={`${classes.navSearch} ${isSearch ? classes.isSearch : ''}`}
        placeholder={'搜索'}
        onBlur={ inputOnBlur }
        onFocus={ inputOnFocus }
      />
      <SearchOutlinedIcon onClick={handleSearch} className={`${classes.searchIcon} ${isSearch ? classes.focus : ''}`}/>
      {showSearchInfo()}
    </div>
  );
}

export default NavSearch;
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { actionCreators }  from '../../store/header';
import { actionCreators as homeActionCreators }  from '../../store/home';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';

const useclassess = makeStyles((theme) => ({
  focus: {},
  navSearchWrapper: {
    position: 'relative',
  },
  navSearch: {
    transition: 'all .2s ease-in',
    width: '0px',
    margin: '0 10px 0 10px',
    padding: '0 32px 0 19px',
    height: '38px',
    color: theme.title,
    outline: 'none',
    border: 'none',
    borderRadius: '19px',
    '&::placeholder': {
      color: theme.flat,
      fontSize: '16px',
      fontWeight: '400'
    }
  },
  isSearch: {
    width: '100px',
    background: theme.flatBackground,
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
    alignItems: 'center',
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
  const classes = useclassess(angle);
  const isFocus = useSelector(state => state.getIn(['header', 'isFocus']));
  const isSearch = useSelector(state => state.getIn(['header', 'isSearch']))
  const list = useSelector(state => state.getIn(['header', 'list']));
  const isMouseIn = useSelector(state => state.getIn(['header', 'isMouseIn']));
  const currentPage = useSelector(state => state.getIn(['header', 'currentPage']));
  const totalPage = useSelector(state => state.getIn(['header', 'totalPage']));
  const searchTags = useSelector(state => state.getIn(['home', 'searchTags']));
  const searchTagsString = useSelector(state => state.getIn(['home', 'searchTagsString']));
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

  const handleSearchInputChange = () => (event) => {
    dispatch(homeActionCreators.storeSearchTagsStringAction(event.target.value))
  }

  function handleClickSearchTag(tag) {
    //如果已经选择该类tag则不再添加重复元素进入数组
    if (searchTags.indexOf(tag) > -1) {
      return;
    }
    dispatch(homeActionCreators.storeSearchTagsStringAction(searchTags.join(' ') + ' ' + tag));
  }

  function showSearchInfo() {
    const tempList = list.toJS();
    if (tempList.length && (isFocus || isMouseIn)) {
      const showList = [];
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        tempList[i] && showList.push(<div className={classes.searchInfoItem} key={tempList[i]} onClick={() => {handleClickSearchTag(tempList[i])}}>{tempList[i]}</div>);
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
        onBlur={inputOnBlur}
        onFocus={inputOnFocus}
        value={searchTagsString}
        onChange={handleSearchInputChange()}
      />
      <SearchOutlinedIcon onClick={handleSearch} className={`${classes.searchIcon} ${isSearch ? classes.focus : ''}`}/>
      {showSearchInfo()}
    </div>
  );
}

export default NavSearch;
import { makeStyles } from '@material-ui/core/styles';
import { actionCreators } from '../../store/login';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as URI from '../../uri';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const useStyles = makeStyles((theme) =>({
  HeaderAdditionWrapper: {
    display: 'flex',
    width: '250px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  logIcon: {
    color: theme.flat
  },
  logIconActive: {
    color: theme.primary
  },
  btnFlat: {
    // transition: 'all 0.2s ease-in',
    height: '38px',
    width: '38px',
    lineHeight: '38px',
    textAlign: 'center',
    border: `1px solid ${theme.primary}`,
    borderRadius: '25px',
    // padding: '0 20px',
    marginRight: '30px',
    fontSize: '14px',
    // background: theme.primary,
    color: theme.primary,
    cursor: 'pointer'
  },
  btnActive: {
    height: '38px',
    width: '38px',
    lineHeight: '38px',
    textAlign: 'center',
    border: `1px solid ${theme.primary}`,
    borderRadius: '25px',
    // padding: '0 20px',
    marginRight: '30px',
    fontSize: '14px',
    background: theme.primary,
    color: '#fff',
    cursor: 'pointer'
  },
  userRegWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    height: '38px',
  },
  userRegImg: {
    borderRadius: '19px',
    height: '100%',
  },
  userRegIcon: {
    color: theme.flat,
  },
  // publish: {
  //   transition: 'all 0.2s ease-in',
  //   height: '38px',
  //   width: '58px',
  //   borderRadius: '15px',
  // },
  loginWrapper: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  textFlat: {
    marginRight: '5px',
    color: theme.flat,
  },
  textActive: {
    marginRight: '5px',
    color: theme.primary,
  }
}));
const HeaderAddition = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.getIn(['login', 'isLogin']))
  const isLoginActive = useSelector(state => state.getIn(['header', 'isLoginActive']));
  const isWritingActive = useSelector(state => state.getIn(['header', 'isWritingActive']));
  
  function handleLogout() {
    dispatch(actionCreators.logoutAction());
  }

  function handleToLogin() {
    history.push(URI.LOGIN);
  }

  function handleClickToWriting() {
    history.push(URI.WRITING);
  }

  return (
    <div className={classes.HeaderAdditionWrapper}>
      <div className={classes.userRegWrapper}>
        {isLogin ?
          <div className={classes.loginWrapper} onClick={handleLogout}><div className={classes.textFlat}>退出</div><LogoutOutlinedIcon className={classes.logIcon}/></div> :
          <div className={classes.loginWrapper} onClick={handleToLogin}><div className={isLoginActive ? classes.textActive : classes.textFlat}>登录</div><LoginOutlinedIcon className={isLoginActive ? classes.logIconActive : classes.logIcon}/></div>}
      </div>
      <div className={`${classes.btnFlat} ${isWritingActive ? classes.btnActive : ''}`} onClick={handleClickToWriting}><span className={`iconfont`}>&#xe6eb;</span></div>
      {/* <div className={`${classes.btn} ${isWritingActive ? classes.publish : ''}`}>{isWritingActive ? <div onClick={handleClickPublish}>发布</div> : <NavLink className={classes.link} to={URI.WRITING}><span className={`iconfont`}>&#xe6eb;</span></NavLink>}</div> */}
    </div>
  );
}

export default HeaderAddition;
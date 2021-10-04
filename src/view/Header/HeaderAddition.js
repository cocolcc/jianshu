import { makeStyles } from '@material-ui/core/styles';
import { actionCreators } from '../../store/login';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
  logIcon: {
    color: theme.flat
  },
  logIconActive: {
    color: theme.primary
  },
  btn: {
    height: '38px',
    width: '38px',
    lineHeight: '38px',
    textAlign: 'center',
    border: `1px solid ${theme.primary}`,
    borderRadius: '25px',
    // padding: '0 20px',
    marginRight: '30px',
    fontSize: '14px',
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
  writting: {
    background: theme.primary,
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  text: {
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer'
  }
}));
const HeaderAddition = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.getIn(['login', 'isLogin']))
  const isLoginActive = useSelector(state => state.getIn(['header', 'isLoginActive']));
  function handleLogout() {
    dispatch(actionCreators.logoutAction());
  }

  return (
    <div className={classes.HeaderAdditionWrapper}>
      <div className={classes.userRegWrapper}>
        {isLogin ?
          <div className={classes.text} onClick={handleLogout}><LogoutOutlinedIcon className={classes.logIcon}/></div> :
          <NavLink className={classes.text} to={URI.LOGIN}><LoginOutlinedIcon className={isLoginActive ? classes.logIconActive : classes.logIcon}/></NavLink>}
      </div>
      <NavLink className={`${classes.btn} ${classes.writting}`} to={URI.WRITING}>
        <span className={`iconfont`}>&#xe6eb;</span>
      </NavLink>
    </div>
  );
}

export default HeaderAddition;
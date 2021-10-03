import { makeStyles } from '@material-ui/core/styles';
import { actionCreators } from '../../store/login';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as URI from '../../uri';

const useStyles = makeStyles((theme) =>({
  HeaderAdditionWrapper: {
    display: 'flex',
    width: '250px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  aaIcon: {
    fontSize: '19px',
    color: '#969696',
    marginRight: '25px',
  },
  btn: {
    height: '38px',
    width: '65px',
    lineHeight: '38px',
    textAlign: 'center',
    border: `1px solid ${theme.primary}`,
    borderRadius: '19px',
    padding: '0 20px',
    marginRight: '25px',
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

  function handleLogout() {
    dispatch(actionCreators.logoutAction());
  }

  return (
    <div className={classes.HeaderAdditionWrapper}>
      <span className={ `iconfont ${classes.aaIcon}` }>&#xe636;</span>
      <div className={classes.userRegWrapper}>
        {isLogin ? <div className={classes.text} onClick={handleLogout}>退出</div> : <NavLink className={classes.text} to={URI.LOGIN}>登录</NavLink>}
      </div>
      <NavLink className={`${classes.btn} ${classes.writting}`} to={URI.WRITING}>
        <span className={`iconfont`}>&#xe6eb;</span>
        {' 写文章'}
      </NavLink>
    </div>
  );
}

export default HeaderAddition;
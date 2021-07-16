import NavItem from './NavItem';
import NavSearch from './NavSearch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  nav: {
    display: 'flex',
    flexGrow: 1,
    minWidth: 600
  },
  navLeft: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  navRight: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  aaIcon: {
    fontSize: '17px',
    color: '#969696'
  }
});

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.nav}>
      <div className={classes.navLeft}>
        <NavItem isActive={true}>发现</NavItem>
        <NavItem>IT技术</NavItem>
        <NavItem>关注</NavItem>
        <NavItem>消息</NavItem>
        <NavSearch />
      </div>
      <div className={classes.navRight}>
        <NavItem>
          <span className={`iconfont ${classes.aaIcon}`}>&#xe636;</span>
        </NavItem>
      </div>
    </div>
  )
}

export default Nav;
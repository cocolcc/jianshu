import NavItem from './NavItem';
import NavSearch from './NavSearch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  aaIcon: {
    fontSize: '17px',
    color: theme.flat,
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div className={ classes.navWrapper }>
      <NavItem isActive={true}>发现</NavItem>
      <NavItem>IT技术</NavItem>
      <NavItem>关注</NavItem>
      <NavItem>消息</NavItem>
      <NavSearch />
    </div>
  )
}

export default Nav;
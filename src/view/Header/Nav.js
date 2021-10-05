import NavItem from './NavItem';
import NavSearch from './NavSearch';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import * as URI from '../../uri';

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
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  }
}));

const Nav = () => {
  const classes = useStyles();
  const isDiscoveryActive = useSelector(state => state.getIn(['header', 'isDiscoveryActive']));
  const isFollowingActive = useSelector(state => state.getIn(['header', 'isFollowingActive']));
  const isMessageActive = useSelector(state => state.getIn(['header', 'isMessageActive']));
  
  return (
    <div className={classes.navWrapper}>
      <NavLink className={classes.link} to={URI.HOME}><NavItem isActive={isDiscoveryActive}><CameraOutlinedIcon/>发现</NavItem></NavLink>
      <NavLink className={classes.link} to={URI.FOLLOWING}><NavItem isActive={isFollowingActive}><GroupOutlinedIcon/>关注</NavItem></NavLink>
      <NavLink className={classes.link} to={URI.MESSAGE}><NavItem isActive={isMessageActive}><MessageOutlinedIcon/>消息</NavItem></NavLink>
      <NavSearch />
    </div>
  )
}

export default Nav;
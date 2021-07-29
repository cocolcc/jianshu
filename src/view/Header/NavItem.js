import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navItem: {
    padding: '0 20px',
    whiteSpace: 'nowrap',
    fontSize: 17
  },
  active: {
    color: theme.primary,
  },
  flat: {
    color: theme.flat,
  }
}));
const NavItem = (props) => {
  const classes = useStyles();
  const { children, isActive, isFlat } = props;
  return (
    <div className={`${classes.navItem} ${isActive ? classes.active : ''} ${isFlat ? classes.flat : ''}`} >{children}</div>
  );
}

export default NavItem;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  navItem: {
    padding: '0 20px',
    fontSize: 17
  },
  active: {
    color: '#ea5f5a'
  },
  flat: {
    color: '#969696'
  }
});
const NavItem = (props) => {
  const classes = useStyles();
  const { children, isActive, isFlat } = props;
  return (
    <div className={`${classes.navItem} ${isActive ? classes.active : ''} ${isFlat ? classes.flat : ''}`} >{children}</div>
  );
}

export default NavItem;
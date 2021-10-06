import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navItem: {
    padding: '0 20px',
    whiteSpace: 'nowrap',
    fontSize: 17,
    cursor: 'pointer',
    color: theme.flat,
    display: 'flex',
    alignItems: 'center'
  },
  active: {
    color: theme.primary,
    animation: '$active .5s ease-in-out',
  },
  flat: {
    color: theme.flat,
  },
  '@keyframes active': {
    '0%': {
      transform: 'scale(1)'
    },
    '70%': {
      transform: 'scale(1.1)'
    },
    '100%': {
      transform: 'scale(1)'
    }
  },
}));
const NavItem = (props) => {
  const classes = useStyles();
  const { children, isActive, isFlat } = props;
  return (
    <div className={`${classes.navItem} ${isActive ? classes.active : ''} ${isFlat ? classes.flat : ''}`}>{children}</div>
  );
}

export default NavItem;
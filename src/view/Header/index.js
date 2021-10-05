import Logo from './Logo';
import Nav from './Nav';
import HeaderAddition from './HeaderAddition'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #f0f0f0'
  },
  headerWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    height: '56px',
    maxWidth: '1450px',
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className = {classes.headerWrapper}>
        <Logo />
        <Nav />
        <HeaderAddition />
      </div>
    </div>
  );
}

export default Header;
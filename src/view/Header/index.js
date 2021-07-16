import Logo from './Logo';
import Nav from './Nav';
import NavAddition from './NavAddition'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerWrapper: {
  display: 'flex',
  height: '56px',
  margin: '0 3px 0 3px',
  borderBottom: '1px solid #f0f0f0'
}
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className = { classes.headerWrapper }>
      <Logo />
      <Nav />
      <NavAddition />
    </div>
  );
}

export default Header;
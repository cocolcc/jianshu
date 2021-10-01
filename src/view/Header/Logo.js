import { Link } from 'react-router-dom';
import { getImagePath } from '../../utils/getPath';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logoWrapper: {
    height: '100%',
    marginRight: '70px',
    cursor: 'pointer',
  },
  logoImg: {
    marginLeft: '10px',
    marginTop: '10.5px',
    height: '35px',
    width: '70px'
  }
});

const Logo = () => {
  const classes = useStyles();
  return (
    <Link className={classes.logoWrapper} to='/'>
      <img className={classes.logoImg} src={ getImagePath('/static/logo.png') } alt='logo' />
    </Link>
  );
}

export default Logo;
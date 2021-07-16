import getImagePath from '../../utils/getImagePath';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logo: {
    position: 'relative',
    minWidth: '200px'
  },
  logoImg: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    height: '35px',
    width: '70px'
  }
});

const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <img className={classes.logoImg} src={ getImagePath('/static/logo.png') } alt='logo' />
    </div>
  );
}

export default Logo;
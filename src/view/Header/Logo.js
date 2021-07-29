import getImagePath from '../../utils/getImagePath';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  logoWrapper: {
    height: '100%',
    marginRight: '70px',
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
    <div className={classes.logoWrapper}>
      <img className={classes.logoImg} src={ getImagePath('/static/logo.png') } alt='logo' />
    </div>
  );
}

export default Logo;
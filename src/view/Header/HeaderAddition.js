import { makeStyles } from '@material-ui/core/styles';
import { getImagePath } from '../../utils/getPath';

const useStyles = makeStyles((theme) =>({
  HeaderAdditionWrapper: {
    display: 'flex',
    width: '250px',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  aaIcon: {
    fontSize: '19px',
    color: '#969696',
    marginRight: '25px',
  },
  btn: {
    height: '38px',
    width: '65px',
    lineHeight: '38px',
    textAlign: 'center',
    border: `1px solid ${theme.primary}`,
    borderRadius: '19px',
    padding: '0 20px',
    marginRight: '25px',
    fontSize: '14px',
  },
  userRegWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    height: '38px',
  },
  userRegImg: {
    borderRadius: '19px',
    height: '100%',
  },
  userRegIcon: {
    color: theme.flat,
  },
  writting: {
    background: theme.primary,
    color: '#fff'
  } 
}));
const HeaderAddition = () => {
  const classes = useStyles();
  return (
    <div className={classes.HeaderAdditionWrapper}>
      <span className={ `iconfont ${classes.aaIcon}` }>&#xe636;</span>
      <div className={classes.userRegWrapper}>
        <img className={classes.userRegImg} src={getImagePath('/static/userRegDefine.jpeg')} alt='userRegImg' />
        <div className={`iconfont ${classes.userRegIcon}`}>&#xe68d;</div>
      </div>
      <div className={`${classes.btn} ${classes.writting}`}>
        <span className={`iconfont`}>&#xe6eb;</span>
        {' 写文章'}
      </div>
    </div>
  );
}

export default HeaderAddition;
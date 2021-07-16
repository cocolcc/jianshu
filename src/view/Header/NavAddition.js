import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    height: '38px',
    lineHeight: '38px',
    textAlign: 'center',
    border: '1px solid #ec6149',
    borderRadius: '19px',
    padding: '0 20px',
    marginRight: '20px',
    fontSize: '14px',
  },
  reg: {
    color: '#ec6149'
  },
  writting: {
    background: '#ec6149',
    color: '#fff'
  },
  navAddition: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minWidth: '200px'
  }
  
});
const NavAddition = () => {
  const classes = useStyles();
  return (
    <div className={classes.navAddition}>
      <div className={`${classes.btn} ${classes.reg}`}>注册</div>
      <div className={`${classes.btn} ${classes.writting}`}>
        <span className='iconfont'>&#xe6eb;</span>
        {' 写文章'}
      </div>
    </div>
  );
}

export default NavAddition;
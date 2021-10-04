import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles((theme) => ({
  listItemWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    background: '#86A8E7',
    height: '80px',
    padding: '0 20px',
    borderRadius: '14px',
    marginBottom: '20px'
  },
  nickname: {
    margin: '0 0 0 20px',
    color: theme.primary,
    fontWeight: '800',
  },
  info: {
    margin: '10px 0 0 20px',
    color: '#fff',
  }
}));

const ListItem = (props) => {
  const classes = useStyles();
  const info = props.info;
  const avtar = info.nickname.substr(0, 1).toUpperCase();
  
  return (
    <div className={classes.listItemWrapper}>
      <Avatar>{avtar}</Avatar>
      <div>
        <div className={classes.nickname}>{info.nickname}</div>
        <div className={classes.info}>{info.intro}</div>
      </div>
    </div>
  )
}

export default ListItem;
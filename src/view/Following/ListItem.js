import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles((theme) => ({
  listItemWrapper: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nickname: {
    margin: '0 0 0 20px',
    color: theme.primary,
  },
  info: {
    margin: '10px 0 0 20px',
  }
}));

const ListItem = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.listItemWrapper}>
      <Avatar>H</Avatar>
      <div>
        <div className={classes.nickname}>nickname1</div>
        <div className={classes.info}>info1</div>
      </div>
    </div>
  )
}

export default ListItem;
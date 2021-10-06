import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as headerActionCreators} from '../../store/header';
import { actionCreators as messageActionCreators} from '../../store/message';
import { useEffect } from 'react';
import ListItem from './ListItem';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles({
  messageWrapper: {
    width: '640px',
    margin: '0 auto',
    marginTop: '40px'
  },
});

const Message = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const message = useSelector(state => state.getIn(['message', 'message']));
  const messageLoading = useSelector(state => state.getIn(['message', 'messageLoading']));
  
  useEffect(() => {
    dispatch(headerActionCreators.activeMessageAction());
    dispatch(messageActionCreators.fetchMessageAction());
  }, [dispatch]);
  
  if (messageLoading) {
    return (
      <Box sx={{ width: 640, margin: '0 auto', marginTop: '40px' }}>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
      </Box>
    )
  } else {
    return (
      <div className={classes.messageWrapper}>
        {message.map((item, index) => {
          return (<ListItem key={index} value={item.toJS()}/>);
        })}
      </div>
    );
  }
}

export default Message;
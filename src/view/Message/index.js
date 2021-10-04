import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as headerActionCreators} from '../../store/header';
import { actionCreators as messageActionCreators} from '../../store/message';
import { useEffect } from 'react';
import ListItem from './ListItem';

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
  useEffect(() => {
    dispatch(headerActionCreators.activeMessageAction());
    dispatch(messageActionCreators.fetchMessageAction());
  }, [dispatch]);  
  return (
    <div className={classes.messageWrapper}>
      {message.map((item, index) => {
        return (<ListItem key={index} value={item.toJS()}/>);
      })}
    </div>
  );
}

export default Message;
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as headerActionCreators} from '../../store/header';
import { actionCreators as followingActionCreators} from '../../store/following';
import { useEffect } from 'react';
import ListItem from './ListItem';

const useStyles = makeStyles({
  followingWrapper: {
    width: '640px',
    margin: '0 auto',
    marginTop: '40px'
  },
});

const Following = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const followingInfo = useSelector(state => state.getIn(['following', 'followingInfo']));
  useEffect(() => {
    dispatch(headerActionCreators.activeFollowingAction());
    dispatch(followingActionCreators.fetchFollowingInfoAction());
  }, [dispatch]);  
  return (
    <div className={classes.followingWrapper}>
      {followingInfo.map((item, index) => {
        return (<ListItem key={index} info={item.toJS()}/>);
      })}
    </div>
  );
}

export default Following;
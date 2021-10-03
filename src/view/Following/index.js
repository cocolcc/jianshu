import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as headerActionCreators} from '../../store/header';
import { actionCreators as followingActionCreators} from '../../store/following';
import { useEffect } from 'react';
import ListItem from './ListItem';

const useStyles = makeStyles({
  followinglWrapper: {
    width: '640px',
    margin: '0 auto',
    marginTop: '40px'
  },
});

const Following = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const followingInfo = useSelector(state => state.getIn(['following', 'followingInfo']));
  console.log(followingInfo.toJS());
  useEffect(() => {
    dispatch(headerActionCreators.activeFollowingAction());
    dispatch(followingActionCreators.fetchFollowingInfoAction());
  }, [dispatch]);
  
  return (
    <div className={classes.followinglWrapper}>
      <ListItem></ListItem>
    </div>
  );
}

export default Following;
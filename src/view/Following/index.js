import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as headerActionCreators} from '../../store/header';
import { actionCreators as followingActionCreators} from '../../store/following';
import { useEffect } from 'react';
import ListItem from './ListItem';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

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
  const followingInfoLoading = useSelector(state => state.getIn(['following', 'followingInfoLoading']));
  
  useEffect(() => {
    dispatch(headerActionCreators.activeFollowingAction());
    dispatch(followingActionCreators.fetchFollowingInfoAction());
  }, [dispatch]);
  
  if (followingInfoLoading) {
    return (
      <Box sx={{ width: 640, margin: '0 auto', marginTop: '40px' }}>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
      </Box>
    );
  } else {
    return (
      <div className={classes.followingWrapper}>
        {followingInfo.map((item, index) => {
          return (<ListItem key={index} info={item.toJS()}/>);
        })}
      </div>
    );
  }
}

export default Following;
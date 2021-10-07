import { actionCreators } from '../../store/home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles({
  topicWrapper: {
    
  },
  itemWrapper: {
    width: '100%',
    marginBottom: '5px',
  }
});

const Topic = () => {
  const classes = useStyles();
  const recommendList = useSelector(state => state.getIn(['home', 'recommendList']));
  const recommendListLoading = useSelector(state => state.getIn(['home', 'recommendListLoading']));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.fetchRecommendListAction());
  }, [dispatch])

  if (recommendListLoading) {
    return (
      <Box sx={{ width: 300, margin: '0 20px 0 0' }}>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
      </Box>
    );
  } else {
    return (
      <div className={classes.topicWrapper}>
        {
          recommendList.map((item) => {
            return (
              <img className={classes.itemWrapper} key={item.get('id')} src={item.get('imgUrl')} alt='recommend banner'/>
            )
          })
        }
      </div>
    );
  }
}

export default Topic;
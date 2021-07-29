import { actionCreators } from '../../store/home';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.fetchRecommendListAction());
  }, [dispatch])
  
  return (
    <div className={classes.topicWrapper}>
      {
        recommendList.map((item, index) => {
          return (
            <img className={classes.itemWrapper} key={item.get('id')} src={item.get('imgUrl')} alt='recommend banner'/>
          )
        })
      }
    </div>
  );
}

export default Topic;
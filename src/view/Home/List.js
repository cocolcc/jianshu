import { actionCreators } from '../../store/home';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from './ListItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles((theme) => ({
  infiniteScrollfooter: {
    color: theme.flat,
    fontSize: '12px',
    margin: '10px auto',
  },
  loadingList: {
    display: 'flex',
    justifyItems: 'flex-start',
    marginTop: '40px',
  }
}));

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articleList = useSelector(state => state.getIn(['home', 'articleList']));
  const articlePage = useSelector(state => state.getIn(['home', 'articlePage']));
  const addArticleListLoading = useSelector(state => state.getIn(['home', 'addArticleListLoading']));
  const articleListLoading = useSelector(state => state.getIn(['home', 'articleListLoading']));

  useEffect(() => {
    dispatch(actionCreators.fetchArticleListAction());
  }, [dispatch])

  function loadMoreList() {
    dispatch(actionCreators.fetchMoreArticleListAction(articlePage));
  };

  function showArticleListloading() {
    return (
      <div className={classes.loadingList}>
        <Box sx={{ width: 400, margin: '0 20px 0 0' }}>
          <Skeleton width='100%' height='60px'/>
          <Skeleton width='100%'/>
          <Skeleton width='100%'/>
          <Skeleton width='100%'/>
          <Skeleton width='100%'/>
        </Box>
        <Box sx={{ pt: 0.5 }}>
          <Skeleton variant="rectangular" width={210} height={118} sx={{ borderRadius: 1}}/>
        </Box>
      </div>
    );
  }

  if (articleListLoading) {
    return (
      <div>
        {showArticleListloading()}
        {showArticleListloading()}
        {showArticleListloading()}
      </div>
    );
  } else {
    return (
      <InfiniteScroll
        dataLength={articleList.size}
        next={loadMoreList}
        style={{overflow: 'hidden'}}
        hasMore={true}
        loader={
          addArticleListLoading ?
          <Box sx={{ width: 300, margin: '20px auto'}}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box> :
          <div className={classes.infiniteScrollfooter}>下拉获取更多数据</div>
        }
      >
      {
        articleList.map((item, index) => {
          return (
            <ListItem key={index} item={item} />
          )
        })
      }
      </InfiniteScroll>
    );
  }
}

export default List;
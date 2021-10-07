import { actionCreators } from '../../store/home';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from './ListItem';
import InfiniteScroll from "react-infinite-scroll-component";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { fromJS } from 'immutable';

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
  const searchTags = useSelector(state => state.getIn(['home', 'searchTags']));
  const articlePage = useSelector(state => state.getIn(['home', 'articlePage']));
  const addArticleListLoading = useSelector(state => state.getIn(['home', 'addArticleListLoading']));
  const articleListLoading = useSelector(state => state.getIn(['home', 'articleListLoading']));
  const [filteredArticleList, setFilteredArticleList] = useState(fromJS([]));

  useEffect(() => {

    dispatch(actionCreators.fetchArticleListAction());
  }, [dispatch])

  useEffect(() => {
    if (!searchTags.size) {
      setFilteredArticleList(articleList);
      return;
    } else {
      let tempArticleList = [];
      articleList.forEach((articleItem) => {
        let isMarkArticle = false;
        articleItem.get('tag').forEach((tagItem) => {
          if (!isMarkArticle && searchTags.indexOf(tagItem) > -1) {
            tempArticleList.push(articleItem);
            isMarkArticle = true;
          }
        })
      })
      setFilteredArticleList(fromJS(tempArticleList));
    }
  }, [searchTags, articleList])

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
        dataLength={filteredArticleList.size}
        next={loadMoreList}
        style={{overflow: 'hidden'}}
        hasMore={true}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
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
        filteredArticleList.map((item, index) => {
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
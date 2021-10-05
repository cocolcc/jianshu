import { actionCreators } from '../../store/home';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';
import InfiniteScroll from "react-infinite-scroll-component";

const List = () => {
  const dispatch = useDispatch();
  const articleList = useSelector(state => state.getIn(['home', 'articleList']));
  const articlePage = useSelector(state => state.getIn(['home', 'articlePage']));

  useEffect(() => {
    dispatch(actionCreators.fetchArticleListAction());
  }, [dispatch])

  function loadMoreList() {
    // 模拟返回接收list的时间
    setTimeout(() => {
      dispatch(actionCreators.fetchMoreArticleListAction(articlePage));
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={articleList.size}
      next={loadMoreList}
      style={{overflow: 'hidden'}}
      hasMore={true}
      loader={<h4>Loading...</h4>}
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

export default List;
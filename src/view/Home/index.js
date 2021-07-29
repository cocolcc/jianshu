import List from './List';
import Topic from './Topic';
import Writer from './Writer';
import { actionCreators } from '../../store/home';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '960px',
    margin: '20px auto',
  },
  homeLeftWrapper: {
    width: '720px',
    paddingRight:'30px',
  },
  homeLeftFooter: {
    color: theme.flat,
    fontSize: '13px',
    marginTop: '100px',
    marginBottom: '50px',
  },
  homeRightWrapper: {
    width: '280px',
  },
  ReadMoreBtn: {
    fontSize: '17px',
    color: '#fff',
    backgroundColor: '#a5a5a5',
    borderRadius: '20px',
    borderStyle: 'none',
    width: '100%',
    height: '40px',
    marginTop: '20px',
    cursor: 'pointer',
  }
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articlePage = useSelector(state => state.getIn(['home', 'articlePage']));
  function loadMoreList() {
    dispatch(actionCreators.fetchMoreArticleListAction(articlePage));
  }

  return(
    <div className={classes.homeWrapper}>
      <div className={classes.homeLeftWrapper}>
        <List />
        <button className={classes.ReadMoreBtn} onClick={loadMoreList}>阅读更多</button>
        <div className={classes.homeLeftFooter}>关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴 · 涂檬-原创插画社区</div>
      </div>
      <div className={classes.homeRightWrapper}>
        <Topic />
        <Writer />
      </div>
    </div>
  );
}

export default Home;
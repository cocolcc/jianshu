import List from './List';
import Topic from './Topic';
import Writer from './Writer';
import { actionCreators } from '../../store/home';
import { actionCreators as  headerActionCreators} from '../../store/header';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  homeWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1400px',
    // width: '960px',
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
  },
  scrollToTop: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: '40px',
    bottom: '40px',
    border: `1px solid ${theme.flat}`,
    height: '50px',
    width: '50px',
    cursor: 'pointer',
  }
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showScrollToTop = useSelector(state => state.getIn(['home', 'showScrollToTop']));
  useEffect(
    () => {
      dispatch(headerActionCreators.activeDiscoveryAction());
      function handleShowScroll() {
        if (window.pageYOffset > 500) {
          dispatch(actionCreators.taggleScrollTopAction(true));
        } else {
          dispatch(actionCreators.taggleScrollTopAction(false));
        }
      }
      window.addEventListener('scroll', handleShowScroll);
      return (() => {
        window.removeEventListener('scroll', handleShowScroll);
      });
    }, [dispatch]
  );

  function scrollToTop() {
    window.scrollTo(0,0);
  }

  return(
    <div className={classes.homeWrapper}>
      {showScrollToTop ? <div className={classes.scrollToTop} onClick={scrollToTop}><span className={'iconfont'}>&#xe85f;</span></div> : null}
      <div className={classes.homeLeftWrapper}>
        <List />
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
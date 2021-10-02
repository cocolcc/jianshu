import { NavLink } from 'react-router-dom';
import { actionCreators } from '../../store/home';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
  listWrapper: {

  },
  listItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    borderBottom: '1px solid #f0f0f0',
    paddingBottom: '20px',
    paddingTop: '20px',
  },
  listItemText: {
    paddingRight: '10px',
  },
  title: {
    wordWrap: 'break-word',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '1.5',
    padding: '0 2px 5px 0',
    textDecoration: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
  },
  desc: {
    wordWrap: 'break-word',
    fontSize: '12px',
    lineHeight: '24px',
    color: '#999',
    padding: '0 0 5px 0',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '20px',
  },
  footerItem: {
    color: theme.flat,
    marginRight: '10px',
  },
  footerSpan: {
    marginRight: '3px',
  },
  listItemImg: {
    width: '148px',
    height: '98px',
    borderRadius: '5px',
  }
}));

const List = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const articleList = useSelector(state => state.getIn(['home', 'articleList']));

  useEffect(() => {
    dispatch(actionCreators.fetchArticleListAction());
  }, [dispatch])
  return (
    <div className={classes.listWrapper}>
      {
        articleList.map((item, index) => {
          return (
            <div key={index} className={classes.listItemWrapper}>
              {item.get('imgUrl') && (<img className={classes.listItemImg} src={item.get('imgUrl')} alt='list img'/>)}
              <div className={classes.listItemText}>
                <NavLink className={classes.title} to={'/detail/' + item.get('id')}>{item.get('title')}</NavLink>
                <div className={classes.desc}>{item.get('desc')}</div>
                <div className={classes.footer}>
                  <div className={classes.footerItem}>
                    <span className={`iconfont ${classes.footerSpan}`} style={{color: theme.primary}}>&#xe604;</span>
                    <span>{item.get('diamondNum')}</span>
                  </div>
                  <div className={classes.footerItem}>
                    <span>{item.get('auther')}</span>
                  </div>
                  <div className={classes.footerItem}>
                    <span className={`iconfont ${classes.footerSpan}`}>&#xe633;</span>
                    <span>{item.get('commentsNum')}</span>
                  </div>
                  <div className={classes.footerItem}>
                    <span className={`iconfont ${classes.footerSpan}`}>&#xe602;</span>
                    <span>{item.get('likeNum')}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className={classes.title}>

      </div>

    </div>
  );
}

export default List;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../store/home";
import { makeStyles } from "@material-ui/core";

const useclassess = makeStyles((theme) => ({
  writersWrapper: {
    marginTop: '20px',
  },
  writersTitle: {
    color: theme.flat,
    fontSize: '14px',
    margin: '10px 0 10px',
  },
  writerItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
    display: 'flex',
  itemLeft: {
    display: 'flex',
    height: '48px',
    alignItems: 'center',
  },
  writerAvatar: {
    height: '48px',
    width: '48px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  nickname: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  info: {
    fontSize: '12px',
    color: theme.flat,
  },
  itemRight: {
    paddingTop: '10px',
    fontSize: '13px',
    color: '#42c02e',
  }
}));

const Writer = () => {
  const classes = useclassess();
  const recommendWriters = useSelector(state => state.getIn(['home', 'recommendWriters']));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.fetchRecommendWritersAction());
  }, [dispatch]);

  return (
    <div className={classes.writersWrapper}>
      <div className={classes.writersTitle}>推荐作者</div>
      {
        recommendWriters.map((item, index) => {
          return (
            <div className={classes.writerItem} key={index}>
              <div className={classes.itemLeft}>
                <img className={classes.writerAvatar} src={item.get('avatar_source')} alt='writer avatar' />
                <div>
                  <div className={classes.nickname}>{item.get('nickname')}</div>
                  <div className={classes.info}>写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 · {(item.get('total_likes_count')/1000).toFixed(1)}k喜欢</div>
                </div>
              </div>
              <div className={classes.itemRight}>+关注</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Writer;
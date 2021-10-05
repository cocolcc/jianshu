import { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useclassess = makeStyles((theme) => ({
  writerItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
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
    fontWeight: '800',
    color: theme.title,
    marginBottom: '10px',
  },
  info: {
    fontSize: '12px',
    color: theme.flat,
  },
  itemRight: {
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '13px',
    lineHeight: '18px',
    textAlign: 'center',
    color: theme.primary,
    height: '18px',
    width: '55px',
    border: `1.5px solid ${theme.primary}`,
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  followItemRight: {
    paddingTop: '5px',
    paddingBottom: '5px',
    fontSize: '13px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#fff',
    height: '18px',
    width: '55px',
    border: `1.5px solid ${theme.primary}`,
    background: theme.primary,
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  }
}));

const WriterListItem = (props) => {
  const classes = useclassess();
  const item = props.item;
  const [isFollowed, setIsFollowd] = useState(false);

  function handleClickFollow() {
    setIsFollowd(!isFollowed);
  }

  return (
    <div className={classes.writerItem}>
      <div className={classes.itemLeft}>
        <img className={classes.writerAvatar} src={item.get('avatar_source')} alt='writer avatar' />
        <div>
          <div className={classes.nickname}>{item.get('nickname')}</div>
          <div className={classes.info}>写了{(item.get('total_wordage') / 1000).toFixed(1)}k字 · {(item.get('total_likes_count')/1000).toFixed(1)}k喜欢</div>
        </div>
      </div>
      <div className={`${isFollowed ? classes.followItemRight : classes.itemRight}`} onClick={handleClickFollow}>关注</div>
    </div>
  );
}

export default WriterListItem;
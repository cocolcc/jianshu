import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { getImagePath } from '../../utils/getPath';

const useStyles = makeStyles((theme) => ({
  listItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
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
    color: theme.title,
    cursor: 'pointer',
  },
  desc: {
    wordWrap: 'break-word',
    fontSize: '12px',
    lineHeight: '24px',
    color: theme.flat,
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
    display: 'flex',
    alignItems: 'center',
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
  },
  notlike: {
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    backgroundImage: `url(${getImagePath('/static/heart_animation.png')})`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '2900%',
  },
  like: {
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    backgroundImage: `url(${getImagePath('/static/heart_animation.png')})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '2900%',
  },
  isLike: {
    animation: '$heart-burst .8s steps(28) 1',
  },
  '@keyframes heart-burst': {
    from: {
      backgroundPosition: 'left',
    },
    to: {
      backgroundPosition: 'right',
    }
  },
  likeNum: {
    color: '#e2264d',
  },
  notLikeNum: {
    color: theme.flat,
  },
  tagWrapper: {
    display: 'flex',
    alignItems: 'cebter'
  },
  tag: {
    color: theme.title,
    background: theme.flatBackground,
    borderRadius: '15px',
    marginRight: '10px',
    padding: '0 10px'
  }
}));

const ListItem = (props) => {
  const classes = useStyles();
  const item = props.item;
  const [isLike, setIsLike] = useState(false);

  function handleLike() {
    setIsLike(!isLike);
  }

  return (
    <div className={classes.listItemWrapper}>
      <img className={classes.listItemImg} src={ item.get('imgUrl') ? item.get('imgUrl') : getImagePath('/static/article_default_img.jpeg')} alt='list img'/> 
      <div className={classes.listItemText}>
        <NavLink className={classes.title} to={'/detail/' + item.get('id')}>{item.get('title')}</NavLink>
        <div className={classes.desc}>{item.get('desc')}</div>
        <div className={classes.footer}>
          <div className={classes.tagWrapper}>
            { item.get('tag') ? 
              item.get('tag').map((item, index) => {
                return (
                  <div key={index} className={classes.tag}>
                    { item }
                  </div>
                );
              }) : null
            }
          </div>
          <div className={classes.footerItem}>
            <span>{item.get('auther')}</span>
          </div>
          <div className={classes.footerItem}>
            <div className={`${isLike ? classes.like : classes.notlike} ${isLike ? classes.isLike : ''}`} onClick={handleLike}></div>
            <div className={`${isLike ? classes.likeNum : classes.notLikeNum}`}>{`${item.get('likeNum') + (isLike ? 1 : 0)}`}</div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default ListItem;
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/detail';
import { useEffect } from 'react';

const useStyles = makeStyles({
  detailWrapper: {
    width: '640px',
    margin: '0 auto',
  },
  title: {
    fontSize: '30px',
    fontWeight: '700',
    wordBreak: 'break-word',
    color: '#404040',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '40px'
  },
  detailImage: {
    width: '100%',
    marginBottom: '20px'
  },
  paragraph: {
    marginBottom: '20px',
    wordBreak: 'break-word',
    fontWeight: '400px',
    lineHeight: '1.8'
  }
});

const Detail = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(
    () => {
      const detailId = props.match.params.id;
      dispatch(actionCreators.fetchDetailAction(detailId));
    }, [dispatch, props.match.params.id]
  );
  const detail = useSelector(state => state.getIn(['detail', 'detail']));
  if (!detail) {
    return null;
  }
  return (
    <div className={classes.detailWrapper}>
      <div className={classes.title}>{detail.get('title')}</div> 
      {detail.get('imgUrl') ? <img className={classes.detailImage} src={detail.get('imgUrl')} alt='detailImage' /> : null}
      {
        detail.get('paragraph').map((item, index) => {
          return (
            <div className={classes.paragraph} key={index}>{item}</div>
          )
        })
      }
    </div>
  );
}

export default Detail;
import { makeStyles } from '@material-ui/core';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { actionCreators } from '../../store/writing';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionCreators as headerActionCreators} from '../../store/header';
// import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  writingWrapper: {
    width: '640px',
    margin: '40px auto',
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
  writingSubBtn: {
    color: '#fff',
    background: theme.primary,
    width: '80px',
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    border: '1px solid ' + theme.primary,
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '20px'
  },
}));

const Writing = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const article = useSelector(state => state.getIn(['writing', 'article']));

  useEffect(
    () => {
      dispatch(headerActionCreators.activeWritingAction());
    }, [dispatch]
  );

  const handleChangeArticle = () => (event) => {
    dispatch(actionCreators.storeArticleAction(event.target.value));
    dispatch(actionCreators.needLoadAction());
  }

  function handleClickSubmit() {
    dispatch(actionCreators.loadArticleAction(article));
  }
  
  return (
    <div className={classes.writingWrapper}>
      <div className={classes.title}>开始写文章吧！</div> 
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Empty"
        style={{ width: '100%', height: 400 }}
        value={article}
        onChange={handleChangeArticle()}
      />
      <div className={classes.writingSubBtn} onClick={handleClickSubmit}>提交</div>
    </div>
    
  );
}

export default Writing;
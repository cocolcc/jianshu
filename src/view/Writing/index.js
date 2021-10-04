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
    margin: '60px auto',
  },
  sendBtn: {
    top: '20px',
    right: '25px'
  },
  title: {
    width: '100%',
    height: 400,
    borderStyle: 'none',
    outline: 'none'
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
  const title = useSelector(state => state.getIn(['writing', 'title']));
  const body = useSelector(state => state.getIn(['writing', 'body']));
    
  useEffect(
    () => {
      dispatch(headerActionCreators.activeWritingAction());
    }, [dispatch]
  );

  const handleChangeTitle = () => (event) => {
    dispatch(actionCreators.storeTitleAction(event.target.value));
    dispatch(actionCreators.needLoadAction());
  }

  const handleChangeBody = () => (event) => {
    dispatch(actionCreators.storeBodyAction(event.target.value));
    dispatch(actionCreators.needLoadAction());
  }

  // function handleClickSubmit() {
  //   dispatch(actionCreators.loadArticleAction(article));
  // }
  
  return (
    <div className={classes.writingWrapper}>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="输入标题..."
        style={{ width: '100%', height: 80, borderStyle: 'none', outline: 'none', fontSize: 25}}
        value={title}
        onChange={handleChangeTitle()}
      />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="输入正文..."
        style={{ width: '100%', height: 400, borderStyle: 'none', outline: 'none', fontSize: 18}}
        value={body}
        onChange={handleChangeBody()}
      />
      {/* <div className={classes.writingSubBtn} onClick={handleClickSubmit}>提交</div> */}
    </div>
  );
}

export default Writing;
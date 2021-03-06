import { makeStyles } from '@material-ui/core';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { actionCreators } from '../../store/writing';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, forwardRef, useState } from 'react';
import { useHistory } from 'react-router';
import { actionCreators as headerActionCreators } from '../../store/header';
import * as URI from '../../uri';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
  scrollToTop: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    right: '40px',
    bottom: '40px',
    color: '#fff',
    background: theme.primary,
    height: '50px',
    width: '50px',
    cursor: 'pointer',
  }
}));

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Writing = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [titleVarify, setTitleVarify] = useState(true);
  const [bodyVarify, setBodyVarify] = useState(true);
  const title = useSelector(state => state.getIn(['writing', 'title']));
  const body = useSelector(state => state.getIn(['writing', 'body']));
  const uploadLoading = useSelector(state => state.getIn(['writing', 'uploadLoading']));
  const isUploaded = useSelector(state => state.getIn(['writing', 'isUploaded']));

  useEffect(
    () => {
      dispatch(headerActionCreators.activeWritingAction());
    }, [dispatch]
  );

  useEffect(
    () => {
      if (title) {
        setTitleVarify(true);
      }
    }, [title]
  );

  useEffect(
    () => {
      if (body) {
        setBodyVarify(true);
      }
    }, [body]
  );

  const handleChangeTitle = () => (event) => {
    dispatch(actionCreators.storeTitleAction(event.target.value));
    dispatch(actionCreators.needUploadAction());
  }

  const handleChangeBody = () => (event) => {
    dispatch(actionCreators.storeBodyAction(event.target.value));
    dispatch(actionCreators.needUploadAction());
  }

  function handleClickPublish() {
    if (!title) {
      setTitleVarify(false);
      return;
    }
    if (!body) {
      setBodyVarify(false);
      return;
    }
    dispatch(actionCreators.uploadArticleAction({ title, body }));
    setTimeout(() => {
      history.push(URI.HOME);
    }, 3000);
  }
  
  return (
    <div className={classes.writingWrapper}>
      {!titleVarify &&
        <Stack sx={{ width: '680px' }} spacing={2}>
          <MuiAlert severity="error">??????????????????</MuiAlert>
        </Stack>
      }
      {!bodyVarify &&
        <Stack sx={{ width: '680px' }} spacing={2}>
          <MuiAlert severity="error">??????????????????</MuiAlert>
        </Stack>
      }
      <Snackbar open={uploadLoading} autoHideDuration={3000}>
        <Alert severity="info" sx={{ width: '200px' }}>
          ??????????????????...
        </Alert>
      </Snackbar>
      <Snackbar open={isUploaded} autoHideDuration={3000}>
        <Alert severity="success" sx={{ width: '200px' }}>
          ??????????????????!
        </Alert>
      </Snackbar>
      <div className={classes.scrollToTop} onClick={handleClickPublish}>??????</div>
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="????????????..."
        style={{ width: '100%', height: 80, borderStyle: 'none', outline: 'none', fontSize: 25, padding: '20px', resize: 'none'}}
        value={title}
        onChange={handleChangeTitle()}
      />
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="????????????..."
        style={{ width: '100%', height: 600, borderStyle: 'none', outline: 'none', fontSize: 18, background: '#F4F9F9', borderRadius: '15px', padding: '20px', resize: 'none'}}
        value={body}
        onChange={handleChangeBody()}
      />
    </div>
  );
}

export default Writing;
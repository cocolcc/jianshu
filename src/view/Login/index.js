import { makeStyles } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../store/login';
import { useEffect } from 'react';
import { actionCreators as headerActionCreators } from '../../store/header';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import * as URI from '../../uri'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  loginCardWrapper: {
    maxWidth: 345,
    margin: '40px auto',
  },
  loginSubBtn: {
    color: theme.primary,
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    textAlign: 'center',
    border: '1px solid ' + theme.primary,
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  loginTitle: {
    color: theme.primary,
    margin: '20px auto',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '300',
  },
  errMsg: {
    color: theme.warnning,
    margin: '20px auto',
  }
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const account = useSelector(state => state.getIn(['login', 'account']));
  const password = useSelector(state => state.getIn(['login', 'password']));
  const isLogin = useSelector(state => state.getIn(['login', 'isLogin']));
  const errMsg = useSelector(state => state.getIn(['login', 'errMsg']));
  const showPassword = useSelector(state => state.getIn(['login', 'showPassword']));

  useEffect(() => {
    dispatch(headerActionCreators.activeLoginAction());
  }, [dispatch]);
  
  if (isLogin) {
    history.push(URI.HOME);
  }

  const handleAccountChange = () => (event) => {
    dispatch(actionCreators.storeAccountAction(event.target.value));
  };

  const handlePasswordChange = () => (event) => {
    dispatch(actionCreators.storePasswordAction(event.target.value));
  };

  function handleClickShowPassword() {
    dispatch(actionCreators.taggleShowPasswordAction());
  };

  const handleMouseDownPassword = () => (event) => {
    event.preventDefault();
  };

  function handleClickSubmit() {
    const info = {
      account,
      password
    }
    dispatch(actionCreators.fetchResultAction(info));
  }

  return (
    <div>
      <div className={classes.loginCardWrapper}>
        <div className={classes.loginTitle}>??????</div>
        <FormControl sx={{ width: '100%', margin: '10px auto'}} variant="outlined">
          <InputLabel htmlFor="login-account">??????</InputLabel>
          <OutlinedInput
            id="login-account"
            value={account}
            onChange={handleAccountChange()}
            label="??????"
          />         
        </FormControl>
        <FormControl sx={{ width: '100%', margin: '10px 0 20px 0'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">??????</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange()}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="??????"
          /> 
        </FormControl>
        <div className={classes.loginSubBtn} onClick={handleClickSubmit}>??????</div>
        {
          errMsg &&
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">{errMsg}</Alert>
          </Stack>
        }
      </div>
    </div>
  );
}

export default Login;
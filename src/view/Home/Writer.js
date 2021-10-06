import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../store/home";
import { makeStyles } from "@material-ui/core";
import WriterListItem from "./WriterListItem";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const useclassess = makeStyles((theme) => ({
  writersWrapper: {
    marginTop: '20px',
  },
  writersTitle: {
    color: theme.title,
    fontWeight: '600',
    fontSize: '14px',
    margin: '60px 0 20px',
  }
}));

const Writer = () => {
  const classes = useclassess();
  const recommendWriters = useSelector(state => state.getIn(['home', 'recommendWriters']));
  const recommendWritersListLoading = useSelector(state => state.getIn(['home', 'recommendWritersListLoading']));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.fetchRecommendWritersAction());
  }, [dispatch]);

  if (recommendWritersListLoading) {
    return (
      <Box sx={{ width: 300, margin: '40px 20px 0 0' }}>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
        <Skeleton width='100%' height='60px'/>
      </Box>
    );
  } else {
    return (
      <div className={classes.writersWrapper}>
        <div className={classes.writersTitle}>推荐作者</div>
        {
          recommendWriters.map((item, index) => {
            return (
              <WriterListItem item={item} key={index}/>
            )
          })
        }
      </div>
    ) 
  }
}

export default Writer;
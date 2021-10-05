import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../store/home";
import { makeStyles } from "@material-ui/core";
import WriterListItem from "./WriterListItem";

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
            <WriterListItem item={item} key={index}/>
          )
        })
      }
    </div>
  )
}

export default Writer;
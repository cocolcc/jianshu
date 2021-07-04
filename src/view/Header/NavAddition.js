import style from './style.module.css';
import className from 'classnames';

const regBtnClassNames = className(style.btn, style.reg);
const writtingClassNames = className(style.btn, style.writting);
const NavAddition = () => {
  return (
    <div className={style.navAddition}>
      <div className={regBtnClassNames}>注册</div>
      <div className={writtingClassNames}>
        <span className='iconfont'>&#xe6eb;</span>
        {' 写文章'}
      </div>
    </div>
  );
}

export default NavAddition;
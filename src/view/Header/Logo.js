import style from './style.module.less'
import getImagePath from '../../utils/getImagePath';

const Logo = () => {
  return (
    <div className={style.logo}>
      <img className={style.logoImg} src={ getImagePath('/static/logo.png') } alt='logo' />
    </div>
  );
}

export default Logo;
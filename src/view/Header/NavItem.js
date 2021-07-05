import style from './style.module.less';
import className from 'classnames';

const NavItem = (props) => {
  const { children, isActive, isFlat } = props;
  const navItemClassNames = className(style.navItem, isActive ? style.active : '', isFlat ? style.flat: '');
  return (
    <div className={navItemClassNames} >{children}</div>
  );
}

export default NavItem;
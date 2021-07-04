import style from './style.module.less';
import className from 'classnames';

const NavItem = (props) => {
  const { children, isActive, isFlat } = props;
  const navItemClassNames = className(style.navItem, { [style.active]: isActive }, { [style.flat]: isFlat });
  return (
    <div className={navItemClassNames} >{children}</div>
  );
}

export default NavItem;
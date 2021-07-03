import style from './style.module.css';
import className from 'classnames';

const NavItem = (props) => {
  const { navItem, isActive, isFlat } = props;
  const navItemClassNames = className(style.navItem, { [style.active]: isActive }, {[style.flat]: isFlat });
  return (
    <div className={ navItemClassNames } >{navItem}</div>
  );
}

export default NavItem;
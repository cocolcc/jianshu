import style from './style.module.css';
import NavItem from './NavItem';
import NavSearch from './NavSearch';

const navLeftItems = [
  { navItem: '发现', isActive: true },
  { navItem: 'IT技术'},
  { navItem: '关注'},
  { navItem: '消息' },
  { navItem: <NavSearch />}
];

const navRightItems = [
  { navItem: 'Aa', isFlat: true },
  { navItem: '登录'}
];

const Nav = (props) => {
  return (
    <div className={style.nav}>
      {props.children}
      <div className={ style.left }>
      {navLeftItems.map((navLeftItem, index) => {
          return (
            <NavItem
              key={index}
              navItem={navLeftItem.navItem}
              isActive={navLeftItem.isActive}
            />
          )
        })
      }
      </div>
      <div className={ style.right }>
      {navRightItems.map((navRightItem, index) => {
          return (
            <NavItem
              key={index}
              navItem={navRightItem.navItem}
              isFlat={navRightItem.isFlat}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default Nav;
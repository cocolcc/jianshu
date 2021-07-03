import style from './style.module.css';
import NavItem from './NavItem';
import NavSearch from './NavSearch';

const Nav = () => {
  return (
    <div className={style.nav}>
      <div className={style.navLeft}>
        <NavItem isActive={true}>发现</NavItem>
        <NavItem>IT技术</NavItem>
        <NavItem>关注</NavItem>
        <NavItem>消息</NavItem>
        <NavSearch />
      </div>
      <div className={style.navRight}>
        <NavItem isFlat={true}>Aa</NavItem>
      </div>
    </div>
  )
}

export default Nav;
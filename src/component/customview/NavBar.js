import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavDropdown,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import "../../css/customview/NavBar.css"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.navToggle = this.navToggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.toggleNavItem1 = this.toggleNavItem1.bind(this);
    this.state = {
      dropdownOpen: false
    };

  }

  navToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  toggleNavItem1() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarToggler onClick={this.navToggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="container-fluid" navbar>
              <NavItem
                className={"ml-auto mr-auto " + (this.props.currenPage === 'mainPage' ? 'chosen' : null)}>
                <a href="/">Главная</a>
              </NavItem>
              <Dropdown className={"ml-auto mr-auto " + (this.props.currenPage === 'aboutUs' ? 'chosen' : null)}
                        onMouseEnter={this.toggleNavItem1}
                        onMouseLeave={this.toggleNavItem1}
                        isOpen={this.state.dropdownOpen}>
                <a href="/aboutUs">
                  <div className='container-fluid'>
                    О нас
                    <DropdownToggle nav a className='p-0'>
                    </DropdownToggle>
                  </div>
                </a>
                <DropdownMenu className='my-0 py-0'>
                  <DropdownItem href="/aboutUs">О РРС и исследовании</DropdownItem>
                  <DropdownItem href="/aboutUs">Экспертный совет и партнеры</DropdownItem>
                  <DropdownItem href="/aboutUs">Положение и методика</DropdownItem>
                  <DropdownItem href="/aboutUs">Часто задаваемые вопросы </DropdownItem>
                  <DropdownItem href="/aboutUs">Обратная связь </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem
                className={"ml-auto mr-auto " + (this.props.currenPage === 'conferences' ? 'chosen' : null)}>
                <a href="/conferences">Конференции</a>
              </NavItem>
              <NavItem
                className={"ml-auto mr-auto " + (this.props.currenPage === 'rates' ? 'chosen' : null)}>
                <a href="/rates">Рейтинги</a>
              </NavItem>
              <NavItem
                className={"ml-auto mr-auto " + (this.props.currenPage === 'publications' ? 'chosen' : null)}>
                <a href="/publications">Публикации</a>
              </NavItem>
              <NavItem
                className={"ml-auto mr-auto " + (this.props.currenPage === 'news' ? 'chosen' : null)}>
                <a href="/news">Новости</a>
              </NavItem>
              <NavItem
                className={"ml-auto mr-auto " + (this.props.currenPage === 'amenities' ? 'chosen' : null)}>
                <a href="/amenities">Услуги</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

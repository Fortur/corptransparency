import React from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "../../css/customview/footer.css";
import VKLogo from '../../img/vk.png';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.navToggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className='footer'>
        <div className='container-fluid'>
          <div className='row align-content-around'>
            <div className='col-11'>
              <p className='mb-0'>© 2017 Да— Стратегия</p>
            </div>
            <div className='col-1 text-center'>
              <a href="https://vk.com/dastrateg">
                <img src={VKLogo}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

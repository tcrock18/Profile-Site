import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Navigation extends Component {
    state = {
        isOpen: false
      }

      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        })
      }

  render() {
    return (
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/home">TANNER CROCKETT</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="primary" nav caret>
                  Stalk Me
                </DropdownToggle>
                <DropdownMenu color="primary" right>
                
                  <DropdownItem>
                    <NavLink href="/contact">Direct Contact</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://github.com/tcrock18">GitHub</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://linkedin.com/in/tannercrockett">LinkedIn</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://www.instagram.com/tcrock18/">Instagram</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://facebook.com/tanner.t.crockett">Facebook</NavLink>
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
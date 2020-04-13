import React from "react";

import { Navbar, NavbarBrand, Form } from "reactstrap";
import { FormGroup, Input } from "reactstrap";

import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./TopNavBar.scss";

function TopNavBar() {
  const hazelNutIcon = (
    <FontAwesomeIcon icon={faLemon} size={"2x"} color={"white"} />
  );

  const welcomeUser = <span>Welcome, HGO User</span>;

  // const welcomeLabel = (
  //   <span id='brand-title'>
  //     {hazelNutIcon}&nbsp;&nbsp;{welcomeUser}
  //   </span>
  // );

  const welcomeLabel = (
    <ul>
      <li className='header-format brand-title'>{hazelNutIcon}</li>
      <li className='header-format brand-title'>&nbsp;&nbsp;{welcomeUser}</li>
    </ul>
  );

  return (
    <>
      <Navbar id='hgo-navbar'>
        <NavbarBrand>{welcomeLabel}</NavbarBrand>
        <Form inline>
          <FormGroup>
            <Input
              type='search'
              name='search'
              className='searchBox'
              id='search-box-id'
              placeholder='Type to search...        &#128269;'
              bsSize='sm'
            />
          </FormGroup>
        </Form>
      </Navbar>
    </>
  );
}

export default TopNavBar;

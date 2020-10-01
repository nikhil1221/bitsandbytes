import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
function CategoriesDropDown() {
  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          id="dropdownMenuButton"
          style={{ border: "none" }}
        >
          <i className="fa fa-list-alt" />
          &nbsp Categories
        </DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuButton">
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Art
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Current & Affairs
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Entertainment
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Fashion
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Heath & Fitness
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
            Travel
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default CategoriesDropDown;

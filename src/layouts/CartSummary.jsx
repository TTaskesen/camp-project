import React from "react";
import { Dropdown } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Diller">
        <Dropdown.Menu>
          <Dropdown.Item>Türkçe</Dropdown.Item>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
          <Dropdown.Item>Français</Dropdown.Item>
          <Dropdown.Item>Makedonian</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

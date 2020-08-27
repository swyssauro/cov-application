import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar fixed="bottom">
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <a href="/">why cov_</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  );
}
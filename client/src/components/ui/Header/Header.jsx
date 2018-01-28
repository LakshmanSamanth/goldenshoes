import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.css";

import { categories } from "../../../config.js";

import SubHeader from "../SubHeader/SubHeader";
import Logo from "../Logo/Logo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: "" };
  }

  renderContent() {
    return [
      <li key="account" style={{ margin: "0 10px" }}>
        <a href="/auth/google">Account</a>
      </li>,
      <li key="likes" style={{ margin: "0 10px" }}>
        <Link onClick={() => this.activeGender("")} to="/likes">
          LIKES
        </Link>
      </li>,
      <li key="baset" style={{ margin: "0 10px" }}>
        <Link onClick={() => this.activeGender("")} to="/basket">
          BASKET
        </Link>
      </li>
    ];
  }

  activeGender(gender) {
    let men = document.querySelector(".menTab").classList;
    let women = document.querySelector(".womenTab").classList;
    gender = this.state.gender === gender ? "" : gender;
    this.setState({ gender });
    if (gender === "mens") {
      men.add("active");
      women.remove("active");
    } else if (gender === "womens") {
      women.add("active");
      men.remove("active");
    } else {
      men.remove("active");
      women.remove("active");
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container">
            <ul>
              <li onClick={() => this.activeGender("")}>
                <Logo logo="GoldenShoes" to="/" />
              </li>
              <li
                className="womenTab"
                onClick={() => this.activeGender("womens")}
              >
                <a>WOMEN</a>
              </li>
              <li className="menTab" onClick={() => this.activeGender("mens")}>
                <a>MEN</a>
              </li>
            </ul>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
        {this.state.gender ? (
          <SubHeader gender={this.state.gender} categories={categories} />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Navbar, Nav, Icon, Dropdown } from "rsuite";
import styles from "./Appbar.module.scss";
import { push } from "../../services/router/routerAction";

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center", background: "#2E4053" }}
          >
            <Icon
              icon={expand ? "angle-left" : "angle-right"}
              size="lg"
              style={{ color: "#fcb43a" }}
            />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class Appbar extends React.Component {
  state = {
    client: null
  };

  componentDidMount() {}

  handleSelectMenu = () => {
    setTimeout(() => {}, 1000);
  };

  render() {
    const { expand, onToggle } = this.props;
    return (
      <div>
        <Navbar
          style={{
            position: "fixed",
            width: "100%",
            zIndex: "10",
            paddingRight: "3rem",
            background: "#2E4053"
          }}
        >
          <Navbar.Body>
            <Nav>
              <NavToggle expand={expand} onChange={onToggle} />
            </Nav>
            <Nav>
              <div className={styles.titleBox}>
                <span
                  className={classNames(
                    "d-flex justify-content-between",
                    styles.title
                  )}
                >
                  <div style={{ padding: 10 }}>Dropdown</div>
                  <div>
                    <Dropdown title="Friendly">
                      <Dropdown.Item icon={<Icon icon="home" size="lg" />}>
                        &nbsp; Friendly
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </span>
              </div>
            </Nav>

            <Nav pullRight className={styles.nav}>
              <Dropdown
                style={{
                  width: "auto",
                  textAlign: "right",
                  marginRight: 22
                }}
                title="Friendly Engine"
                icon={<Icon icon="user-circle-o" />}
              >
                <Dropdown.Item
                  icon={<Icon icon="user" />}
                  onClick={() => this.props.push("/auth/profile")}
                >
                  Profile
                </Dropdown.Item>

                <Dropdown.Item
                  icon={<Icon icon="folder-open" />}
                  className="pr-2"
                  onClick={() => this.props.push("/auth/plans")}
                >
                  Package
                </Dropdown.Item>
                <Dropdown.Item
                  icon={<Icon icon="sign-out" />}
                  onSelect={this.handleSelectMenu}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown>
            </Nav>
          </Navbar.Body>
        </Navbar>
      </div>
    );
  }
}

export default connect(null, {
  push
})(Appbar);

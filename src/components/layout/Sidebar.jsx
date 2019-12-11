import React from "react";
import { Sidenav, Nav, Icon, Tooltip, Whisper, Dropdown } from "rsuite";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { push } from "../../services/router/routerAction";
import styles from "./Sidebar.module.scss";

const NavItem = ({
  expand,
  name,
  path,
  icon,
  eventKey,
  sidebar,
  hasAnyRoles,
  authUser
}) => {
  if (sidebar) {
    return (
      <Whisper
        placement="right"
        trigger="hover"
        speaker={
          <Tooltip style={expand ? { display: "none" } : {}}>{name}</Tooltip>
        }
      >
        <Nav.Item
          className={styles.navhover}
          componentClass={Link}
          eventKey={eventKey}
          icon={<Icon icon={icon} />}
          to={path}
        >
          {name}
        </Nav.Item>
      </Whisper>
    );
  }
  return null;
};

const Sidebar = props => {
  const { expand, routes: unSortedRoutes } = props;
  const routes = _.sortBy(unSortedRoutes, "key");
  return (
    <div
      style={{
        position: "fixed",
        width: props.expand ? 250 : "auto",
        height: "100%",
        zIndex: "10",
        top: 0,
        bottom: 0,
        overflow: expand ? "auto" : ""
      }}
      id={styles.scroll}
    >
      <Sidenav
        expanded={props.expand}
        defaultOpenKeys={["3"]}
        defaultactivekey="2"
        appearance="subtle"
        className={styles.sidenav}
      >
        <Sidenav.Header style={{ width: "100%" }}></Sidenav.Header>
        <Sidenav.Body>
          <Nav
            className={
              expand ? styles.sidebarDropdown : styles.sidebarDropdown1
            }
          >
            {_.map(routes, route => {
              if (route.nested) {
                return (
                  <Whisper
                    key={route.key}
                    placement="right"
                    trigger="hover"
                    speaker={
                      <Tooltip style={expand ? { display: "none" } : {}}>
                        {route.name}
                      </Tooltip>
                    }
                  >
                    <Dropdown
                      eventKey={route.key}
                      title={route.name}
                      icon={<Icon icon="magic" />}
                    >
                      {_.map(route.subRoutes, (r, index) => {
                        return (
                          <Dropdown.Item
                            key={r.key}
                            eventKey={`${r.key}-${index}`}
                            onClick={() => props.push(r.path)}
                          >
                            {r.name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown>
                  </Whisper>
                );
              }
              return (
                <NavItem {...route} expand={expand} eventKey={route.key} />
              );
            })}
          </Nav>
        </Sidenav.Body>
        {expand ? (
          <div className={styles.footer}>
            <p>
              Copyright &#9400; &nbsp;
              {moment().format("YYYY")}
              &nbsp;All rights reserved.
              <br />
              POWERED BY Achromex
            </p>
          </div>
        ) : (
          ""
        )}
      </Sidenav>
    </div>
  );
};

export default connect(null, { push })(Sidebar);

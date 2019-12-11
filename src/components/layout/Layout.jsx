import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Header, Content, Sidebar as RSSidebar } from "rsuite";
import Appbar from "../appbar/Appbar";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.scss";
import Route from "../../routes/routes";
import Engine from "../../pages/engine/Engine";

const Layout = props => {
  const [expand, setExpand] = useState(false);

  let routes;

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <RSSidebar
        width={expand ? 250 : 56}
        collapsible
        className={styles.rssSidebar}
      >
        <Sidebar expand={expand} routes={routes} />
      </RSSidebar>

      <Container>
        <Header>
          <Appbar onToggle={() => setExpand(!expand)} expand={expand} />
        </Header>

        <Content className={styles.layoutContent}>
          <Switch>{/* <Route path="/engine" compnent={Engine} /> */}</Switch>
        </Content>
      </Container>
    </Container>
  );
};

export default connect(null, null)(Layout);

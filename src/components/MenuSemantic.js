import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import classes from "./MenuSemantic.module.css";

export default class MenuSemantic extends Component {
  state = { activeItem: "bio" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ height: "100vh" }}>
        <Grid columns={2} stretched style={{ height: "100vh" }}>
          <Grid.Column width={4} style={{ height: "100vh" }}>
            <Menu
              fluid
              vertical
              tabular
              style={{
                height: "100%",
                paddingTop: "120px",
                paddingBottom: "50px",
                verticalAlign: "middle",
              }}
            >
              <Menu.Item
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
                style={{ fontSize: "30px", color: "green" }}
              />

              <Menu.Item
                name="Stats"
                active={activeItem === "Stats"}
                onClick={this.handleItemClick}
                style={{ fontSize: "30px", color: "green" }}
              />
              <Menu.Item
                name="Add"
                active={activeItem === "Add"}
                onClick={this.handleItemClick}
                style={{ fontSize: "30px", color: "green" }}
              />
              <Menu.Item
                name="Settings"
                active={activeItem === "Settings"}
                onClick={this.handleItemClick}
                style={{ fontSize: "30px", color: "green" }}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12} style={{ height: "100vh" }}>
            <Grid.Row stretched width={12}>
              <Segment
                style={{
                  paddingTop: "50px",
                  paddingLeft: "50px",
                }}
              >
                <div className={classes.divdir}>Read Book!</div>
                <div className={classes.divdir}>Read Book!</div>
                <div className={classes.divdir}>Read Book!</div>
                <div className={classes.divdir}>Read Book!</div>
                <div className={classes.divdir}>Read Book!</div>
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

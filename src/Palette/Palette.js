import React, { Component } from "react";
import "./Palette.css";
import { SketchPicker } from "react-color";
import { Button } from "react-bootstrap";
import Color from "./../Color/Color";
import Modal from "./../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

export default class Palette extends Component {
  state = {
    defaultColor: "#FFFC32",
    // currentColor: "",
    showModal: false,
    colors: [],
    // colors: [{ id: 1, color: "#FFFC32" }],
  };

  componentDidMount = () => {};

  handleChangeComplete = (el) => {
    const colors = [...this.state.colors];
    colors.push({ id: this.state.colors.length + 1, color: el.hex });
    this.setState({ colors, currentColor: el.hex });
    this.closeModalHandle();
    console.log("Modal closed");
  };

  handleDeleteColor = (id) => {
    console.log("Color with id - " + id + " is going to be deleted");
    const colors = [...this.state.colors];
    const index = colors.findIndex((i) => i.id === id);
    const newColors = colors.splice(index, 1);
    console.log("New colors: ", newColors);
  };

  showModalHandle = () => {
    // Adds a default color when clicked for the first time.
    if (this.state.colors.length === 0) {
      const newColor = [...this.state.colors];
      newColor.push({ id: 1, color: this.state.defaultColor });
      this.setState({ colors: [...newColor] });
    }

    this.setState({
      showModal: true,
    });
  };

  closeModalHandle = () => {
    this.setState({
      showModal: false,
    });
    // console.log("Current color: ", this.state.currentColor);
  };

  render() {
    const colors = this.state.colors;

    return (
      <div className="colorPickerContainer">
        <div className="colorCollectionContainer">
          {colors.map((newColor) => {
            // console.log("Map: ", newColor.id, newColor.color);
            return (
              <Color
                colorChanged={this.handleChangeComplete}
                colorDeleted={this.handleDeleteColor}
                id={newColor.id}
                newStyle={newColor.color}
              />
            );
          })}
        </div>

        <div>
          <Button className="addBtn" onClick={this.showModalHandle}>
            Добавить цвет
          </Button>
        </div>
        <Backdrop
          show={this.state.showModal}
          closeModal={this.closeModalHandle}
        ></Backdrop>
        <Modal show={this.state.showModal}>
          <SketchPicker
            color={this.state.currentColor}
            onChangeComplete={this.handleChangeComplete}
            // onChange={this.test}
          />
        </Modal>
      </div>

      // <PhotoshopPicker
      //     color={this.state.background}
      //     onChangeComplete={this.handleChangeComplete}
      //   />
    );
  }
}

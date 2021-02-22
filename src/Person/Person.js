import React, { Component } from "react";
import "./Person.css";
import { Form, Button, Image, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

export default class Person extends Component {
  constructor(props) {
    super(props);
    this.textAreaRef = React.createRef();
  }

  state = {
    person: {
      name: "",
      surname: "",
      patronymic: "",
    },
    profileImg:
      "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg",
  };

  imageHandler = (e) => {
    // const reader = new FileReader();
    // reader.onload = () => {
    //   if (reader.readyState === 2) {
    //     this.setState({
    //       profileImg: reader.result,
    //     });
    //   }
    //   reader.readAsDataURL(e.target.files[0]);
    // };
    // console.log("Image has been added:" + reader);
    // console.log("Image event:");
    // console.dir(e);
  };

  handleChange = ({ target: input }) => {
    console.log(input.value);
    // console.log(e.currentTarget.value);
    const person = { ...this.state.person };
    person[input.name] = input.value;
    this.setState({ person });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const person = { ...this.state.person };
    // console.dir(person);
    const { data: post } = await axios.post(
      "https://test-job.pixli.app/send.php",
      JSON.stringify(person)
    );
    this.textAreaRef.current.value = JSON.stringify(post);
  };

  handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
    }
  };

  componentDidMount = () => {
    "Testing refs...";
  };

  render() {
    const { person } = this.state;

    return (
      <div className="Container">
        <Form
          className="personData"
          onSubmit={(e) => this.handleSubmit(e)}
          action="send_data"
        >
          <Form.Group controlId={Math.random()}>
            <Form.Label className="inputFields">Имя</Form.Label>
            <Form.Control
              name="name"
              value={person.name}
              type="text"
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>

          <Form.Group controlId={Math.random()}>
            <Form.Label className="inputFields">Фамилия</Form.Label>
            <Form.Control
              name="surname"
              value={person.surname}
              type="text"
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>

          <Form.Group controlId={Math.random()}>
            <Form.Label className="inputFields">Отчество</Form.Label>
            <Form.Control
              name="patronymic"
              value={person.patronymic}
              type="text"
              placeholder=""
              onChange={(e) => this.handleChange(e)}
            />
          </Form.Group>

          <span>Фото</span>
          <Image
            ref={this.myRef_2}
            onClick={(e) => this.imageHandler(e)}
            className="profileImg"
            src={this.state.profileImg}
            rounded
          />

          <input
            className="imageUpload"
            type="file"
            accept="image/*"
            multiple="false"
            onChange={this.handleImageUpload}
            multiple={false}
          />

          <Button className="submitBtn" variant="primary" type="submit">
            Сохранить
          </Button>
        </Form>

        <span>Response</span>
        <div>
          {/* <InputGroup size="lg">
            <FormControl />
          </InputGroup> */}
          <textarea
            ref={this.textAreaRef}
            id="responseArea"
            disabled
          ></textarea>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../App.css";

class Form extends Component {
  state = {
    ...this.returnStateObject(),
  };
  returnStateObject() {
    if (this.props.currentIndex === -1) {
      return {
        name: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        hobbies: "",
      };
    } else {
      return this.props.list[this.props.currentIndex];
    }
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list !== this.props.list
    ) {
      this.setState({ ...this.returnStateObject() });
      console.log(prevProps, this.props);
    }
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Form</h1>
        <div className="card">
          <form onSubmit={this.handleSubmit} className="card-body">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter the name"
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Gender</label>
              <div
                className="col-sm-2"
                style={{ marginLeft: "-18px !important" }}
              >
                <input
                  name="gender"
                  type="radio"
                  value="Male"
                  className="form-check-input"
                  onChange={this.handleInputChange}
                  required
                />
                <label className="form-check-label">Male</label>
                <input
                  name="gender"
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  onChange={this.handleInputChange}
                  required
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">DOB</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="date"
                  name="dob"
                  value={this.state.dob}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 com-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter the email address"
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Phone </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  placeholder="Enter the phone number"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Hobbies </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter the hobbies"
                  name="hobbies"
                  value={this.state.hobbies}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;

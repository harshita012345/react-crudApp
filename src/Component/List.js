import React, { Component } from "react";
import Form from './Form';

class List extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('employee') == null)
            localStorage.setItem('employee', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('employee'))
    }

    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1);
        localStorage.setItem('employee', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex === -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('employee', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    render() {
        return (
            <div style={{ textAlign: "center" }} className="container">
                <Form
                    currentIndex={this.state.currentIndex}
                    list={this.state.list}
                    onAddOrEdit={this.onAddOrEdit}
                />
                <h1>Table Data</h1>
                <table style={{ display: 'inline-table' }} border="1" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Hobbies</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.hobbies}</td>
                                <td><button onClick={() => this.handleEdit(index)} className="btn btn-primary">Edit</button></td>
                                <td><button onClick={() => this.handleDelete(index)} className="btn btn-danger"> Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default List;
import React, {Component} from 'react';
import {Button, Form, Container} from 'react-bootstrap';
import StudentList from './StudentList'


class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentDetails: {
                studentName: '',
                studentAge: '',
                studentCourse: '',
                studentPhoneNumber: '',
                studentEmail: ''
            },
            studentList: []
        }
    }

    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({
            studentDetails: {
            ...this.state.studentDetails,
            [e.target.name]: e.target.value
        }})
    }

    handleSubmit = () => {
        this.setState({
            ...this.state,
            studentList: [
                ...this.state.studentList,
                this.state.studentDetails
            ]
        })
        
    }

    render() {
        return (
            <Container>
                <div className='text-center'>
                <h5>Welcome to student Page</h5>
                <h6>please enter the student Details</h6>
                </div>
                <Form>
                    <Form.Group className="mb-3" controlId="formStudentName">
                        <Form.Label>Student Name</Form.Label>
                        <Form.Control type="text" name="studentName" placeholder="Enter your name" onChange={(e) => this.handleOnChange(e)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStudentAge">
                        <Form.Label>Student Age</Form.Label>
                        <Form.Control type="text" name="studentAge" placeholder="Enter your age" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStudentCourse">
                        <Form.Label>Student Course</Form.Label>
                        <Form.Control type="text" name="studentCourse" placeholder="Enter your Course" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formStudentPhonenumber">
                        <Form.Label>Student Phonenumber</Form.Label>
                        <Form.Control type="text" name="studentPhoneNumber" placeholder="Enter your phone number" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="studentEmail" placeholder="Enter email" onChange={(e) => this.handleOnChange(e)} />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
                <br />
                {this.state.studentList.length > 0 &&
                    <StudentList studentList={this.state.studentList}/>
                }
            </Container>
        )
    }

}

export default Student;
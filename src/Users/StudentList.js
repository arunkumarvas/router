import React  from "react";
import { Table } from "react-bootstrap";

const StudentList = (props) => {

    console.log('studentList', props.studentList)
    return (
        <>
            <Table striped bordered hover>
                    <thead>
                                <th>Student Name</th>
                                <th>Student Age</th>
                                <th>Student Course</th>
                                <th>Student Phonenumber</th>
                                <th>Student Email</th>
                            </thead>
                           
            {props.studentList.map((student, index) => {
                return(
                    <>

                         
                            
                            <tbody key={index}>
                                <td>{student.studentName}</td>
                                <td>{student.studentAge}</td>
                                <td>{student.studentCourse}</td>
                                <td>{student.studentPhoneNumber}</td>
                                <td>{student.studentEmail}</td>
                            </tbody>

                    </>
                )
            })
            }
            </Table>
        </>
    )
}

export default StudentList;
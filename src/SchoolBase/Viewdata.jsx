import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import {Modal,Button} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { uploadNewStudentAPI } from '../Services/allAPI.jsx';

const Viewdata = () => {
 


const [uploaddetail,setuploaddetail]=useState({
  id:"",
  name:"",
  address:"",
  number:""
  ,classs:""

})

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

const handle = async()=>{
  const{id ,address,name,number,classs}=uploaddetail
  if(!id|| !classs|| !name || !number ||!address){
    alert("plz fill")
  }else{
    const result = await uploadNewStudentAPI(uploaddetail)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setuploaddetail({
        id:"",
    name:"",
    address:"",
    number:""
    ,classs:""
      })}
      else{
      alert(result.message)
    }
  }

 

}
  
  return (
    <div >
      
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title> Student Data</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
     
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Student name: </Form.Label>
          <Form.Control
            required
            type="text"
           
            placeholder=" Name"
      
            onChange={e=>setuploaddetail({...uploaddetail,name:e.target.value})}
            
           
          />
   
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Class: </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Class"
         
            onChange={e=>setuploaddetail({...uploaddetail,classs:e.target.value})}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>ID: </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="id"
         
            onChange={e=>setuploaddetail({...uploaddetail,id:e.target.value})}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Adress</Form.Label>
          <Form.Control type="text" placeholder="City" required
         
           onChange={e=>setuploaddetail({...uploaddetail,address:e.target.value})}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Adress.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Mobile No:</Form.Label>
          <Form.Control type="text" placeholder="+91"defaultValue="+91 " required
         
           onChange={e=>setuploaddetail({...uploaddetail,number:e.target.value})}
          />
          <Form.Control.Feedback type="invalid" >
            Please provide a valid Number.
          </Form.Control.Feedback>
        </Form.Group>
    
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Link to={'/'}><Button onClick={handle} >Submit form</Button></Link>
    </Form>
    </Modal.Body>
        
      </Modal.Dialog>
    </div>

     <center> <Link to={"/"}><button className='btn btn-primary'>back</button></Link></center>


    </div>
    
  )
}
 


export default Viewdata

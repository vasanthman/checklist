import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment'


function Model2({callFunc}) {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[nodata,setNoDat] = useState([])

    var s = moment();

    var currentDate = s.format('YYYY-MM-DD');
    console.log(currentDate)

    const [text, setText] = useState('');
    const handleChange =(event)=>{
        setText(event.target.value)

    }

    const [date1, setDate1] = useState(currentDate);
    const [date2, setDate2] = useState(currentDate);

    const handleChangeDate1 =(event)=>{
        setDate1(event.target.value)

    }
    console.log("the dat: ",date1)
    const handleChangeDate2 =(event)=>{
        setDate2(event.target.value)

    }

    const[select,setSelect] = useState('')
    const handleChangeSelect =(event)=>{
        console.log("theselect",event.target.value)
        setSelect(select)
    }

    const handleClick=()=>{
        var count = 0
        if(parseInt(date1.split("-")[2]) === parseInt(date2.split("-")[2]))
        {
            count = 0
        }
        if(parseInt(date2.split("-")[2]) > parseInt(date1.split("-")[2]))
        {
            count = parseInt(date2.split("-")[2]) - parseInt(date1.split("-")[2])
        }
        if(parseInt(date1.split("-")[2]) > parseInt(date2.split("-")[2]))
        {
            count = parseInt(date2.split("-")[2])
        }
        const d={
            start: date1,
            end: moment(date2)
                  .add(count,"days"),
            title: text,
            style: {
                background: 'red'
                }
          }

    callFunc(d)

    setShow(false)
    }
    

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Leave
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Holi Day Name</Form.Label>
          <Form.Control type="text" value={text} placeholder="Enter Name" onChange={(event)=>handleChange(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="Date" value={date1} placeholder={s} onChange={(event)=>handleChangeDate1(event)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" value={date2} placeholder={s} onChange={(event)=>handleChangeDate2(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Select Type</Form.Label>
          <Form.Select onChange={(event)=>handleChangeSelect(event)}>
            <option >--Select--</option>
            <option value="Plan">Plan</option>
            <option value="UnPlan">UnPlan</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
export default Model2;
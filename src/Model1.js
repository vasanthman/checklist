import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import moment from 'moment'


function Model1({callFunc1,callFunc2}) {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [text, setText] = useState('');
  const handleChange =(event)=>{
      setText(event.target.value)

  }

  var s = moment();

  var currentDate = s.format('YYYY-MM-DD');

  const [date1, setDate1] = useState(currentDate);
  const [date2, setDate2] = useState(currentDate);

  const handleChangeDate1 =(event)=>{
      setDate1(event.target.value)

  }
  console.log("the dat: ",date1)
  const handleChangeDate2 =(event)=>{
      setDate2(event.target.value)

  }

  const[subcheck,setSubCheck] = useState('')

  const handleSubCheck=(event)=>{
    setSubCheck(event.target.value)
  }

  const[color,setColor]=useState('')

  const handleColor=(event)=>{
    console.log(event.target.value)
    setColor(event.target.value)
    
  }

  const[checkd,setCheckd]=useState([])

  const da={
    title:text,
    subcheck:subcheck,
    style: {
        background: color
        },
    icon:'bi bi-pencil'
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
            background: color
            },
     
            icon: 'bi bi-pencil'
               
      }
    
    checkd.push(da)


        callFunc2(checkd)
        callFunc1(d)
    

 
    setShow(false)
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Checklist
      </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Checklist</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
       
            <Row>
                <Col>
                     <Form.Control type="text" value={text} placeholder="title" onChange={(event)=>handleChange(event)} />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control  type="date" value={date1} placeholder={s} onChange={(event)=>handleChangeDate1(event)}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Control type="date" value={date2} placeholder={s} onChange={(event)=>handleChangeDate2(event)}/>
                    </Form.Group>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                     <Form.Control type="text" placeholder="Description" />
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Status" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                            <Form.Control type="text" placeholder="Priority" />
                    </Form.Group>
                </Col>
                    
                <Col>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Category" />
                    </Form.Group>
                </Col>
                 
            </Row>
            
            <br />  
            <Row>
                <Col xs={12} md={8}>
                    <Form.Group >
                            <Form.Control type="text" placeholder="Comment" />
                    </Form.Group>
                </Col>
                <Col xs={8} md={4}>     
                    <Form.Group  as={Col}>
                        <Form.Control type="color" placeholder="Select Color" value={color} onChange={(event)=>handleColor(event)}/>
                    </Form.Group>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <Form.Group as={Col} >
                        <Form.Label>Add SubCheckList</Form.Label>
                        <Form.Control type="text" value={subcheck} onChange={(event)=>handleSubCheck(event)}/>
                    </Form.Group>
                </Col>
            </Row>

        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}
export default Model1;
import React from 'react'
import cardio from '../Assets/cardiology.png'
import onco from '../Assets/oncology.png'
import radio from '../Assets/radiology.png'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Service.css';
import img from '../Assets/img.png'


const Service = () => {
  return (
    <div className='container'>
         <div className='column'>
              <div className='col-md-3'>

            <div className='card'>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardio} />
      <Card.Body>
        <Card.Title>Cardiology</Card.Title>
        <Card.Text>
        involves a combination of medications, such as beta-blockers and statins, along with lifestyle changes to manage heart conditions and improve overall cardiovascular health
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
</div>


<div className='row'>
              <div className='col-md-3'>

            <div className='card'>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={onco} />
      <Card.Body>
        <Card.Title>Oncology</Card.Title>
        <Card.Text>
        treatment typically includes a combination of therapies such as surgery, chemotherapy, radiation, targeted therapies, or immunotherapy, tailored to the type and stage of the cancer
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
</div>


<div className='row'>
              <div className='col-md-3'>

            <div className='card'>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={radio} />
      <Card.Body>
        <Card.Title>Parkinson DiseaseDitection</Card.Title>
        <Card.Text>
        focuses on managing symptoms through a combination of medications,therapies like physical exercise, speech therapy, aiming to improve motor control and quality of lif
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
</div>



<div className='row'>
              <div className='col-md-3'>

            <div className='card'>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Diabetis</Card.Title>
        <Card.Text>
        a personalized approach combining blood sugar monitoring, healthy diet,medications like insulin or oral antidiabetic drugs to regulate blood glucose levels a personalized approach 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
</div>


    </div>
  )
}

export default Service

import React from "react";
import { Row, Col, Button } from 'react-bootstrap'

export default function Step2() {
  return (
   <Row>
        <Col sm={12} md={12} lg={12} className="mb-3">
            <h2>Welcome to Oahse</h2>
            <p>Thank you for joining our wait list! <br/>
                You will be notified with all updates as we proceed to revolutionize the procurement system.
            </p>
        </Col>
        <Col className="mb-3">
            <Button variant="success" className="mb-3" href="https://www.linkedin.com">Stay Tuned</Button>
        </Col>
        
   </Row>
  );
}

import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Step2({ onNext, onBack }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
          <Row>
            <Col sm={12} md={12} lg={12} className="text-left">
                <Button type="button" onClick={onBack} className="">
                    Back
                </Button>
            </Col>

            <Col sm={12} md={12} lg={12} className="mb-3">
                <h1 className="">Let's get you started</h1>
                <Form.Select aria-label="" className="mb-3">
                    <option>Select Region</option>
                    <option value="1">Canada</option>
                    <option value="2">Nigeria</option>
                    <option value="3">Ireland</option>
                    <option value="3">UK</option>
                </Form.Select>
                <Form.Control type="text" size="md" placeholder="Enter Access Code"  required className="mb-3"/>
                
            </Col>

            <Col sm={12} md={12} lg={12}>
                <Button as="input" type="submit" value="Continue" />
            </Col>
        </Row>
    </Form>
  );
}

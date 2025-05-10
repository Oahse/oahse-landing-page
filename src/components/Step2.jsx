import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function Step3({ onNext, onBack }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
        <Row>
            <Col sm={12} md={12} lg={12} className="text-start">
                <Button type="button" onClick={onBack} className="">
                    Back
                </Button>
            </Col>

            <Col sm={12} md={12} lg={12} className="mb-3">
                <h1 className="">What best describes you</h1>
                <Form.Select aria-label="">
                    <option>What best describes you</option>
                    <option value="1">Supplier</option>
                    <option value="2">Project Manager</option>
                    <option value="3">Procurement Specialist</option>
                </Form.Select>
                
            </Col>

            <Col sm={12} md={12} lg={12}>
                <Button as="input" type="submit" value="Continue" />
            </Col>
        </Row>
    </Form>
  );
}

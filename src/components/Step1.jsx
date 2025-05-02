import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Step1({ onNext }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <h1 className="step-header"><span>Estimate </span>the quote for your project supplies</h1>

      <p>Revolutionized Procurement platform for engineering and technology trade.</p>
      <Form.Control type="email" size="md" placeholder="Input your Email"  required className="mb-3"/>
      <Button as="input" type="submit" value="Start here" />
    </Form>
  );
}

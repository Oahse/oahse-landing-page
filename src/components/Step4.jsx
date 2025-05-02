import React,{useState} from "react";
import { Form, Button, Row, Col, ToggleButton, ButtonGroup } from "react-bootstrap";

export default function Step2({ onBack, onSubmit }) {
    const [checked, setChecked] = useState(false);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
        <Row>
            <Col sm={12} md={12} lg={12} className="text-left">
                <Button type="button" onClick={onBack} className="">
                    Back
                </Button>
            </Col>

            <Col sm={12} md={12} lg={12} className="mb-3">
                <h1 className="">What are you more interested in </h1>
                <ButtonGroup className="mb-2">
                    <ToggleButton id="toggle-check" type="checkbox" variant="outline-secondary" checked={checked} value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}>
                        Checked
                    </ToggleButton>
                </ButtonGroup>
                <br/>
                <ButtonGroup className="mb-2">
                    <ToggleButton id="toggle-check" type="checkbox" variant="outline-secondary" checked={checked} value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}>
                        Checked
                    </ToggleButton>
                </ButtonGroup>
                <br/>
                <ButtonGroup className="mb-2">
                    <ToggleButton id="toggle-check" type="checkbox" variant="outline-secondary" checked={checked} value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}>
                        Checked
                    </ToggleButton>
                </ButtonGroup>
           
            </Col>

            <Col sm={12} md={12} lg={12}>
                <Button as="input" type="submit" value="Submit" />
            </Col>
        </Row>
    </Form>
  );
}

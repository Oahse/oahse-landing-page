import {useState} from 'react'
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";

import { Row, Col, Container } from "react-bootstrap"

function LandingPage() {
    const steps = [Step1, Step2, Step3, Step4, Step5];

    const [step, setStep] = useState(0);
    const CurrentStep = steps[step];

    const submitForm = ()=> {
        console.log("Form submitted")
        nextStep()
    }
    const nextStep = () => {
        if (step < steps.length - 1) setStep(step + 1);
      };
    
      const prevStep = () => {
        if (step > 0) setStep(step - 1);
      };
  return (
    <div>
        <Container>
            <Row>
                <Col className='form-wrapper'>
                    <CurrentStep onNext={nextStep} onBack={prevStep} onSubmit={submitForm}/>
                </Col>
            </Row>
        </Container>
       

    </div>
  )
}

export default LandingPage
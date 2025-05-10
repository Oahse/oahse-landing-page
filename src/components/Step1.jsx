import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Step1({ onNext }) {
  const [index, setIndex] = useState(0);
  const words = ["Estimate", "Generate", "Order"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Loop through words
    }, 2000); // 4 seconds pause + 1 second transition

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
    >
      <h1 className="step-header">
        <span className="vertical-text-wrapper mx-2">
          <span
            className="vertical-text"
            style={{
              transform: `translateY(-${index * 1.2}em)`,
              transition: "transform 1s ease-in-out", // Smooth transition
            }}
          >
            {words.map((word, i) => (
              <div key={i} className="word">
                {word}
              </div>
            ))}
          </span>
        </span>
         the quote for your project supplies
      </h1>

      <p>Revolutionized Procurement platform for engineering and technology trade.</p>
      <Form.Control
        type="email"
        size="md"
        placeholder="Input your Email"
        required
        className="mb-3"
      />
      <Button as="input" type="submit" value="Start here" />
    </Form>
  );
}

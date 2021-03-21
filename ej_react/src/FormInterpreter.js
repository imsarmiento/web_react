import React from "react";
import FormComponent from "./FormComponent";
import Container from "react-bootstrap/Container";

const form1 = [
  {
    name: "email",
    type: "email",
    placeholder: "Type your email",
    validation: {
      required: true,
      type: "String",
      min: 4,
      max: 50,
    },
  },
  {
    name: "password",
    type: "password",
    placeholder: "Type your password",
    validation: {
      required: true,
      type: "String",
      min: 8,
      max: 50,
    },
  },
  {
    name: "repeat_password",
    type: "password",
    placeholder: "Repeat your password",
    validation: {
      required: true,
      type: "String",
      min: 8,
      max: 50,
    },
  },
];

const form2 = [
  {
    name: "name",
    type: "text",
    placeholder: "Type your name",
    validation: {
      required: true,
      type: "String",
      min: 1,
      max: 50,
    },
  },
  {
    name: "age",
    type: "number",
    placeholder: "Type your age",
    validation: {
      required: true,
      type: "Number",
    },
  },
  {
    name: "address",
    type: "text",
    placeholder: "Type your address",
    validation: {
      required: true,
      type: "String",
      min: 1,
      max: 50,
    },
  },
];

function FormInterpreter(props) {
  return (
    <Container className="py-4">
      <FormComponent form={form2}></FormComponent>
    </Container>
  );
}

export default FormInterpreter;

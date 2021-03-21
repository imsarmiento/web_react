import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSignupForm from "./CustomHooks";
import * as Joi from "joi";

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

function FormComponent(props) {
  const form = props.form;

  const build = () => {
    const joi_object = {};
    form.forEach((field) => {
      let joi_restriction =
        field["validation"]["type"] === "String"
          ? Joi.string()
              .min(field["validation"]["min"])
              .max(field["validation"]["max"])
          : Joi.number();
      joi_restriction = field["validation"]["required"]
        ? joi_restriction.required()
        : joi_restriction;

      //console.log(joi_restriction);
      joi_object[field["name"]] = joi_restriction;
    });

    return joi_object;
  };

  const schema = Joi.object(build());

  const { handleSubmit, handleInputChange, errors } = useSignupForm(schema);

  return (
    <Form onSubmit={handleSubmit}>
      {form.map((field, id) => (
        <Form.Group controlId={field.name} key={id}>
          <Form.Label>{capitalize(field.name)}</Form.Label>
          <Form.Control
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            onChange={handleInputChange}
          />
        </Form.Group>
      ))}
      {errors && (
        <div>
          <p className="text-danger">{errors.toString()}</p>
        </div>
      )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormComponent;


import {Container } from "@mui/material";
import Joi from "joi";
import useForm from "../../forms/hooks/useForm";

import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";

  const schema = {
    first: Joi.string().min(4),
    last: Joi.string().min(2).max(10),
  };

  const initialForm={
    first: "",
    last: "",
  }
  const handleSubmit=(data)=>{
    console.log(data);
  }

  export default function FormExample() {
    const { data, errors, handleChange, handleReset, onSubmit, validateForm } = useForm(
      initialForm,
      schema,
      handleSubmit
    );
  
    return (
      <Container
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="Test Form"
          onSubmit={onSubmit}
          onReset={handleReset}
          styles={{ maxWidth: "450px" }}
          validateForm={validateForm}
          to={ROUTES.SANDBOX}
        >
          <Input
            label="first name"
            name="first"
            data={data}
            error={errors.first}
            onChange={handleChange}
          />
          <Input
            label="last name"
            name="last"
            data={data}
            error={errors.last}
            onChange={handleChange}
          />
        </Form>
      </Container>
    );
  }
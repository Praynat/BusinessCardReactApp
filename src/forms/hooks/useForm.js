import Joi from "joi";
import { useState, useCallback, useMemo } from "react";

export default function useForm(initialForm, schema, handleSubmit) {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validateProperty = useCallback((name, value) => {
    const obj = { [name]: value };
    const generateSchema = Joi.object({ [name]: schema[name] });
    const { error } = generateSchema.validate(obj);
    return error ? error.details[0].message : null;
  }, [schema]);

  const handleChange = useCallback((event) => {
    const name = event.target.name;
    const value = event.target.value;
    const errorMessage = validateProperty(name, value);

    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => {
        let obj = { ...prev };
        delete obj[name];
        return obj;
      });
    }

    setData((prev) => ({ ...prev, [name]: value }));
  }, [validateProperty]);

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    return !error;
  }, [data, schema]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [data, handleSubmit]);

  return useMemo(() => ({
    data,
    errors,
    handleChange,
    handleReset,
    onSubmit,
    validateForm,
  }), [data, errors, handleChange, handleReset, onSubmit, validateForm]);
}
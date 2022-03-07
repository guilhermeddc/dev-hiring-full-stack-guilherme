import React, { useEffect, useState } from "react";

import { getProductByName } from "../../clients/back-end";

const Register = ({ selecteditems }) => {
  const [form, setForm] = useState({});

  useEffect(async () => {
    const [productName] = selecteditems; 
    const { data } = await getProductByName(productName);
    setForm(data);
  }, []);

  return (
    <>
      Formulário de cadastro e edição
    </>
  );
};

export default Register;

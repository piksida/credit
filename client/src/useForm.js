import { useState } from 'react'
import validateInfo from './validateInfo';

const useForm = () => {
    const initialState = {
        cardNumber: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardAmount: '',
        focus: ''
    };

    const [values, setValues] = useState(initialState);

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values));

        delete values.focus;

        if(validateInfo(values).variant==="success"){
          fetch('http://localhost:3030/api', {
          method: 'POST',
          mode: 'cors',
          headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
            },
          body: JSON.stringify(values)
          }).then(function (response)  { response.json().then(function(data) {
              console.log(data);
              });
        });
          setValues(initialState);
        }

    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 
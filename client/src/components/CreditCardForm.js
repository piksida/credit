import React from "react";
import useForm from "../useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";


const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
          <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            number={values.cardNumber}
          />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    data-testid="cardExpiration"
                    name="cardExpiration"
                    placeholder="MM/YYYY Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    data-testid="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="CVV"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardAmount"
                    data-testid="cardAmount"
                    name="cardAmount"
                    placeholder="Amount"
                    value={values.cardAmount}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.camount}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button
              size={"block"}
              data-testid="validateButton"
              id="validateButton"
              type="submit"
            >
              Pay
            </Button>
          </Form>
          </div>
          <Alert
            id="alertMessage"
            data-testid="alertMessage"
            variant={errors.variant}
            show={errors.show}
          >
            {errors.message}
          </Alert>{" "}
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
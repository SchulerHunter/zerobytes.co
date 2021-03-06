import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Modal,
  Snackbar,
  TextField,
  Typography
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Close } from "@material-ui/icons";

const initialFormValues = {
  clientName: "",
  emailAddress: "",
  phoneNumber: "",
  request: "",
  formSubmitted: false,
  success: false
}

const inputFieldValues = [
  {
    name: "clientName",
    label: "Full Name",
    placeholder: "Required."
  },
  {
    name: "emailAddress",
    label: "Email",
    placeholder: "Required."
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Optional."
  },
  {
    name: "request",
    label: "Message",
    placeholder: "Required. I was wondering about availability and rates. I need help with the following:",
    multiline: true,
    rows: 5
  }
]

const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({open: false});
  const [modalOpen, setModalOpen] = useState(false);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("clientName" in fieldValues) {
      temp.clientName = fieldValues.clientName ? "" : "This field is required."
    }

    if ("emailAddress" in fieldValues) {
      temp.emailAddress = fieldValues.emailAddress ? "" : "This field is required."
      if (fieldValues.emailAddress) {
        temp.emailAddress =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(fieldValues.emailAddress)
          ? ""
          : "Email is not valid."
      }
    }

    if ("phoneNumber" in fieldValues) {
      if (fieldValues.phoneNumber) {
        temp.phoneNumber =
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(fieldValues.phoneNumber)
          ? ""
          : "Phone number is not valid."
      }
    }

    if ("request" in fieldValues) {
      temp.request = fieldValues.request ? "" : "This field is required."
    }

    setErrors({
      ...temp
    });
  }

  const handleFormOpen = (toOpen) => {
    if (toOpen) {
      if (values.success) {
        setAlert({
          open: true,
          type: "info",
          message: "You have already submitted a quote request. If you'd like to submit another, please refresh the page."
        });
        return;
      }
    }
    setModalOpen(toOpen);
  }

  const handleInputValue = (e) => {
    const {name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });

    validate({ [name]: value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formIsValid()) {
      let data = new FormData();

      data.append("Client Name", values["clientName"]);
      data.append("Email Address", values["emailAddress"]);
      data.append("Phone Number", values["phoneNumber"]);
      data.append("Request", values["request"]);

      setValues({
        ...values,
        formSubmitted: true
      })

      fetch("https://formspree.io/f/mzbovyow", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          setModalOpen(false);
          setValues({
            ...values,
            success: true
          });
          setAlert({
            open: true,
            type: "success",
            message: "Form successfully submitted!"
          });
        } else {
          response.json().then(data => {
            console.log(data);
            setAlert({
              open: true,
              type: "error",
              message: "There was an error in your data. Please try again!"
            });
          })
        }
      }).catch(error => {
        console.log(error)
        setAlert({
          open: true,
          type: "error",
          message: "There was an error. Please try again!"
        });
      });
    }
  }

  const formIsValid = (fieldValues = values) => {
    const isValid = 
      fieldValues.clientName &&
      fieldValues.emailAddress &&
      fieldValues.request &&
      Object.values(errors).every((x) => x === "");
    
      return isValid;
  }

  return {
    handleInputValue,
    handleFormSubmit,
    handleFormOpen,
    formIsValid,
    setAlert,
    errors,
    alert,
    modalOpen
  }
}

const QuoteForm = (props) => {
  const {text, textVariant} = props;
  const {handleInputValue, handleFormSubmit, handleFormOpen, formIsValid, setAlert, errors, alert, modalOpen} = useFormControls();

  return (
    <Fragment>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        anchorOrigin={{vertical: "bottom", horizontal: "left"}}
        onClose={() => {setAlert({open: false})}}
      >
        <Alert severity={alert.type} variant="filled" sx={{width: "100%"}} onClose={() => {setAlert({open: false})}}>
          {alert.message}
        </Alert>
      </Snackbar>

      <Modal
        open={modalOpen}
        onClose={() => {handleFormOpen(false)}}
        aria-labelledby="quote-modal"
        aria-describedby="modal for recieving quotes"
      >
        <Box display="flex" justifyContent="center" style={{position: "relative", top: "10%"}}>
          <Card>
            <CardHeader title={
              <Fragment>
                <Box style={{display: "inline-block", width:"50%"}}>
                  <Typography variant="h5">Get Quote</Typography>
                </Box>
                <Box align="right" style={{display: "inline-block", width:"50%"}}>
                  <IconButton onClick={() => {handleFormOpen(false)}}>
                    <Close />
                  </IconButton>
                </Box>
              </Fragment>
              } />
            <CardContent display="flex">
              <form onSubmit={handleFormSubmit}>
                {inputFieldValues.map((inputField, index) => {
                  return (
                    <TextField
                      name={inputField.name}
                      label={inputField.label}
                      key={index}
                      placeholder={inputField.placeholder}
                      color="secondary"
                      autoComplete="none"
                      margin="normal"
                      multiline={inputField.multiline ?? false}
                      rows={inputField.rows ?? 1}
                      fullWidth
                      focused
                      onBlur={handleInputValue}
                      onChange={handleInputValue}
                      {...(errors[inputField.name] && {error: true, helperText: errors[inputField.name]})}
                    />
                  )
                })}
                <Box mt={2} mr={2} align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    disabled={!formIsValid()}
                  >
                    Submit
                  </Button>
                </Box>
               </form>
            </CardContent>
          </Card>
        </Box>
      </Modal>
      <Button onClick={() => {handleFormOpen(true)}} align="center" variant="contained" size="large" color="primary">
        <Typography align="center" variant={textVariant}>
          {text}
        </Typography>
      </Button>
    </Fragment>
  );
};

QuoteForm.propTypes = {
  text: PropTypes.string.isRequired,
  textVariant: PropTypes.string.isRequired
}

export default QuoteForm;
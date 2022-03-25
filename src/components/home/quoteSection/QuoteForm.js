import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Typography
} from "@material-ui/core";

const QuoteForm = (props) => {
  const {text, textVariant} = props;
  return (
      <Button align="center" variant="contained" size="large" color="primary">
        <Typography align="center" variant={textVariant}>
          {text}
        </Typography>
      </Button>
  );
};

//  <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" required />
//     </div>
//     <div>
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" required />
//     </div>
//     <div>
//       <label htmlFor="message">Message:</label>
//       <textarea id="message" required />
//     </div>
//     <button type="submit">{status}</button>
//   </form>

QuoteForm.propTypes = {
  text: PropTypes.string.isRequired,
  textVariant: PropTypes.string.isRequired
}

export default QuoteForm;
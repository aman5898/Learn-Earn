import React from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerStyled = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
    }
`;

function AddRequestDetails({ description, setDescription, validity, setValidity }){

    const DateTimeInput = ({ value, onClick }) => (
        <div onClick={onClick}>
            <input 
                    placeholder="Validity (optional)"
                    defaultValue={value}
                    id="validity"
                    className={styles.request_input}
                />
        </div>  
    );  

    return(
        <div className={styles.details_container}>
            {/* Description */}
            <input 
                placeholder="Write Description"
                value={description}
                className={styles.request_input}
                onChange={(e) => setDescription(e.target.value)}
            />

            {/* Validity */}
            <DatePickerStyled>
                <DatePicker 
                    selected={validity}
                    onChange={date => setValidity(date)}
                    customInput={<DateTimeInput />}
                    showTimeInput
                    timeInputLabel="Time:"
                    dateFormat="dd/MM/yyyy h:mm aa"
                />
            </DatePickerStyled>

        </div>
    );
}

AddRequestDetails.propTypes = {
    description: PropTypes.string.isRequired,
    setDescription: PropTypes.func.isRequired,
    validity: PropTypes.oneOfType([
        PropTypes.instanceOf(Date).isRequired,
        PropTypes.string.isRequired
    ]),
    setValidity: PropTypes.func.isRequired
};

export default AddRequestDetails;
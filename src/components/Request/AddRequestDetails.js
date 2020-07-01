import React from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

import ChipsComponent from './ChipsComponent';

const DatePickerStyled = styled.div`
    .react-datepicker-wrapper {
        width: 100%;
    }
`;

class DateTimeInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div onClick={this.props.onClick}>
            <input 
                placeholder="Validity (optional)"
                defaultValue={this.props.value}
                id="validity"
                className={styles.request_input}
            />
        </div>  
      );
    }
}

DateTimeInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
}

function AddRequestDetails({ description, setDescription, validity, setValidity, selectedTags, setSelectedTags }){
    return(
        <div className={styles.details_container}>
            {/* Description */}
            <textarea 
                placeholder="Write Description"
                rows={2}
                value={description}
                className={styles.request_input}
                onChange={(e) => setDescription(e.target.value)}
            />

            {/* Tags */}
            <ChipsComponent setSelectedTags={setSelectedTags} selectedTags={selectedTags}/>

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
    setValidity: PropTypes.func.isRequired,
    selectedTags: PropTypes.array.isRequired,
    setSelectedTags: PropTypes.func.isRequired
};

export default AddRequestDetails;
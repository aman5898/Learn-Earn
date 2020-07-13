import React, { useRef, useEffect } from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import autosize from 'autosize';
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
                value={this.props.value}
                id="validity"
                className={styles.request_input}
                onChange={this.props.onClick}
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
    
    const descriptionRef = useRef(null);

    useEffect(() => {    
        autosize(descriptionRef.current);
    }, []);

    return(
        <div className={styles.details_container}>
            {/* Description */}
            <textarea 
                placeholder="Write Description"
                rows={1}
                value={description}
                ref={descriptionRef}
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
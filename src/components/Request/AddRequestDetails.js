import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/App.scss";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import autosize from 'autosize';
import "react-datepicker/dist/react-datepicker.css";

import API from '../../api/api';
import ChipsComponent from '../Chips/ChipsComponent';

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
        <>
            <div onClick={this.props.onClick}>
                <input 
                    placeholder="Validity (optional)"
                    value={this.props.value}
                    id="validity"
                    className={`${styles.request_input} ${this.props.incorrectValidity ? styles.request_input__red : null}`}
                    onChange={this.props.onClick}
                />
            </div> 
            {this.props.incorrectValidity ? 
                (<div className={styles.validity_helper_text}>Invalid Date</div>)
                : null
            }
        </> 
      );
    }
}

DateTimeInput.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    incorrectValidity: PropTypes.bool
}

function AddRequestDetails({ description, setDescription, validity, setValidity, selectedTags, setSelectedTags }){
    
    const descriptionRef = useRef(null);
    const [allTags, setAllTags] = useState([]);
    const [incorrectValidity, setIncorrectValidity] = useState(false);

    useEffect(() => {    
        autosize(descriptionRef.current);

        // Redundant info - call only once from root/use redux
        const getAllTags = async () => {
            const { response, success } = await API('GET', 'tag/', {},  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIxMmgiLCJpZCI6IjVlZTc0ZjI3OTRlMjhkOGI3NmY5YjI1NSIsImVtYWlsIjoic2F2aXRvamphc3dhbEBnbWFpbC5jb20iLCJpYXQiOjE1OTQ2OTkxMTh9.bwVGfkuE6ThlimxRrQx2lhEiPJvvjbWRdXtOK7iXAsE');
            if(success) setAllTags(response);
        }

        getAllTags();

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
            <ChipsComponent setSelectedTags={setSelectedTags} selectedTags={selectedTags} tags={allTags}/>

            {/* Validity */}
            <DatePickerStyled>
                <DatePicker 
                    selected={validity}
                    onChange={date => {setValidity(date), setIncorrectValidity(new Date() > new Date(date)) }}
                    customInput={<DateTimeInput incorrectValidity={incorrectValidity}/>}
                    showTimeInput
                    timeInputLabel="Time:"
                    dateFormat="dd/MM/yyyy h:mm aa"
                    shouldCloseOnSelect={false}
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
    setSelectedTags: PropTypes.func.isRequired,
};

export default AddRequestDetails;
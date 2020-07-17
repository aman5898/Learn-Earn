import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/App.scss";

function ReferencedChip({ referenced }) {
    return (
        <div className={styles.referenced_text}>
            @{referenced}
        </div>
    );
}

ReferencedChip.propTypes = {
    referenced: PropTypes.string.isRequired
}

export default ReferencedChip;
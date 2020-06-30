import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/App.scss";

function CustomChip({ tag, index,  deleteTag }) {
    return (
        <div className={styles.tag_item} key={tag}>
            {tag.tag_name}
            <button
              type="button"
              className={styles.tag_item_button}
              onClick={() => deleteTag(index)}
            >
              &times;
            </button>
        </div>
    ) 
}

CustomChip.propTypes = {
    tag: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteTag: PropTypes.func.isRequired,
};

export default CustomChip;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAllTags } from "../../redux/actions/tagActions";
import PropTypes from "prop-types";
import styles from "../../styles/App.scss";
import CustomChip from './CustomChip';

function ChipsComponent({ selectedTags, setSelectedTags, tags, loadAllTags }) {

    const [tagText, setTagText] = useState('');
    const [cursor, setCursor] = useState(0);
    const [matchingTags, setMatchingTags] = useState([]); 

    useEffect(() => {    
        loadAllTags();
    }, []);

    const tagTextChange = (e) => {

        let new_input_tag = e.target.value;
        setMatchingTags(tags.reduce((filtered, tag) => {
                if(tag.tag_name.toLowerCase().includes(new_input_tag.toLowerCase()) && !selectedTags.some(selectedTag => selectedTag._id === tag._id)) {
                    filtered.push(tag);
                }
                return filtered;
            }, [])
        );
        setTagText(new_input_tag)
        setCursor(0);
    }

    const selectedTag = (tag) => {
        setSelectedTags(prevTags => [...prevTags, tag]);
        setTagText('');
        setCursor(0);
    }

    const deleteTag = (tag_index) => {
        setSelectedTags(prevTags => prevTags.filter((tag, i) => i!== tag_index));
    }

    const handleKeyDown = (e) => {

        if(matchingTags.length === 0) return;

        // On Arrow Up
        if(e.keyCode === 38 && cursor > 0) setCursor(cursor => cursor - 1);
    
        // On Arrow Down
        if(e.keyCode === 40 && cursor < matchingTags.length - 1) setCursor(cursor => cursor + 1);

        // On Enter
        if(e.keyCode === 13) selectedTag(matchingTags[cursor]);
    }
    

    return (
        <div>
            <input 
                placeholder="Choose Tags"
                value={tagText}
                className={styles.request_input}
                onChange={tagTextChange}
                onKeyDown={handleKeyDown}
            />

            {/* Suggestions */}
            {tagText.length === 0 ? null : (
                (matchingTags.length === 0) ? (
                    <div>No Results Found...</div>
                ) : (
                    <div>
                        {matchingTags.map((tag, i) => (
                            <div 
                                key={i} 
                                id={tag._id} 
                                className={`${styles.suggestions} ${cursor === i ? styles.suggestions_focus : null}`} 
                                onClick={() => selectedTag(tag)}> {tag.tag_name} 
                            </div>
                        ))}
                    </div> 
                )
            )}

            {/* Show Tag List */}
            {selectedTags.length === 0 ? null : (
                <div>
                    {selectedTags.map((selectedTag, i) => (
                        <CustomChip key={i} tag={selectedTag} index={i} deleteTag={deleteTag}/>
                    ))}
                </div>
            )}


        </div>
    )
}

ChipsComponent.propTypes = {
    selectedTags: PropTypes.array.isRequired,
    setSelectedTags: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    loadAllTags: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    return {
      tags: state.tags,
    };
}
  
const mapDispatchToProps = {
    loadAllTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChipsComponent);

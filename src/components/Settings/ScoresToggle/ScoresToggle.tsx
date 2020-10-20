import React from 'react';
import DisplaySettings from '../../../Data/DisplaySettings';
import './ScoresToggle.css';

const ScoresToggle = ({ handleScoresToggle, displaySettings }: Props) => {
    return (
        <div className='ScoresToggle'>
            <h2 className='scoresHeader'>Scoring</h2>
            <label className='totalScores'>
                {`Total scores  `}
                <input
                    type='checkbox'
                    value='totalScores'
                    onChange={(e) => handleScoresToggle(e.target.value) }
                    checked={ displaySettings.totalScores }
                />
            </label>
            <label className='individualScores'>
                {`Individual scores  `}
                <input
                    type='checkbox'
                    value='individualScores'
                    onChange={(e) => handleScoresToggle(e.target.value) }
                    checked={ displaySettings.individualScores }
                />
            </label>
            <label className='eightballClears'>
                {`8 ball clears  `}
                <input
                    type='checkbox'
                    value='eightballClears'
                    onChange={(e) => handleScoresToggle(e.target.value) }
                    checked={ displaySettings.eightballClears }
                />
            </label>
        </div>
    )
}

interface Props {
    handleScoresToggle: Function;
    displaySettings: DisplaySettings;
}

export default ScoresToggle;
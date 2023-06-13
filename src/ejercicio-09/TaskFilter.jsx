import React from 'react';
import { FormControlLabel,RadioGroup, Radio } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const TaskFilter = ({ dispatch }) => {

    return (
        <RadioGroup
            row
            defaultValue='ALL'
        >
            <FormControlLabel 
                value='ALL'
                control={<Radio 
                    onClick={() => dispatch({ type: 'SHOW_ALL' })}
                    sx={{
                        color: deepOrange[800],
                        '&.Mui-checked': {
                            color: deepOrange[600],
                        }
                }}
                />}
                label='ALL'
            />
            <FormControlLabel 
                value='ACTIVE'
                control={<Radio 
                    onClick={() => dispatch({ type: 'SHOW_ACTIVE' })} 
                    sx={{
                        color: deepOrange[800],
                        '&.Mui-checked': {
                            color: deepOrange[600],
                        }
                }}
                />}
                label='ACTIVE'
            />
            <FormControlLabel 
                value='COMPLETE'
                control={<Radio 
                    onClick={() => dispatch({ type: 'SHOW_COMPLETE' })} 
                    sx={{
                        color: deepOrange[800],
                        '&.Mui-checked': {
                            color: deepOrange[600],
                        }
                }}
                />}
                label='COMPLETE'
            />
        </RadioGroup>
    );
}

export default TaskFilter;

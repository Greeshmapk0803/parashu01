import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { BookmarkRoundedIcon } from '../assets/icons';

export default function ColorToggleButton() {
    const [save, setSave] = React.useState('no');

    const handleChange = (event, newSave) => {
        setSave(newSave);
    };

    return (
        <ToggleButtonGroup
            color="success"
            size="small"
            value={save}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{backgroundColor:'gray'}}
        >
            <ToggleButton value="yes"><BookmarkRoundedIcon /></ToggleButton>
        </ToggleButtonGroup>
    );
}
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function SimpleSnackbar(props) {
    const { show, err } = props;
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    React.useEffect(() => {
        if (show) {
            setOpen(true);
        }
    }, [show]);


    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity="info"  sx={{ bgcolor:'whitesmoke'}}>{err ? `${err.message}` : 'Succesfully Loaded'}</Alert>
            </Snackbar>
        </div>
    );
}

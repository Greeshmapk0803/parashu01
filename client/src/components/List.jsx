import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';


export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, }}>

            <List dense={dense} sx={{
                    backgroundColor:'primary.main'
                }}>

                <ListItem sx={{
                    backgroundColor:'primary.main'
                }}
                  secondaryAction={
                    <Button variant="contained" color='error' size='small'>Remove</Button>
                  }
                >
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null
                }
                sx={{padding:'1em',
                    '&:hover':{backgroundColor:'#42285d', borderRadius:'5px',}}}
                  />
                </ListItem>
                <ListItem sx={{
                    backgroundColor:'primary.main'
                }}
                  secondaryAction={
                    <Button variant="contained" color='error' size='small'>Remove</Button>
                  }
                >
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null
                }
                sx={{padding:'1em',
                    '&:hover':{backgroundColor:'#42285d', borderRadius:'5px',}}}
                  />
                </ListItem>
            </List>
    </Box>
  );
}

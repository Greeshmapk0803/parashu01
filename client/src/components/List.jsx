import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';


export default function InteractiveList() {
  return (
    <Box sx={{ flexGrow: 1, }}>

      <List sx={{
        backgroundColor: 'primary.main'
      }}>

        <ListItem sx={{
          backgroundColor: 'primary.main'
        }}
        >
          <ListItemText
            primary="Single-line item"
            sx={{
              padding: '1em',
              '&:hover': { backgroundColor: '#42285d', borderRadius: '5px', }
            }}
          />
          <Button variant="contained" color='error' size='small'>Remove</Button>
        </ListItem>
        <ListItem sx={{
          backgroundColor: 'primary.main'
        }}
        >
          <ListItemText
            primary="Single-line item"
            sx={{
              padding: '1em',
              '&:hover': { backgroundColor: '#42285d', borderRadius: '5px', }
            }}
          />
          <Button variant="contained" color='error' size='small'>Remove</Button>
        </ListItem>
      </List>
    </Box>
  );
}

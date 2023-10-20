import React from 'react'
import { ProfileBox, SavedArticles } from '../../components'
import { Container } from '@mui/material'

const Profile = () => {
    return (
        <Container maxWidth='xl'>
            <ProfileBox />
            <div>Button to logout</div>
            <SavedArticles />
        </Container>
    )
}

export default Profile
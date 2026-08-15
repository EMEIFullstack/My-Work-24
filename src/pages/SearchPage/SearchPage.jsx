import React from 'react';
import { Box, Container } from '@mui/material';
import SearchResults from '../../assets/Components/SearchResults/SearchResults';

function SearchPage() {
  return (
    <Box fontFamily="Montserrat">
        <Container>
            
            <Box mt={5}>
               <SearchResults />
            </Box>

        </Container>
    </Box>
  )
}

export default SearchPage;
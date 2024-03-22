import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

const pages = ['Page 1', 'Page 2', 'Page 3'];

function App() {
  return (
    <>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            
              
          
          
          
          

          
        </Toolbar>
      </Container>
    </AppBar>






      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Page1 />} />
            <Route path="blogs" element={<Page2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

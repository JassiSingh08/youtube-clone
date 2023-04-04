import {useState} from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { Paper ,IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
    component="Form"
    onSubmit={() => {}}
    sx={{  // sx for styles
        borderRadius: 20, 
        border: '1px solid #e3e3e3',
        pl:2,  //pl = padding left
        boxShadow: 'none',
        mr: { sm:5 }  // on small devices only set margin right to 5
    }}>

        <input className='search-bar'
        placeholder='Search...' 
        value=''
        onChange={() => {}}
        />   
        <IconButton type="submit" sx={{p:'10px', color:'red'}}>
            <Search/>
        </IconButton>
        
    </Paper>  // paper is a div with white background and some elevation
  )
}

export default SearchBar
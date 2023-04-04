import React from 'react'
import { Stack } from '@mui/material';

import { categories } from '../utils/constant';
import { Category } from '@mui/icons-material';

const SelectedCategory = "New";

const Sidebar = () => (
     <Stack 
     direction= 'row'
     sx={{
        overflowY:"auto", 
        height: { sx: "100%", md: "95%"},
        flexDirection: { md:'column'},
     }}>

        {categories.map((Category) => (
            <button className='category-btn'
             style={{background:Category.name === SelectedCategory && '#fc1503', color:'white'}}
             key={Category.name}
            >
                <span style={{ color: Category.name=== SelectedCategory ? 'white' : 'red', marginRight:'15px' }}>{Category.icon}</span>
                <span style={{opacity: Category.name === SelectedCategory ? '1' : 0.8}}>{Category.name}</span>
            </button>
        ))}
     </Stack>
  )

export default Sidebar
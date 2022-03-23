import React from 'react';
import Icon from '@mdi/react'
import { mdiEarth } from '@mdi/js';


function Header(){
  return(
    <div className='Header'>
      <Icon
        path={mdiEarth}
        size={2}
        color="white"
      />
      <p>my travel journal.</p>
    </div>
  );
}

export default Header;
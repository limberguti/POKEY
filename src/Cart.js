import React, { useState } from 'react';

import "./App.css"

function Cart({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);   
  };

  return (
    <>
        
		<button  type="submit" class="boton-catalogo" onClick={open}></button>
      {isOpen && (
        
        <div style={styles.wrapper}>
            <div style={styles.window}>
            <button  style={styles.closeBtn} onClick={close}>X</button>
            <div>{children}</div>
            </div>
        </div>
      )}
    </>
  );
}


const styles ={
    wrapper: {
        position: 'relative', top : 0, left: 0,width: '100%', height:'100%', display:'center', justifyContent:'center',alignItems:'center' 
    },
    window:{
        width: '300px',
        background: '#fff',
        borderRadius: 5,
        top: '14%',
        left: '55%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        padding: 15,
        color: '#000',
        position: 'absolute',
        zIndex: 9,
        transition: 'transform 0.4s, top 0.4s'
    },
    closeBtn:{
        position: 'absolute',
        top:0,
        right:0,
        background: '#000',
        color: '#fff'
    }
}
export default Cart;

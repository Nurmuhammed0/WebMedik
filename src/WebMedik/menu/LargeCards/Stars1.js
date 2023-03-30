import * as React from 'react';
import Rating from "react-rating-stars-component";

// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';

export default function Stars1() {
  return (
    <div style={{alignItems:"center"}} spacing={1}>
      {/* <Rating name="half-rating" defaultValue={3} precision={0.5} activeColor="red"/> */}
      
      <Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />
    </div>
  );
}
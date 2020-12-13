import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const StyledRating = withStyles({
  iconFilled: {
    color: '#55e7b5',
  },
  // iconHover: {
  //   color: '#ff3d47',
  // },
})(Rating);



export default function CustomizedRatings(data) {
    //console.log("data in rating", data)
  return (

        <StyledRating
          name="customized-empty"
          defaultValue={2.5}
          value={data.rating}
          max={5} 
          precision={0.5}
          size="large"
          scale={5}
          readOnly={true}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />

  );
}
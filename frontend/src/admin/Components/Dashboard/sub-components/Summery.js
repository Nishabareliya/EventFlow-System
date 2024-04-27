import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Summery() {
  return (
    <React.Fragment>
      <h5>Total Monthly Cost</h5>
      <Typography component="p" variant="h4">
      &#x20B9;3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2024
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Total balance
        </Link>
      </div>
    </React.Fragment>
  );
}
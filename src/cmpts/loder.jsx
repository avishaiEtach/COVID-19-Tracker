import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
      <div className=" loder-continer flex">
          <CircularProgress />
          <p>loading...</p>
      </div>
  );
}
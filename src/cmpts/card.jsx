import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';

export default function BasicCard({cardInfo}) {
  return (
    <Card sx={{ minWidth: 100 }}>
      <CardContent>
        <Typography className="flex align-center justify-center" sx={{ fontSize: 14 ,mb: 1 }} color="text.secondary" gutterBottom>
          {cardInfo.title}
        </Typography>
        <Typography className="flex align-center justify-center" variant="h5" sx={cardInfo.title === 'Recovered'? { color: 'green' ,mb: 1}:{ color: 'red', mb: 1 }} component="div">
          {cardInfo.number}
        </Typography>
        <Typography className="flex align-center justify-center" sx={{ mb: 0 }} color="text.secondary">
          Total : {cardInfo.totalNum}
        </Typography>
      </CardContent>
    </Card>
  );
}
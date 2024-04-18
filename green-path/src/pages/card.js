import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function CardB() {
  const  location=useLocation();

  const data=location.state.d;


  console.log(location.state.d);
  return (<>
  <h1 style={{marginLeft:"40vw",marginBottom:"10px"}}>Product</h1>
  <div style={{marginLeft:"10px",display:"inline-grid",gridTemplateColumns:"auto auto auto auto ",padding:"45px",gap:"30px",justifyItems:"center",justifyContent:"center",}}>
   { data.map((e)=>(
        
            <Card sx={{ maxWidth: 345,height:"30vh"}}>
            <CardActionArea>
              <CardContent sx={{marginTop:"20px"}}>
                <Typography sx={{fontSize:"25px",marginBottom:"10px"}}  component="div">
                  {e.name}
                </Typography>
                <Typography  variant="h5" color="text">
                 Price: {e.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <div style={{ display:"flex",flexDirection:"row",justifyItems:"center",alignItems:"center",height:"50px",width:"20vw" }}> */}
            <CardActions >
              <Button size="small" color="primary">
                Buy
              </Button>
            </CardActions>
            {/* </div> */}
          </Card>
        
    ))}
    </div>
    </>
  );
}
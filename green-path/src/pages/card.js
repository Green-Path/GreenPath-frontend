import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, AppBar, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function products(prod) {
  // const originalUrl = prod.link;
  // const firstDotInIndex = originalUrl.indexOf('.in');

  // // Extract the truncated URL
  // const truncatedUrl = originalUrl.substring(0, firstDotInIndex + 3); // Include '.in'
  // console.log(truncatedUrl);
  return (
    <Card sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      color: "#333", // Text color (dark gray)
      backgroundColor: "#F5F5F5", // Light gray background
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
      borderRadius: "8px",
      padding: "20px",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.03)", // Scale up on hover
      },
      padding: "10px",
    }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {prod.name}...
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          Price: {prod.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        <Button
          size="small"
          href={prod.link}
          target="_blank"
          sx={{
            backgroundColor: "#87CEEB", // Light blue button
            color: "#FFF", // White text on button
            "&:hover": {
              backgroundColor: "#7FDBCA", // Lighter blue on hover
            }
          }}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default function CardB() {
  const location = useLocation();

  const data = location.state.d;
  // const type = location.state.product;
  // console.log(type);
  console.log(location.state.d);
  const navigate = useNavigate();
  return (<>
    <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        <Button onClick={(e) => { navigate('/') }} style={{}}>
          <Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            GreenPath
          </Typography>
        </Button>
        <Button color="inherit" onClick={(e) => { navigate('/contactus') }}>
          <Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            About Us
          </Typography>
        </Button>
        <Button color="inherit" onClick={(e) => { navigate('/contactus') }}><Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
          Contact Us
        </Typography></Button>
      </Toolbar>
    </AppBar>
    <div style={{ padding: "20px", backgroundColor: "#B4F1C1" }}>
      <h1 style={{ marginLeft: "40vw", marginBottom: "10px" }}>Products</h1>
      <Grid container spacing={3} sx={{ padding: '5px' }}>
        {data?.map((prod) => (
          <Grid item key={prod.id} xs={12} sm={6} md={4}>
            {products(prod)}
          </Grid>
        ))}


      </Grid>
    </div>
    {/* <div style={{ marginLeft: "10px", display: "inline-grid", gridTemplateColumns: "auto auto auto auto ", padding: "45px", gap: "30px", justifyItems: "center", justifyContent: "center", }}>
      {data.map((e) => (

        <Card sx={{ maxWidth: 345, height: "30vh" }}>
          <CardActionArea>
            <CardContent sx={{ marginTop: "20px" }}>
              <Typography sx={{ fontSize: "25px", marginBottom: "10px" }} component="div">
                {e.name}
              </Typography>
              <Typography variant="h5" color="text">
                Price: {e.price}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions >
            <Button size="small" color="primary">
              Buy
            </Button>
          </CardActions>
        </Card>

      ))}
    </div> */}
  </>
  );
}
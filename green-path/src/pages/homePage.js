import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import banner from './banner.jpeg';
import appli from './appl.jpeg'
import prod from './prod.png'
import blogimg from './blogimg.jpeg'
import bg from './bg.jpeg'

function HomePage() {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
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
            <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid container spacing={3} justify="center" alignItems="center">
                    {/* <Grid item xs={12}>
                        <img src={bg} alt="GreenPath Banner" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Grid> */}
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Finding Energy-Efficient Appliances"
                                height="140"
                                image={appli}
                            />

                            <CardContent>
                                <Button onClick={() => navigate('/appliances')}>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        Finding Energy-Efficient Appliances
                                    </Typography>
                                </Button>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Finding Energy-Efficient Appliances"
                                height="140"
                                image={prod}
                            />

                            <CardContent>
                                <Button onClick={() => navigate('/customer')}>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        Energy-Efficient Products
                                    </Typography>
                                </Button>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Resources"
                                height="140"
                                image={banner}
                            />
                            <CardContent>
                                <Button onClick={() => navigate('/news')}>

                                    <Typography gutterBottom variant="h5" component="h2">
                                        News Resources
                                    </Typography>
                                </Button>
                                <Typography variant="body2" color="textSecondary" component="p">

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Zero-Waste Lifestyle"
                                height="140"
                                image={blogimg}
                            />
                            <CardContent>
                                <Button onClick={() => navigate('/announcements')}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Blogs
                                    </Typography>
                                </Button>
                                <Typography variant="body2" color="textSecondary" component="p">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}

export default HomePage;

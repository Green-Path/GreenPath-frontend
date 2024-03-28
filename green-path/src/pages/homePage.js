import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

function homePage() {
    return (

        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
            <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        GreenPath
                    </Typography>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
            <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <img src="banner_image.jpg" alt="GreenPath Banner" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Finding Energy-Efficient Appliances"
                                height="140"
                                image="energy_appliances.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Finding Energy-Efficient Appliances
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description of this section...
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
                                image="resources.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Resources
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description of this section...
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
                                image="zero_waste.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Zero-Waste Lifestyle
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description of this section...
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default homePage;

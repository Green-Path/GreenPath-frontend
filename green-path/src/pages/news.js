import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Typography, Grid, Badge } from "@mui/material";
import { Card, CardContent, CardActions, Button, AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

async function searchNYT(props) {
    const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=environment&api-key=c2Chkr1TAOzl2QYPwMOzrg0tKiH1szyH`
    );
    const data = await response.json();

    if (data.status === "OK") {
        return data.response.docs;
    } else {
        console.log(data.fault.faultstring);
        return data.fault.details;
    }
}

async function searchNewsapi(props) {
    const response = await fetch(
        `https://newsapi.org/v2/everything?domains=environment&apiKey=1137ef0895fe4a5a963072da204c4b60`
    );
    const data = await response.json();
    console.log(data.articles);
    if (data.status === "OK") {
        return data.articles;
    } else {
        return "error";
    }
}

async function searchGRD(props) {
    const response = await fetch(
        `https://content.guardianapis.com/search?q=${props}&api-key=5c9058e0-66ea-4f44-bb1a-9155caa1f156&show-fields=all`
    );
    const data = await response.json();
    if (data.response.status === "ok") {
        return data.response.results;
    } else {
        return "error";
    }
}

function nytNewsCard(news) {
    return (
        // <Card sx={{ height: "100%", display: "flex", flexDirection: "column", color: "green" }}>
        //     <CardContent>
        //         <Typography variant="h5" gutterBottom>
        //             {` ${news.headline.main.slice(0, 50)}...`}
        //         </Typography>
        //         <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        //             Author:
        //             {` ${news.byline.original}`}
        //         </Typography>
        //         <Typography variant="body2">
        //             {news.abstract.slice(0, 200)}
        //             {"..."}
        //         </Typography>
        //     </CardContent>
        //     <CardActions sx={{ marginTop: "auto" }}>
        //         <Button size="small" href={news.web_url} target="_blank">
        //             Read More
        //         </Button>
        //     </CardActions>
        // </Card>
        // <Card sx={{
        //     height: "100%",
        //     display: "flex",
        //     flexDirection: "column",
        //     color: "white", // Text color
        //     backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)", // Gradient background
        //     padding: "10px",
        //     borderRadius: "8px"
        // }}>
        //     <CardContent>
        //         <Typography variant="h5" gutterBottom>
        //             {news.headline.main.slice(0, 50)}...
        //         </Typography>
        //         <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        //             Author: {news.byline.original}
        //         </Typography>
        //         <Typography variant="body2">
        //             {news.abstract.slice(0, 200)}...
        //         </Typography>
        //     </CardContent>
        //     <CardActions sx={{ marginTop: "auto" }}>
        //         <Button size="small" href={news.web_url} target="_blank">
        //             Read More
        //         </Button>
        //     </CardActions>
        // </Card>

        // <Card sx={{
        //     height: "100%",
        //     display: "flex",
        //     flexDirection: "column",
        //     color: "#333", // Text color (dark gray)
        //     backgroundColor: "#FCFCFC", // Light neutral background
        //     boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)", // Soft shadow
        //     borderRadius: "8px",
        //     padding: "20px",
        //     transition: "transform 0.2s ease-in-out",
        //     "&:hover": {
        //         transform: "scale(1.03)", // Scale up on hover
        //     }
        // }}>
        //     <CardContent>
        //         <Typography variant="h5" gutterBottom>
        //             {news.headline.main.slice(0, 50)}...
        //         </Typography>
        //         <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        //             Author: {news.byline.original}
        //         </Typography>
        //         <Typography variant="body2">
        //             {news.abstract.slice(0, 200)}...
        //         </Typography>
        //     </CardContent>
        //     <CardActions sx={{ marginTop: "auto" }}>
        //         <Button
        //             size="small"
        //             href={news.web_url}
        //             target="_blank"
        //             sx={{
        //                 backgroundColor: "#87CEEB", // Light blue button
        //                 color: "#FFF", // White text on button
        //                 "&:hover": {
        //                     backgroundColor: "#7FDBCA", // Lighter blue on hover
        //                 }
        //             }}
        //         >
        //             Read More
        //         </Button>
        //     </CardActions>
        // </Card>

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
                    {news.headline.main.slice(0, 50)}...
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Author: {news.byline.original}
                </Typography>
                <Typography variant="body2">
                    {news.abstract.slice(0, 200)}...
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <Button
                    size="small"
                    href={news.web_url}
                    target="_blank"
                    sx={{
                        backgroundColor: "#87CEEB", // Light blue button
                        color: "#FFF", // White text on button
                        "&:hover": {
                            backgroundColor: "#7FDBCA", // Lighter blue on hover
                        }
                    }}
                >
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

function grdNewsCard(news) {
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
                    Title:
                    {` ${news.fields.headline.slice(0, 50)}...`}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Author:
                    {` ${news.fields.byline}`}
                </Typography>
                <Typography variant="body2">
                    {news.fields.bodyText.slice(0, 200)}
                    {"..."}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <Button size="small" href={news.web_url} target="_blank" sx={{
                    backgroundColor: "#87CEEB", // Light blue button
                    color: "#FFF", // White text on button
                    "&:hover": {
                        backgroundColor: "#7FDBCA", // Lighter blue on hover
                    }
                }}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

function apiNewsCard(news) {
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Title:
                    {` ${news.title.slice(0, 50)}...`}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Author:
                    {` ${news.author}`}
                </Typography>
                <Typography variant="body2">
                    {news.description.slice(0, 200)}
                    {"..."}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <Button size="small" href={news.url} target="_blank">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

function News() {
    // const { query } = useParams();
    const query = "environment"
    const [nytNews, setNytNews] = useState([]);
    const [nflag, setNflag] = useState(false);
    const [gflag, setGflag] = useState(false);
    const [grdNews, setGrdNews] = useState([]);
    const [news100, setNews100] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(`searching for ${query}`);
        searchNYT(query).then((data) => {
            setNytNews(data);
            setNflag(true);
        });
        searchGRD(query).then((data) => {
            setGrdNews(data);
            setGflag(true);
        });

    }, [query]);


    if (!nflag || !gflag) {
        return (
            <div>
                <h1 className="text-center">Loading...</h1>
            </div>
        );
    }
    else {
        return (
            <div>
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
                    <Typography variant="h4" gutterBottom>
                        Latest News
                    </Typography>
                    <Grid container spacing={3} sx={{ padding: '5px' }}>
                        {nytNews?.map((news) => (
                            <Grid item key={news.id} xs={12} sm={6} md={4}>
                                {nytNewsCard(news)}
                            </Grid>
                        ))}
                        {grdNews?.map((news) => (
                            <Grid item key={news.id} xs={12} sm={6} md={4}>
                                {grdNewsCard(news)}
                            </Grid>
                        ))}

                    </Grid>
                </div>
            </div>
        );

    }
}

export default News;
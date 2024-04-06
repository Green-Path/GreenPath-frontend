import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Typography, Grid, Badge } from "@mui/material";
import { Card, CardContent, CardActions, Button } from "@mui/material";


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
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {` ${news.headline.main.slice(0, 50)}...`}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    Author:
                    {` ${news.byline.original}`}
                </Typography>
                <Typography variant="body2">
                    {news.abstract.slice(0, 200)}
                    {"..."}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto" }}>
                <Button size="small" href={news.web_url} target="_blank">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

function grdNewsCard(news) {
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
                <Button size="small" href={news.web_url} target="_blank">
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
            <div style={{ padding: "20px" }}>
                <Typography variant="h4" gutterBottom>
                    Latest News
                </Typography>
                <Grid container spacing={3}>
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
        );

    }
}

export default News;
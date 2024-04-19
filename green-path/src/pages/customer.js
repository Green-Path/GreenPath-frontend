import "../css/product.css";
import { useState } from "react";
import { Paper, Button, Typography, Toolbar, AppBar } from '@mui/material';
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, useHistory } from "react-router-dom";

export default function Customer({ handleSelectChange, handleMinPriceChange, handleMaxPriceChange, fetchItemLink, item1 }) {
    // const history = useHistory();
    const [title, setTitle] = useState("");
    const [minprice, setMinprice] = useState("");
    const [maxprice, setMaxprice] = useState("");
    const [item, setItem] = useState("Laundary");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new product object
        const product = {
            type: item,
            minPrice: minprice,
            maxPrice: maxprice
        };

        try {
            const res = await fetch(`http://localhost:5000/products`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(product),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }
            // If the request is successful, you can handle the response here
            navigate("/c", { state: { d: data } })
            console.log(data);
        }
        catch (err) {
            // Handle errors
            if (err.message) {
                setError(err.message);
            } else {
                setError("Something went wrong. Please try again later.");
            }
        }
    }

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
                <Toolbar>
                    <Button onClick={(e) => { navigate('/') }} style={{}}>
                        <Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
                            GreenPath
                        </Typography>
                    </Button>
                    <Button color="inherit" onClick={(e) => { navigate('/aboutus') }}>
                        <Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
                            About Us
                        </Typography>
                    </Button>
                    <Button color="inherit" onClick={(e) => { navigate('/contactus') }}><Typography variant="h6" style={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
                        Contact Us
                    </Typography></Button>
                </Toolbar>
            </AppBar>
            <h2>Help save the environment</h2>
            <h1>Select your eco-friendly product:</h1>

            <div class="main">

                <Paper elevation={4} style={{ width: "40%", marginRight: "2rem" }} >
                    <div class="selection" >
                        <form onSubmit={handleSubmit}>
                            <div class="product">
                                <label class="items" for="items">Product: </label>
                                <select class="mp" onChange={(e) => setItem(e.target.value)}>
                                    <option value="Laundry">Laundry</option>
                                    <option value="Kitchen">Kitchen</option>
                                    <option value="Skin">Personal care</option>
                                    <option value="Cleaning">Cleaning</option>
                                    {/* <!-- Add more options as needed --> */}
                                </select>

                            </div>

                            <div class="mp">
                                <label for="minPrice" >Minimum Price:</label>
                                <input type="number" class="price" id="minPrice" name="minPrice" onChange={(e) => setMinprice(e.target.value)} />
                            </div>
                            <div class="Mp">
                                <label for="maxPrice">Maximum Price:</label>
                                <input type="number" class="price" id="maxPrice" name="maxPrice" onChange={(e) => setMaxprice(e.target.value)} />
                            </div>

                            <div class="fetch">
                                <Button type="submit" variant="contained">Fetch Item</Button>
                                {/* <button onChange={fetchItemLink}>Fetch Item Link</button> */}
                            </div>
                        </form>

                    </div>
                </Paper >
            </div >
        </>
    )
}

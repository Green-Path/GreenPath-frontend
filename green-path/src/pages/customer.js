import "../css/product.css";
import { useState } from "react";
import { Paper, Button } from '@mui/material';
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Customer({ handleSelectChange, handleMinPriceChange, handleMaxPriceChange, fetchItemLink, item1 }) {

    const [title, setTitle] = useState("");
    const [minprice, setMinprice] = useState("");
    const [maxprice, setMaxprice] = useState("");
    const [item, setItem] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        ;

        // Create a new announcement object
        const product = {
            title,

        };

        // console.log(newAnnouncement);

        try {
            const res = await fetch(`/blogs`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(product),
            });

            const data = await res.json();
            // console.log(data);

            if (!res.ok) {
                throw new Error(data.message);
            }

        }
        catch (err) {

            if (err.message) {
                setError(err.message);
            }
            else {
                setError("Something went wrong. Please try again later.");
            }
        }
    }
    console.log(maxprice);
    return (
        <>
            <h2>Help save the environment</h2>
            <h1>Select your eco-friendly product:</h1>

            <div class="main">

                <Paper elevation={4} style={{ width: "40%", marginRight: "2rem" }} >
                    <div class="selection">
                        <form onSubmit={handleSubmit}>
                            <div class="product">
                                <label class="items" for="items">Product: </label>
                                <select class="itemSelect" onChange={(e) => setItem(e.target.value)}>
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
                                <Button variant="contained">Fetch Item</Button>
                                {/* <button onChange={fetchItemLink}>Fetch Item Link</button> */}
                            </div>
                        </form>

                    </div>
                </Paper>
                {/* <Paper elevation={4} style={{ width: "40%" }}>
                    <div class="disp" >
                        <div class="name">
                            <label class="ProdName">Product Name: </label>
                        </div>
                        <br />
                        <div class="finprice" >
                            <label className="prodprice">Price: </label>
                        </div>
                        <br />
                        <div class="buy" >
                            <Button variant="outlined" href="------link---------">
                                Link to buy
                            </Button>
                        </div>

                    </div>
                </Paper> */}
            </div>


        </>
    )
}
/*
 function fetchItemLink() {
      const itemSelect = document.getElementById('itemSelect');
      const selectedValue = itemSelect.options[itemSelect.selectedIndex].value;
      const minPrice = document.getElementById('minPrice').value;
      const maxPrice = document.getElementById('maxPrice').value;

     

      // Perform AJAX request to fetch item link based on selected option and price range
      
      
      document.getElementById('itemLink').innerHTML = `Selected Item: ${selectedValue}<br>Minimum Price: ${minPrice}<br>Maximum Price: ${maxPrice}`;
    }
*/

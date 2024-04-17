import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import '../css/AnnouncementSection.css';

const Blogs = () => {
  const navigate = useNavigate(); // Use navigate hook

  const company_id = localStorage.getItem('companyInfo');
  const id = company_id ? JSON.parse(company_id)._id : null;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [announcements, setAnnouncements] = useState([]); // Add announcements state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const newAnnouncement = {
      title,
      description,
      date: date.toISOString(),
    };

    try {
      const res = await fetch(`http://localhost:5000/addblog`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newAnnouncement),
      });

      if (!res.ok) {
        throw new Error(data.message);
      }

      const data = await res.json(); // Wait for response data

      console.log(data); // Print data if needed

      setLoading(false);
      setSuccess(true);
      setError("");
      navigate('/announcements'); // Navigate after successful response
    } catch (err) {
      setLoading(false);
      setSuccess(false);

      if (err.message) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div style={{
      position: "relative",
      display: "flex",
      justifyContent: "center",
      padding: "5vh 5vw",
      backgroundColor: "#B4F1C1",
    }}>
      <Paper sx={{ py: 1, px: 3 }} className="container">
        <Typography variant="h4" sx={{ mt: 3 }} align="center" gutterBottom>
          Add Blogs
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Description"
            fullWidth
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
            rows={2}
            required
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained" color="primary" sx={{ my: 2, width: '15vw' }}>
              Add Blog
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Blogs;

"use client";

import React from "react";
import Image from "next/image";

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function BlogTemplate(): React.JSX.Element {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "darkred",
      },
    },
  });
  const blogData = [
    {
      title: "The Power of Personalized Marketing",
      description:
        "In today's digital age, consumers are inundated with countless ...",
      image: "/images/Personalized-Marketing.jpg",
      link: "/blogs/the-power-of-personalized-marketing.html",
      alt: "Personalized Marketing",
    },
    {
      title: "Mastering SEO: The Key to Online Success",
      description:
        "In the digital age, SEO is more important than ever. Here's how to stay ahead...",
      image: "/images/mastering-seo.jpg",
      link: "/blogs/mastering-seo.html",
      alt: "Mastering SEO",
    },
    {
      title: "Video Marketing: The New Frontier",
      description:
        "In the age of digital marketing, video is king. Here's why...",
      image: "/images/video-marketing.jpg",
      link: "/blogs/video-marketing.html",
      alt: "Video Marketing",
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box id="blog" className="blog-section">
          <Box>
            <Typography gutterBottom variant="h2">
              Fresh Insights - Our Latest Blogs
            </Typography>
          </Box>
          <Box className="blog-carousel">
            <Box className="blog-cards">
              {blogData.map((blog) => (
                <Card className="blog-card">
                  <CardMedia
                    className="blog-image"
                    component="img"
                    height="140"
                    image={blog.image}
                    alt={blog.alt}
                  />
                  <CardContent>
                    <Typography variant="h3">{blog.title}</Typography>
                    <Typography variant="body2" className="blog-card-body">
                      {blog.description}
                    </Typography>
                    <Button
                      href={blog.link}
                      variant="contained"
                      sx={{
                        backgroundColor: "black",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "32px",
                        justifyContent: "left",
                        cursor: "pointer",
                        top: "30px",
                      }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default BlogTemplate;

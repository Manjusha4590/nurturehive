"use client";

import React from "react";
import Image from "next/image";
import blogData from '@/data/blogsdata.json'
import { useRouter } from 'next/navigation';


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
const router = useRouter()
  // const handleReadMore = () => {

  //   // Navigate to the blog post page
  //   router.push(`/blogroute`);
  // };
 
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
              {blogData.map((blog,index) => (
                <Card className="blog-card" key={index}>
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
                      onClick={()=>router.push(blog.blogUrl)}
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

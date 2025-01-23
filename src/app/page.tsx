
import Image from "next/image";
import { Box, Container } from "@mui/material";
import HeaderBar from "./components/appbar";
import BlogTemplate from "./components/blogs/BlogTemplate";
import IntroSection from "./components/introduction";
import ContactPage from "./components/ContactSection/contact";
export default function Home(){

  return(
<Box>

<HeaderBar />


<Box sx={{ marginTop: '110px' }}>
  <IntroSection />
</Box>

<BlogTemplate/>
   
   <Box sx={{ marginTop: '110px'}}>
   <ContactPage/>
   </Box>


</Box>

  )
}
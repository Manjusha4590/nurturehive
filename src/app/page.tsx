
import Image from "next/image";
import { Box, Container } from "@mui/material";
import HeaderBar from "@/components/appbar";
import IntroSection from "@/components/introduction";
export default function Home(){

  return(
<Box>

<HeaderBar />


<Box sx={{ marginTop: '110px' }}>
  <IntroSection />
</Box>

</Box>
  )
}
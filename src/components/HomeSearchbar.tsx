


import { Box } from "@mui/material";
import homeImage from "../assets/karolina-kolodziejczak-7CLArMn7TCM-unsplash.jpg"
import OutlinedInput from '@mui/material/OutlinedInput';



const ariaLabel = { 'aria-label': 'description' };


export default function HomeSearchBar () : JSX.Element
{
    return (

        <Box sx = {{width : "100%" , height : "50vh"}} >
            <img src={homeImage}
                    style={{width:"100%" , height:"40vh" , objectFit:"cover"}}
                    />

            <Box style={{
                    position : "relative" , top : -80 , left : 400,
                }}>
                <Box style={{
                    position : "relative" , top : -10, left : 70 ,fontWeight:'bold', fontSize: 25, color:"rgb(232, 241, 250)","fontFamily": "Monospace",
                }}>
                What do you like to eat ?</Box>
                <OutlinedInput placeholder="Search" inputProps={ariaLabel}
                style={{
                    width : "40%", height : 30 ,borderRadius:20,fontSize: 14,
                    backgroundColor: "rgb(232, 241, 250)"
                }}
            />
            
            
            </Box>





        </Box>


    );
}



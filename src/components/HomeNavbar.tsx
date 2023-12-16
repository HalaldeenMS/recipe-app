


import logoIcon from "../assets/symphony-of-recipes-high-resolution-logo-transparent.svg"
import Box from '@mui/system/Box';
import { Button } from "@mui/material";
import { grey } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";



export default function HomeNavbar() : JSX.Element
{

    const navigate = useNavigate();
    return (
        <Box sx={{display: 'flex' , justifyContent: 'space-between' }}>
            <Box sx={{width: 2/5, display: 'flex' , justifyContent: 'space-between' }} >


                <Box>
                    <img src={logoIcon}
                    style={{width:300 , height:50}}
                    />
                </Box>
                <Box sx={{width: 1/6}}>
                <Button variant="text" sx={{color:"#212121",position:"relative", top:7, left:15,fontSize: 16, "fontFamily": "Monospace", width : 1/2}} >Home</Button>
                </Box>
                <Box sx={{width: 1/5}} ><Button variant="text" sx={{color:"#212121", position:"relative", top:7, right : 15,fontSize: 16, "fontFamily": "Monospace",width : 6/6 }}
                 onClick={() => navigate("/createrecipe")}>Add Recipe
                
                </Button></Box>
                        
            </Box>

            <Box sx={{width: 80}} ><Button 
                                variant="text"  sx={{color:"#212121",position:"relative", top:6,"fontFamily": "Monospace",fontSize: 16}}
                                onClick={() => navigate("/login")}
                                >Log In</Button></Box>





        </Box>

    );
}
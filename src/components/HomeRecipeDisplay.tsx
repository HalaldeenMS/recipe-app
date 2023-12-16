import { Box } from "@mui/material";
import axios from "axios";
import { useEffect , useState } from "react";
import { boolean } from "yup";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function HomeRecipeCardDisplay ()
{

    const [recipes , setRecipes] = useState([]);
    var recipeList : Array<any> = []

    useEffect(() => {
        axios
            .get("http://localhost:3000/recipes")
            .then(function (response) {
                console.log(response);
                setRecipes(response.data);
            
            });
    },[])

    // if ((recipes.length === 0) ) 
    // {
    //     return (
    //         <Box> Nothing to show </Box>
    //     )
    // }

    return (
        <Grid container spacing={2}>
            {

                recipes.map(recipe =>

                    <Grid item xs={2} key={recipe.id} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={recipe.imageString}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {recipe.recipeTitle}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {recipe.summary}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Go to</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                )
            }
        
        
        </Grid>
    )

}
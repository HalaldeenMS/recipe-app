import { Box, Button, TextField } from "@mui/material";
import { useFormik , Form , Field , FieldArray, Formik } from "formik";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



export default function CreateRecipePage() : JSX.Element
{   


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
      

    const initialValues = 
    {
        recipeTitle : 'Enter your recipe name here',
        imageString  : '',
        summary : 'Enter Summary of the Recipe article',
        ingredientList : [],
        steps : 'Enter Steps of the Recipe'
    };

    const convertToBase64 = (file : any) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

    const navigate = useNavigate();
    const [file , setFile] = useState<any | null>(null);




    return (

        <Formik
            
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                console.log("Formik on submit");
                console.log(values)
                actions.setSubmitting(false);
                axios.post("http://localhost:3000/recipes", {
                    recipeTitle : values.recipeTitle,
                    imageString : values.imageString,
                    summary : values.summary,
                    ingredientList :values.ingredientList,
                    steps : values.steps

                })
                .then(function(response){
                    console.log(response);
                })
                .catch(function(error){
                    console.log(error);
                });
                navigate("/")
              }}
            
              
        
        >
        {({

            values,
            handleSubmit,
            handleChange,
            isSubmitting,
            setFieldValue
        }) => (

            <form onSubmit={handleSubmit}>
            <Box>
            <TextField 
                inputProps={{style: {height: "50px", fontSize: 40 , textAlign: 'center'}}} 
                fullWidth 
                title="title"
                margin="normal" 
                id="fullWidth" 
                defaultValue="Enter your recipe name here"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("recipeTitle", e.target.value)}
                value={values.recipeTitle}
            />
    
            <Box 
                sx={{ mb: 1 ,
                width: '100%' , height: "50vh",
                borderColor:"red", 
                border : 2}}
                
            >
                <img src={file} style={{width:"100%" , height:"100%" , objectFit:"cover"}}/>

                <Button 
                sx={{ 
                    width: 300 , height: 50,
                    borderColor:"red"}
                    }
                    variant="contained"
                    component="label"
                    >
                    <VisuallyHiddenInput type="file" onChange={
                        
                        async (e) => 
                        {
                            if (!e.target.files) return;
                            setFile(URL.createObjectURL(e.target.files[0]));
                            const base64 = await convertToBase64(e.target.files[0]);
                            console.log(base64);
                            setFieldValue("imageString", base64)
                            
                        }
                    } 
                    />
                    upload suitable image here
                </Button>
            </Box>
            
            <Box sx={{ 
                    marginTop:6}
                    }>
            <TextField 
                multiline 
                rows={3}
                inputProps={{style: {}}} 
                fullWidth margin="normal" 
                id="fullWidth" 
                defaultValue="Enter Summary of the Recipe article"
                
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("summary", e.target.value)}
                value={values.summary}
            />
            </Box>
            
            
            <Box>


                
                
                <FieldArray name = "ingredientList" >
                {
                     
                    ({insert , remove , push}) => (
                        <Box  sx={{ border : 2}} >

                            <Box sx={{ textTransform: 'capitalize' , textAlign: "center" , fontFamily:'Arial', fontSize: 'h6.fontSize'}}>
                                Ingredients
                            </Box>

                            {values.ingredientList.length > 0 && values.ingredientList.map((ingredient , index) => (
                                 <Box sx={{  display: 'flex',flexDirection: 'row', alignItems: "center" , 
                                 justifyContent : "flex-start" ,height:"10vh",borderColor:"red"}}  key= {index}> 

                                        <Box sx={{ mr: 1 ,ml:0.5 }} >

                                            <Field
                                                name={`ingredientList.${index}.ingredient`}
                                                placeholder="Ingredient"
                                                type="text"/>
                                        </Box>
                                        
                                        <Box  sx={{ mr: 1  }} >

                                            <Field
                                                name={`ingredientList.${index}.description`}
                                                placeholder="Description"
                                                type="text"/>
                                        </Box>

                                        <Button 
                                            onClick={() => {
                                                remove(index);
                                                console.log(values.ingredientList);
                                        
                                        }}>
                                            remove
                                        </Button>

                                 </Box>

                            ))
                            }

                    <Box sx={{  display: 'flex',flexDirection: 'row', alignItems: "center" , 
                justifyContent : "space-around" ,height:"10vh"}}  >
                        
                    
                        <Box>
                            <Button onClick={() => push({ ingredient: '', description: '' })}>
                                Add Ingredient
                            </Button>
                        </Box>
                    </Box> 
                </Box>

                )}
                </FieldArray>
            </Box>

            <TextField 
                multiline 
                rows={100} 
                fullWidth 
                margin="normal" 
                defaultValue="Enter Steps of the Recipe"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFieldValue("steps", e.target.value)}
                value={values.steps}
            />

            </Box>

            <Box sx={{  display: 'flex',flexDirection: 'row', alignItems: "center" , 
                                 justifyContent : "space-around" ,height:"10vh",borderColor:"red" , border:2}}>

                    <Button variant="contained" onClick={() => navigate("/")}>
                                Back Home
                    </Button>

                    <Button variant="contained" type="submit" >
                                Submit
                    </Button>
                
            </Box>

            </form>


        )}

            


        </Formik>

       
      )
}

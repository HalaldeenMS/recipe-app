
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import pageImage from '../assets/chad-montano-eeqbbemH9-c-unsplash.jpg'
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import axios from "axios";





type UserAuthFormArgs = {
    isLoginForm : boolean,
    signUpUrl? : string
}



export default function UserAuthForm (props:UserAuthFormArgs) : JSX.Element
{

    const formName : string = (props.isLoginForm ? 'Sign In' : 'Sign Up');

    const displayUserSignUpFields : string = (props.isLoginForm ? 'none' : 'block');

    const displayUserLoginFields : string = (props.isLoginForm ? 'block' : 'none')

    const defaultTheme = createTheme();
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password : '',
          confirmPassword : ''
        },
        onSubmit: values => {

            const isLoginForm = props.isLoginForm;
            if (isLoginForm)
            {
                axios.post("http://localhost:3000/users", {
                    username : values.username,
                    password : values.password
                })
                .then(function(response){
                    console.log(response);
                    navigate("/");
                })
                .catch(function(error){
                    console.log(error);
                });
            } 
            
            else 
            {
                axios.post("http://localhost:3000/users", {
                    username : values.username,
                    email : values.email,
                    password : values.password,
                    confirmPassword : values.confirmPassword 
                })
                .then(function(response){
                    console.log(response);
                    navigate("/login");
                })
                .catch(function(error){
                    console.log(error);
                });
            }
            


        },
      });

    return  (
        <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${pageImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {formName}
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              
              <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              </Box>
              
              <Box sx = {{display : displayUserSignUpFields}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                />
              </Box>
              <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              </Box>
            

              <Box sx = {{display : displayUserSignUpFields}}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
             
             </Box>


              <FormControlLabel sx={{display:displayUserLoginFields}}
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {formName}
              </Button>
              <Grid container sx={{width: "60vh" }}>
                <Grid item xs >
                    <Box sx = {{display: displayUserLoginFields}}>
                    <Link href="#" variant="body2">
                         Forgot password?
                     </Link>
                    </Box>
                  
                </Grid>
                <Grid item>

                    <Box  sx = {{display: displayUserLoginFields}} >
                    <Link href={props.signUpUrl} variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Box>
                  
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>

        
    );






}

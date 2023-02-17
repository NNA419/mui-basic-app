import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, IconButton, InputAdornment, Modal, Typography } from '@mui/material';
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { FTextField } from '../components/form';
import useAuth from '../hook/useAuth';

const style = {
  position: 'absolute', 
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Login() {
  const auth = useAuth();
  console.log(auth);
  const navigative = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"
  console.log(location);

  const [open, setOpen] = React.useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleClose = () => { setOpen(false); navigative("/") };
  

  const defaultValues = {
    username: "ABC",
    password: "123",
  };
  
  const methods = useForm({ defaultValues });
  

  const {
    reset,
    setError,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
   auth.Login(data.username)
  //  console.log(data);
   reset()
   navigative(from);
   // setError("afterSubmit", { message: "Sever Response Error" });
  };
  

  
return (
  <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <FTextField name="username" label="Username" control={control} />
          <FTextField
            control={control}
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </form>
      </Box>
    </Modal>
  </div>
);
}

export default Login
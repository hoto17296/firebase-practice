import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, TextField, Typography } from '@mui/material'
import * as yup from 'yup'

interface SignupFormInputs {
  email: string
  password: string
}

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({ resolver: yupResolver(validationSchema) })
  const onSubmit = (data: SignupFormInputs) => console.log(data)
  console.log(errors)

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Signup
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          error={'email' in errors}
          helperText={errors.email?.message}
          margin="normal"
          fullWidth
          label="Email"
        />
        <TextField
          {...register('password', { required: true })}
          error={'password' in errors}
          helperText={errors.password?.message}
          margin="normal"
          fullWidth
          label="Password"
          type="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3, mb: 2 }}
        >
          Signup
        </Button>
      </Box>
    </Box>
  )
}

export default Signup

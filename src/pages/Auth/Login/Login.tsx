import React from 'react'
import { InnerSection, Row, Column, Image, Typography, Divider } from '../../../Component/widget/styles'
import { LoginText, LoginSubText, LeftLogin, RightLogin, ImageShape, Wrapper, Remmber, WrapperRemmber, ForgotPassword, ButtonSuginup } from './login.style'
import { useFormik, FormikProvider } from 'formik'
import { InputField, Label, ButtonLogin, SpanError } from '../../../Component/Form/Form.style'
import { schemaValidationLogin as validationSchema } from '../../../utils/validation'
import LoginImage from '../../../Assets/Images/login.png'
import Checkbox from '@material-ui/core/Checkbox'


 interface IInitialValues{
    email:string,
    password:string
 }
const initialValues :IInitialValues = {
    email: '',
    password: '',
}

export const Login = () => {
   const [checked, setChecked] = React.useState<boolean>(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

    const formikLogin = useFormik<IInitialValues>({
        initialValues,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2))
        },
        validationSchema,
      })
    return (
        <Column bg="#FFFFFF" height={948}>
        <InnerSection bg="#FFFFFF">
          <Wrapper>
            <LeftLogin>
            <Column>
            <LoginText>Login.</LoginText>
            <LoginSubText>Login with your data that you entered during registration</LoginSubText>
                    <FormikProvider value={formikLogin}>

            <form onSubmit={formikLogin.handleSubmit}>
                <Column>
            <Label htmlFor="email">Enter your email address</Label>
       <InputField
       width={398}
         name="email"
         type="email"
         placeholder="mohammed@aa.19997@gmail.com"
       />
       {formikLogin.touched.email && formikLogin.errors.email && <SpanError>{formikLogin.errors.email}</SpanError> }
                </Column>
                <Column mt={30}>
       <Label htmlFor="password">Enter your password</Label>
       <InputField
         name="password"
         type="password"
         width={398}

         placeholder="12121212xsddemn87de"
       />
        {formikLogin.touched.password && formikLogin.errors.password && <SpanError>{formikLogin.errors.password}</SpanError> }

                </Column>
                <ButtonLogin type="submit">Login</ButtonLogin>

                </form>
                <Column item="center">

                    <WrapperRemmber>
                        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'indeterminate ' }}
                                />
                      <Remmber>Remember me</Remmber>
                    </WrapperRemmber>
                    <ForgotPassword>Forgot your password?</ForgotPassword>
            <Divider height={2} width="70%"/>
<ButtonSuginup>Sign up now</ButtonSuginup>
                </Column>
</FormikProvider>
            </Column>
            </LeftLogin>
            <RightLogin>
                <ImageShape src={LoginImage} alt="image login continer"/>
            </RightLogin>
            </Wrapper>

            </InnerSection>

            </Column>
    )
}

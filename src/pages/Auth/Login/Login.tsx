import { useState } from 'react'
import { InnerSection, Column, Divider } from '../../../Component/widget/styles'
import {
  LoginText,
  LoginSubText,
  LeftLogin,
  RightLogin,
  ImageShape,
  Wrapper,
  WrapperRemmber,
  ForgotPassword,
  ButtonSuginup,
  Remmber,
} from './login.style'
import { useFormik, Form, FormikProvider } from 'formik'
import { InputField, Label, ButtonLogin, SpanError } from '../../../Component/Form/Form.style'
import { schemaValidationLogin as validationSchema } from '../../../utils/validation'
import LoginImage from '../../../Assets/Images/login.png'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { AuthActions } from '../../../redux/Auth/index'
import { TState } from '../../../redux/Store'

interface IInitialValues {
  email: string;
  password: string;
}
const initialValues: IInitialValues = {
  email: '',
  password: '',
}

 const Login = () => {
  const [checked, setChecked] = useState<boolean>(true)
  const history = useHistory()

  const dispatch = useDispatch()
  const auth = useSelector((state: TState) => state.auth)

  const { error, isLoading } = auth

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const formik = useFormik<IInitialValues>({
    initialValues,
    onSubmit: async (values) => {
      dispatch(AuthActions.loginAction(values, history))
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
              <LoginSubText>
                Login with your data that you entered during registration
              </LoginSubText>
              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                  <Column>
                    <Label htmlFor="email">Enter your email address</Label>
                    <InputField
                      width={398}
                      name="email"
                      type="email"
                      placeholder="mohammed@gmail.com"
                    />
                    {formik.touched.email && formik.errors.email
? (
                      <SpanError>{formik.errors.email}</SpanError>
                    )
: null}
                  </Column>
                  <Column mt={30}>
                    <Label htmlFor="password">Enter your password</Label>
                    <InputField
                      name="password"
                      type="password"
                      width={398}
                      placeholder="12121212xsde"
                    />
                    {formik.touched.password && formik.errors.password
? (
                      <SpanError>{formik.errors.password}</SpanError>
                    )
: null}

                    {auth.error && <SpanError>{auth.error}</SpanError>}
                  </Column>
                  <ButtonLogin disabled={auth.isLoading} type="submit" iSDisabled={auth.isLoading}>
                    Login
                  </ButtonLogin>
                </Form>
              </FormikProvider>
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
                <Divider height={2} width="70%" />
                <ButtonSuginup onClick={() => history.push('/signup')}>Sign up now</ButtonSuginup>
              </Column>
            </Column>
          </LeftLogin>
          <RightLogin>
            <ImageShape src={LoginImage} alt="image login continer" />
          </RightLogin>
        </Wrapper>
      </InnerSection>
    </Column>
  )
}
export default Login

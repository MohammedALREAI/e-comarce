/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react'
import { Label, InputField, SpanError, ButtonLogin } from '../../../Component/Form/Form.style'
import { Column, SpinnerContainer, InnerSection } from '../../../Component/widget/styles'
import { Form, useFormik, FormikProvider } from 'formik'
import { LoginText } from '../../../pages/Auth/Login/login.style'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
  updateProfileSchema as validationSchema,
  updateProfileSchemaType,
} from '../../../utils/validation'
import { AppDispatch, TState } from '../../../redux/Store'
import { getProfile, updateProfile } from '../../../redux/User/UserAction'

const UpdateProfile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((store: TState) => store.user)

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  const initialValues: updateProfileSchemaType = {
    email: user.userProfile?.user?.email || '',
    password: '',
    name: user.userProfile?.user?.name as string | '',
    passwordConfirmation: '',
  }
  const formik = useFormik<updateProfileSchemaType>({
    initialValues,
    onSubmit: async (values) => {
      dispatch(updateProfile(values, history))
    },
    validationSchema,
  })

  return user.userProfile?.isLoading
? (
    <SpinnerContainer />
  )
: (
    <Column bg="#FFFFFF" height={948}>
      <InnerSection bg="#FFFFFF">
        <Column>
          <LoginText>Update your Profile</LoginText>
          <FormikProvider value={formik}>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
              <Column mt={-10}>
                <Label htmlFor="name">Name</Label>
                <InputField width={398} name="name" type="name" placeholder="your name" />
                {formik.touched.name && formik.errors.name
? (
                  <SpanError>{formik.errors.name}</SpanError>
                )
: null}
              </Column>
              <Column>
                <Label htmlFor="email">Enter your email address</Label>
                <InputField
                  width={398}
                  name="email"
                  type="email"
                  placeholder="mohammed@aa.19997@gmail.com"
                />
                {formik.touched.email && formik.errors.email
? (
                  <SpanError>{formik.errors.email}</SpanError>
                )
: null}
              </Column>
              <Column mt={30}>
                <Label htmlFor="password">Enter your password</Label>
                <InputField name="password" type="password" width={398} placeholder="00" />
                {formik.touched.password && formik.errors.password
? (
                  <SpanError>{formik.errors.password}</SpanError>
                )
: null}
              </Column>
              <Column mt={30}>
                <Label htmlFor="passwordConfirmation"> Confirm your Password</Label>
                <InputField name="passwordConfirmation" type="password" width={398} />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
? (
                  <SpanError>{formik.errors.passwordConfirmation}</SpanError>
                )
: null}
                {user.userProfile?.error ? <SpanError>{user.userProfile?.error}</SpanError> : null}
              </Column>

              <ButtonLogin disabled={user.userProfile?.isLoading} type="submit">
                Update Profile
              </ButtonLogin>
            </Form>
          </FormikProvider>
        </Column>
      </InnerSection>
    </Column>
  )
}

export default UpdateProfile

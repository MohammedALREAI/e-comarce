import React, { useEffect } from 'react'
import { Label, InputField, SpanError, ButtonLogin } from 'Component/Form/Form.style'
import { Column, SpinnerContainer, InnerSection } from 'Component/widget/styles'
import { Form, useFormik } from 'formik'
import { LoginText } from 'pages/Auth/Login/login.style'

import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { bindActionCreators } from 'redux'
import { updateProfileSchema as validationSchema, updateProfileSchemaType } from '../../../utils/validation'
import { UserActions } from 'redux/User'
import { TState } from 'redux/Store'
export const UpdateProfile = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector((store: TState) => store.user)
    const { updateProfile, getProfile } = bindActionCreators(UserActions, dispatch)
    const { error, isLoading } = user


    useEffect(() => {
        getProfile()
    }, [dispatch])

    const initialValues: updateProfileSchemaType = {
        email: (user.userProfile?.user?.email) as string | '',
        password: '',
        name: (user.userProfile?.user?.name) as string | '',
        passwordConfirmation: '',

    }


    const formik = useFormik<updateProfileSchemaType>({
        initialValues,
        onSubmit: async (values) => {
            updateProfile(values, history)
        },
        validationSchema,
    })


    return user.userProfile?.isLoading
? (<SpinnerContainer />)
        : (<Column bg="#FFFFFF" height={948}>
        <InnerSection bg="#FFFFFF">
        <Column>
            <LoginText>Update  your Profile</LoginText>
            <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Column mt={-10}>
                    <Label htmlFor="name">Name</Label>
                    <InputField
                        width={398}
                        name="name"
                        type="name"
                        placeholder="your name"
                    />
                    {formik.touched.name && formik.errors.name ? <SpanError>{formik.errors.name}</SpanError> : null}
                </Column>
                <Column>
                    <Label htmlFor="email">Enter your email address</Label>
                    <InputField
                        width={398}
                        name="email"
                        type="email"
                        placeholder="mohammed@aa.19997@gmail.com"
                    />
                    {formik.touched.email && formik.errors.email ? <SpanError>{formik.errors.email}</SpanError> : null}
                </Column>
                <Column mt={30}>
                    <Label htmlFor="password">Enter your password</Label>
                    <InputField
                        name="password"
                        type="password"
                        width={398}
                        placeholder="00"
                    />
                    {formik.touched.password && formik.errors.password ? <SpanError>{formik.errors.password}</SpanError> : null}

                </Column>
                <Column mt={30}>
                    <Label htmlFor="ConfirmPassword">  Confirm your Password</Label>
                    <InputField
                        name="passwordConfirmation"
                        type="password"
                        width={398}
                        placeholder="jsj"
                    />
                    {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? <SpanError>{formik.errors.passwordConfirmation}</SpanError> : null}
                    {error ? <SpanError>{error}</SpanError> : null}

                </Column>

                <ButtonLogin disabled={isLoading} type="submit">Sign up</ButtonLogin>
            </Form>
        </Column>
      </InnerSection>
        </Column>
        )
}

import React from 'react'
import { InnerSection, Column, Divider } from 'Component/widget/styles'
import { LoginText, LoginSubText, LeftLogin, RightLogin, ImageShape, Wrapper, Remmber } from '../Login/login.style'
import { useFormik, Form } from 'formik'
import { InputField, Label, ButtonLogin, SpanError } from 'Component/Form/Form.style'
import { schemaValidationSignUp as validationSchema, schemaValidationSignUpType } from 'utils/validation'
import SingupImage from '../../../Assets/Images/singup.png'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { UserActions } from 'redux/User/index'
import { bindActionCreators } from 'redux'
import { TState } from 'redux/Store'

const initialValues: schemaValidationSignUpType = {
    email: '',
    password: '',
    name: '',
    passwordConfirmation: '',
}

export const Signup = () => {
    const history = useHistory()

    const dispatch = useDispatch()
    const user = useSelector((state: TState) => state.user)

    const { error, isLoading } = user
    const { singUpSuccess } = bindActionCreators(UserActions, dispatch)
    const formSingUp = useFormik<schemaValidationSignUpType>({
        initialValues,
        onSubmit: async (values) => {
            singUpSuccess(values, history)
        },
        validationSchema,
    })
    return (
        <Column bg="#FFFFFF" height={948}>
            <InnerSection bg="#FFFFFF">
                <Wrapper>
                    <LeftLogin>
                        <Column>
                            <LoginText>Signup.</LoginText>
                            <LoginSubText>Sign up and get exclusive offers from us</LoginSubText>
                            <Form onSubmit={formSingUp.handleSubmit} onReset={formSingUp.handleReset}>
                                <Column mt={-10}>
                                    <Label htmlFor="name">Name</Label>
                                    <InputField width={398} name="name" type="name" placeholder="your name" />
                                    {formSingUp.touched.name && formSingUp.errors.name
? (
                                        <SpanError>{formSingUp.errors.name}</SpanError>
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
                                    {formSingUp.touched.email && formSingUp.errors.email
? (
                                        <SpanError>{formSingUp.errors.email}</SpanError>
                                    )
: null}
                                </Column>
                                <Column mt={30}>
                                    <Label htmlFor="password">Enter your password</Label>
                                    <InputField name="password" type="password" width={398} placeholder="121212127de" />
                                    {formSingUp.touched.password && formSingUp.errors.password
? (
                                        <SpanError>{formSingUp.errors.password}</SpanError>
                                    )
: null}
                                </Column>
                                <Column mt={30}>
                                    <Label htmlFor="ConfirmPassword"> Confirm your Password</Label>
                                    <InputField
                                        name="passwordConfirmation"
                                        type="password"
                                        width={398}
                                        placeholder="12121287de"
                                    />
                                    {formSingUp.touched.passwordConfirmation &&
                                    formSingUp.errors.passwordConfirmation
? (
                                        <SpanError>{formSingUp.errors.passwordConfirmation}</SpanError>
                                    )
: null}
                                    {error ? <SpanError>{error}</SpanError> : null}
                                </Column>

                                <ButtonLogin disabled={isLoading} type="submit">
                                    Sign up
                                </ButtonLogin>
                                <Column item="center" mt={30}>
                                    <Divider height={2} width="100%" mb={30} />
                                    <Remmber>
                                        Have an account{' '}
                                        <span>
                                            {' '}
                                            <Link to="/login">Login?</Link>
                                        </span>
                                    </Remmber>
                                </Column>
                            </Form>
                        </Column>
                    </LeftLogin>
                    <RightLogin>
                        <ImageShape src={SingupImage} alt="image login continer" />
                    </RightLogin>
                </Wrapper>
            </InnerSection>
        </Column>
    )
}

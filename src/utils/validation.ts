
import * as Yup from 'yup'

export const schemaValidationLogin = Yup.object({
    email: Yup.string().email('it should be correct email ')
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required email'),
   password: Yup.string()
     .min(4, 'Too Short!')
     .max(50, 'Too Long!').matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
     .required('Required'),
})
export const schemaValidationSignUp = Yup.object({

    email: Yup.string().email('it should be correct email ')
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required email'),
    name: Yup.string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
    password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!').matches(
       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
       'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character')
    .required('Required'),

    confirmPassword: Yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (password:string) => (!!(password && password.length > 0)),
      then: Yup.string().oneOf([Yup.ref('password')], "Password doesn't match"),
    }),
})

// import { Component, ReactNode } from 'react'
// import { Route, Redirect } from 'react-router-dom'

// const PrivateRoute = ({ component: any, ...rest }) => {
//   const _id = JSON.parse(localStorage.getItem('user') || '{}')._id
//   if (_id) {
//     return <Route {...rest} component={(props) => <Component {...props} />} />
//   } else {
//     return <Redirect to="/login" />
//   }
// }

// export default PrivateRoute

export const me = () => {
  return 'e'
}

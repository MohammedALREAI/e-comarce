import React, { Component, ReactNode, ComponentType } from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { RouteProps } from 'react-router'
import { useToken } from './useToken'

interface IPrivateRoute extends RouteProps {
  token: boolean;
  Component: React.LazyExoticComponent<() => JSX.Element>
}

const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const token = useToken()

    return (
      <Route
        {...rest}
        render={(props) => {
          return token ? <Component {...props} /> : <Redirect to="/login" />
        }}
      ></Route>
    )
  }

export default PrivateRoute

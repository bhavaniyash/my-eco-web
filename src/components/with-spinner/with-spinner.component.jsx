import React from 'react'
import { SpinnerOverlay, SpinnerContainer, LoadingText } from './with-spinner.styles'
const WithSpinner = (WrappedComponent) => {
    const Spinner = ({isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <LoadingText>Hey Welcome,<br/>My Name is Yash<br/>ohh.....Loding</LoadingText>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ):(
                <WrappedComponent {...otherProps}/>
            )
    }
    return Spinner;
}

export default WithSpinner;
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({ price }) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Hcr59If3Hn5BLfLNdteyaTLDzz6Sf4g9CMEK21WZm7BHjEXbVLl2uqXNK4b9Gex3GBZrZTiP2aqV5QkncN7uasa001eoP4pJr'

    const onToken = token => {
        console.log(token)
        alert("Hey meet My Name Is Yash Your dummy payment successfull");
    }
    return (
        <StripeCheckout
            label="purchase"
            name='Yash Shop Ltd.'
            billingAddress
            shippingAddress
            image='https://cdn.3dnames.co/previews/ae01/250x250/y/ae01yash3dxx.jpg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="purchase"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

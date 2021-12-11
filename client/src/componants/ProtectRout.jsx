import React from 'react'
import { Route } from 'react-router'

const ProtectRoute = ({component:Componanet,authenticed, ...rest}) => {
    
        return (
        <Route {...rest} render = {props => {
            if (authenticed){return <Componanet {...props}/>}
        }}/>
    )
}

export default ProtectRoute

import React from 'react'
import FormattedMessage from '../components/FormattedMessage'
import AxiosOnMount from '../lecture/AxiosOnMountDemo'
import HookDemo from '../lecture/HookDemo'

const Examples = (props) => {
    return (
        <div>
            <h1>Examples Here</h1>
            <h3>Formatred Message component</h3>
            <FormattedMessage type='alert'>
                <p>error</p>
            </FormattedMessage>
            <FormattedMessage type='warn'>
                <p>warning</p>
            </FormattedMessage>
            <FormattedMessage >
                <p>default</p>
            </FormattedMessage>
            {/* <h3>HookDemo.js</h3> */}
            {/* <HookDemo /> */}
            <h3>AxiosOnMount</h3>
            <AxiosOnMount />

        </div>
    )
}

export default Examples


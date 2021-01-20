import React, { FunctionComponent } from 'react'

interface TextInformation {
    kmom: string
    className: string
}

const Text: FunctionComponent<TextInformation> = (props) => {
    return (
        <div className={props.className}>
            <h1>kmom{props.kmom}</h1>
            <br />
            {props.children}
        </div>
    )
}

export default Text

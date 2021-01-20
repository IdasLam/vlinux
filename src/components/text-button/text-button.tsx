import React, { FunctionComponent } from 'react'

interface ButtonInterface {
    setKmom: (kmom: string) => void
    kmom: string
}

const Button: FunctionComponent<ButtonInterface> = (state) => {
    return (
        <button
            onClick={() => {
                state.setKmom(state.kmom)
            }}
        >
            kmom{state.kmom}
        </button>
    )
}

export default Button

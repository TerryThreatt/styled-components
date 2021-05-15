import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryButton, {SecondaryButton, TertiaryButton} from './components/Buttons'

const App = () => (
    <div>
        <PrimaryButton>Hello World!</PrimaryButton>
        <SecondaryButton>Goodbye World!</SecondaryButton>
        <TertiaryButton>Hey World!</TertiaryButton>
    </div>

)

ReactDOM.render(<App />, document.querySelector("#root"))
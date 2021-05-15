import React from 'react'
import ReactDOM from 'react-dom'
import PrimaryButton, {SecondaryButton, TertiaryButton} from './components/Buttons'

const App = () => (
    <div>
        <PrimaryButton>Hello World!</PrimaryButton>
        <SecondaryButton>Submit</SecondaryButton>
        <TertiaryButton>X</TertiaryButton>
    </div>

)

ReactDOM.render(<App />, document.querySelector("#root"))
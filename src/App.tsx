import './style.css'
// import IMAGE from './react.png';
// import LOGO from './logo.svg';
import { Counter } from './Counter'

export const App = () => {
  // const name ="idan"
  return (
    <>
      <h1>
        Edited1 React Typescript Webpack Starter Template -
        {process.env.NODE_ENV}
      </h1>
      <Counter />
    </>
  )
}

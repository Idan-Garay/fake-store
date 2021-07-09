import './style.css';     
import IMAGE from './react.png';
import LOGO from './logo.svg';
import { Counter } from './Counter';

export const App = () => {
    return  (
        <>
            <h1>React Typescript Webpack Starter Template - {process.env.NODE_ENV}</h1>
            <Counter />
        </>
    )
}
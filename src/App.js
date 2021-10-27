// import Form from './components/Form';

// for form handling

// function App() {
//     return (
//         <div>
//             <Form />
//         </div>
//     );
// }

// for lifting state up

// function App() {
//     return (
//         <div>
//             <Calculator />
//         </div>
//     );
// }

// eslint-disable-next-line no-unused-vars
// function App() {
//     return (
//         <div>
//             <Text />
//         </div>
//     );
// }

// for composition

// function App() {
//     return (
//         <Emoji>
//             {({ addEmoji }) => (
//                 <Bracket>
//                     {({ addBracket }) => <Text emojiFunc={addEmoji} bracketFunc={addBracket} />}
//                 </Bracket>
//             )}
//         </Emoji>
//     );
// }

// for higher order components

// import ClickCounter from './components/higherComponents/ClickCounter';
// import HoverCounter from './components/higherComponents/HoverCounter';

// function App() {
//     return (
//         <div>
//             <ClickCounter />
//             <HoverCounter />
//         </div>
//     );
// }

// for HOC component

// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';

// for render Props

// import ClickCounter from './components/renderProps/ClickCounter';
// import HoverCounter from './components/renderProps/HoverCounter';
// import MainCounter from './components/renderProps/MainCounter';

// function App() {
//     return (
//         <>
//             <MainCounter
//                 render={(count, incrementCounter) => (
//                     <ClickCounter count={count} incrementFunc={incrementCounter} />
//                 )}
//             />

//             <MainCounter
//                 render={(count, incrementCounter) => (
//                     <HoverCounter count={count} incrementFunc={incrementCounter} />
//                 )}
//             />
//         </>
//     );
// }

// for Context Api

// import React from 'react';
// import ClickCounter from './components/contextApi/withConntextApi/ClickCounter';
// import HoverCounter from './components/contextApi/withConntextApi/HoverCounter';
// import MainCounter from './components/contextApi/withConntextApi/MainCounter';
// import LibraryContext from './components/contextApi/withConntextApi/RealContextApi';
// import Section from './components/contextApi/withConntextApi/Section';

// class App extends React.Component {
//     state = {
//         // eslint-disable-next-line react/no-unused-state
//         theme: 'light',

//         // eslint-disable-next-line react/no-unused-state
//         switchTheme: () => {
//             this.setState(({ theme }) => {
//                 if (theme === 'light') {
//                     return {
//                         theme: 'dark',
//                     };
//                 }
//                 return {
//                     theme: 'light',
//                 };
//             });
//         },
//     };

//     render() {
//         return (
//             <>
//                 <MainCounter>
//                     {(count, incrementFunc) => (
//                         <ClickCounter count={count} counterFunc={incrementFunc} />
//                     )}
//                 </MainCounter>

//                 <MainCounter>
//                     {(count, incrementFunc) => (
//                         <HoverCounter
//                             count={count}
//                             counterFunc={incrementFunc}
//                             themeFunc={this.state.theme}
//                             themeChangerFunc={this.state.switchTheme}
//                         />
//                     )}
//                 </MainCounter>
//                 <LibraryContext.Provider value={this.state}>
//                     <Section />
//                 </LibraryContext.Provider>
//             </>
//         );
//     }
// }

// for hooks *************************************//////////***********************************************************************

// import UseStateHook from './hook/UseStateHook';

// function App() {
//     return (
//         <div>
//             <UseStateHook />
//         </div>
//     );
// }

// for counter hook

// import Counter from './hook/Counter';

// function App() {
//     return (
//         <div>
//             <Counter />
//         </div>
//     );
// }

// fro input hook

// import Input from './hook/Input';

// function App() {
//     return (
//         <div>
//             <Input />
//         </div>
//     );
// }

// for sideeffect using class
// import SideEffects from './hook/TimerCounterTitle';

// function App() {
//     return (
//         <div>
//             <SideEffects />
//         </div>
//     );
// }

// for sideEffects using hook
// import { useState } from 'react';
// import UseEffectHook from './hook/UseEffectsHook';

// function App() {
//     const [show, setShow] = useState(true);

//     return (
//         <div>
//             {show && <UseEffectHook />}
//             <button type="button" onClick={() => setShow((prevState) => !prevState)}>
//                 {show ? 'hide' : 'show'}
//             </button>
//         </div>
//     );
// }

//* ****************************************** for useCallback & UseMamo****************************************************
// import { useCallback, useMemo, useState } from 'react';
// import Button from './hook/useCallbackUseMemo/Button';
// import ShowCount from './hook/useCallbackUseMemo/ShowCount';
// import Title from './hook/useCallbackUseMemo/Title';

// function App() {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const incrementFunc1 = useCallback(() => {
//         setCount1((prevState) => prevState + 1);
//     }, []);
//     const incrementFunc2 = useCallback(() => {
//         setCount2((prevState) => prevState + 5);
//     }, []);

//     const evenodd = useMemo(() => {
//         let i = 0;
//         while (i < 1000000000) {
//             i += 1;
//         }
//         return count1 % 2 === 0;
//     }, [count1]);

//     return (
//         <div>
//             <Title />
//             <ShowCount counterName="counter 1" count={count1} />
//             <span>{evenodd ? 'even' : 'odd'}</span>
//             <br />
//             <Button type="button" increNum="one" incrementFunc={incrementFunc1} />
//             <br />
//             <hr />
//             <ShowCount counterName="counter 2" count={count2} />
//             <Button type="button" increNum="five" incrementFunc={incrementFunc2} />
//         </div>
//     );
// }

//* ****************************************** for useRef hook****************************************************
// import InputFocus from './hook/useRef/inputFocus';

// function App() {
//     return (
//         <div>
//             <InputFocus />
//         </div>
//     );
// }

//* ****************************************** for useReducer hook****************************************************

// import Counter from './hook/usereducer/Counter';

// function App() {
//     return <Counter />;
// }

// for complex useReduce hook

// import ComplexCounter from './hook/usereducer/ComplexCounter';

// function App() {
//     return <ComplexCounter />;
// }

//* ****************************************** for useReducer with context api hook****************************************************

// import React, { useReducer } from 'react';
// // eslint-disable-next-line import/no-cycle
// import ComponentA from './hook/usereducer/useReduceWithContext/ComponentA';

// export const counterContext = React.createContext();

// function App() {
//     const init = 0;
//     const reducer = (state, action) => {
//         switch (action) {
//             case 'increment':
//                 return state + 1;
//             case 'decrement':
//                 return state - 1;
//             default:
//                 return state;
//         }
//     };
//     const [count, dispatch] = useReducer(reducer, init);

//     return (
//         <div>
//             <div>Count : {count}</div>
//             <counterContext.provider value={{ countDispatch: dispatch }}>
//                 <ComponentA />
//             </counterContext.provider>
//             <p>jibon</p>
//         </div>
//     );
// }

//* ****************************************** for useReducer with useEffect using state****************************************************

// import GetPost from './hook/usereducer/useReducerWithUseEffect/GetPostUsingState';

// function App() {
//     return (
//         <div>
//             <GetPost />
//         </div>
//     );
// }

//* ****************************************** for useReducer with useEffect using rediuceer****************************************************
// import GetPostUsingRedducer from './hook/usereducer/useReducerWithUseEffect/GetPostUsingReduce';

// function App() {
//     return (
//         <div>
//             <GetPostUsingRedducer />
//         </div>
//     );
// }

//* ****************************************** for Custom Hook ****************************************************
// import LayoutComponentOne from './hook/customHook/LayoutCompOne';
// import LayoutComponentTwo from './hook/customHook/layoutCompTwo';

// function App() {
//     return (
//         <div>
//             <LayoutComponentOne />
//             <LayoutComponentTwo />
//         </div>
//     );
// }

//* ****************************************** for Styled Component ****************************************************
// import GlobalStyle from './styledComponents/styles/Global.style';
// import Tutorial from './styledComponents/Tutorial';

// export default function App() {
//     return (
//         <>
//             <GlobalStyle />
//             <Tutorial />
//         </>
//     );
// }

//* ****************************************** for Router ****************************************************
// import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import About from './router/About';
// import Comments from './router/Comments';
// import Dashboard from './router/Dashboard';
// import Error from './router/Error';
// import Home from './router/Home';
// import Navbar from './router/Navbar';
// import Post from './router/Post';
// import Service from './router/Service';
// import './router/style/style.css';

// function App() {
//     const islogged = true;
//     return (
//         <Router>
//             <Navbar />
//             <Switch>
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/about" component={About} />
//                 <Route exact path="/service" render={() => <Service num="10" />} />

//                 {/* <Route exact path="/service">
//                     <Service num={5} />
//                 </Route> */}
//                 <Route exact path="/post/:category" component={Post} />
//                 <Route path="/dashboard" component={Dashboard} />
//                 <Route exact path="/login">
//                     {islogged ? <Redirect to="/Dashboard" /> : <Home />}
//                 </Route>
//                 <Route exact path="/service/comments" component={Comments} />

//                 <Route component={Error} />
//             </Switch>
//         </Router>
//     );
// }

// export default App;

//* ****************************************** for IceCream Project**************************************************************************

// import React from 'react';
// import './icecreamProject/App.css';
// import Body from './icecreamProject/components/Body/Body';
// import Footer from './icecreamProject/components/Footer/Footer';
// import Header from './icecreamProject/components/Header/Header';
// import Layout from './icecreamProject/components/Layout/Layout';

// function App() {
//     return (
//         <Layout>
//             <Header />
//             <Body />
//             <Footer />
//         </Layout>
//     );
// }

//* ****************************************** for Movie Project ***********************************************************************

// import Main from './moviesWebsiteProject/components/Main';
// import './moviesWebsiteProject/style/app.css';

// function App() {
//     return <Main />;
// }

//* ****************************************** for Sumit Quiz project ***********************************************************

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './sumitQuizProject/contexts/AuthContext';
import Home from './sumitQuizProject/pages/home/Home';
import Login from './sumitQuizProject/pages/login/Login';
import Navbar from './sumitQuizProject/pages/navbar/Navbar';
import Quiz from './sumitQuizProject/pages/quiz/Quiz';
import Result from './sumitQuizProject/pages/result/Result';
import Signup from './sumitQuizProject/pages/signup/Signup';
import PrivateRoute from './sumitQuizProject/PrivateRoute';
import PublicRoute from './sumitQuizProject/PublicRoute';
import './sumitQuizProject/style/app.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PublicRoute exact path="/signup" component={Signup} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PrivateRoute exact path="/result/:id" component={Result} />
                    <PrivateRoute exact path="/quiz/:id" component={Quiz} />
                </Switch>
            </AuthProvider>
        </Router>
    );
}

//* ****************************************** for thapa Filter Image Project **************************************************************
// import FilterImage from './ThapaTechnical/project-filterImage/FilterImage';

// function App() {
//     return (
//         <>
//             <FilterImage />
//         </>
//     );
// }

export default App;

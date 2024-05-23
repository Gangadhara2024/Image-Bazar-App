// @@@@ useEffect in react.

//   const EffectExample = () => {
//      useEffect(() => {
//         console.log('some data');
//      }, []);
//    return (
//     <div>
//          <h1>useEffect</h1>
//      </div>
//    )
//  }
//  export default EffectExample;

// ==>>> useEffect(function, []) => after mounting(excuting function) the useEffect will excute.

//  let x = 19;

//  const EffectExample = () => {
//    const [count, setCount] = useState(10);

//      useEffect(() => {
//         console.log('some data');
//      }, [x]);

//    return (
//      <div>
//          <h1>count: {count} </h1>
//          <button onClick={() => x++}>inc x</button>
//          <button onClick={() => setCount(count + 1)}>inc</button>
//      </div>
//    )
//  }
//  export default EffectExample;

//  ==>>> useEffect(function, [a, b]) => if the dependency list value changes then useEffect callback excutes.
//                                   => if the dependency list remains same, then useEffect callback will not excutes.

// const EffectExample = () => {
//      useEffect(() => {
//         console.log('some data');
//      });
//    return (
//     <div>
//          <h1>useEffect</h1>
//      </div>
//    )
//  }
//  export default EffectExample;

//  ==>>> useEffect(function) => if dependency array is not present in this case after mouting and update useEffect will excutes.

// const EffectExample = () => {
//   const [count, setCount] = useState(10);

//     useEffect(() => {
//         console.log('some data');
//     }, [count]);

//   return (
//     <div>
//         <h1>count: {count} </h1>
//         <button onClick={() => x++}>inc x</button>
//         <button onClick={() => setCount(count + 1)}>inc</button>
//     </div>
//   )
// }
// export default EffectExample;

// ==>>> for every state change the useEffect will excutes.
//   1st render => [10]
//   2nd render => [11]
//   3rd render => [12] so on.....

//////

//   const ChildComponent = () => {
//   useEffect(() => {
//     // this effect is called sideEffect.
//     console.log("inside effect");

//     return function () {
//       console.log("clean up function"); // this return function is called as cleanup/disposer function.
//     };                                  // when childcomponent will die(unmounted) then disposer function will excute.
//   }, []);

//   return (
//     <div style={{ padding: "20px", border: "1px solid blue" }}>
//       <h1>child component</h1>
//     </div>
//   );
// };

// const EffectExample = () => {
//   const [toggle, settoggle] = useState(true);

//   return (
//     <div>
//       component unmount
//       {toggle && <ChildComponent />}
//       <button onClick={() => settoggle(!toggle)}>toggle child component</button>
//     </div>
//   );
// };
// export default EffectExample;

// #@#@#@

// navigator.geolocation.getCurrentPosition();  => this function fetches geolocation.
// this function takes 3 callbacks / 1. success callback / 2. error callback / 3. options

// @@@@ sass examples.

// $bgcolor: #b48484;

// @import './styles.scss';                             // we can import styles from other mosule/file.

// @mixin setitem($direction, $gap, $color) {          // here we can give ($gap:30px) if not included in include setitem.
//   display: flex;
//   flex-direction: $direction;                       // mixin syntax
//   gap: $gap;
// }
// .app {
//   border: 2px solid blue;
//   background-color: $backgroundcolor;
//   .btn {
//     background-color: $bgcolor;
//     border: none;
//     color: white;
//     &:hover {
//       background-color: rgb(153, 101, 101);
//       color: #020202;
//     }
//   }
//   .container{
//     // margin: 20px;
//     @include setitem(column, 50px , red );        // using mixins
//   }
// }

// // sass => we use Mixins => functions

// @@@@ AXIOS example

// import axios from "axios";
// import React, { useEffect } from "react";

// const AxiosExample = () => {
//   const pincodeInfo = async () => {
//     try {
//       const Response = await axios({
//         url: `https://api.postalpincode.in/pincode/${531055}`,
//         method: "POST",
//         params: {
//           name: "gangadhar",
//           age: 26,
//         },
//       });
//       console.log(Response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     pincodeInfo();
//   }, []);
//   return null;
// };

// export default AxiosExample;

// // Axios => by using Axios request/Response handling is easy. we use AXIOS instead of FETCH method.
// // axios.get(); => will give get request.
// // axios.post(); => will give post request.
// // axios.delete(); => will give delete request.

//         @#@#@# useREF HOOK

// useRef => useref({}); is syntax.

// let arr = [];

// function App() {
//   const [count, setCount] = useState(10);

//   // const obj = { name: "gangadhar" };
//   const obj = useRef({ name: "gangadhar", age: 26 });
//   arr.push(obj);

//   if (arr.length === 2) {
//     console.log(arr[0], arr[1]);
//     console.log(arr[0] === arr[1]); //  in normal object it will render component and gives memory ref will change for every render of component
//     // but by using useRef hook we can have same memory ref of obj
//     // useRef(v) ==> and it will return onject awith name as current {current: v}
//     // useRef => is used to maintain single memory references if multiple re-render of component happens.
//     // 1st render => #200 => useRef() => {current: { name: "gangadhar", age: 26 }}
//     // 2nd render => #200
//     // 3rd render => #200... so on .....
//   }

//   return (
//     <>
//       <h1>count: {count} </h1>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }

// export default App;

// function App() {
//       const [count, setCount] = useState(10);

//       const user = useRef({ name: "gangadhar", age: 26 });

//       const btnRef = useRef(null);

//       const handleage = () => {
//         user.current.age++;
//         console.log(user);
//       };

//       useEffect(() => {
//         console.log(btnRef);
//         console.log(btnRef.current.innerText);
//         btnRef.current.innerText = "changed text done";
//       }, []);
//       // using useRef we can get reference of HTML elememts after component gets mounted.
//       // by giving prop as ref={btnRef} we can get button element and its properties.
//       // when component gets mounted then btn text gets updated.

//       return (
//         <>
//           <p>
//             Name: <b>{user.current.name} </b> age: <i>{user.current.age} </i>
//           </p>
//           <h1>count: {count} </h1>
//           <button ref={btnRef}  onClick={handleage}>inc age</button>
//           <button onClick={() => setCount(count + 1)}>Click me</button>
//         </>
//       );
//     }

//     export default App;

// function MyComponent() {
//   // Create a ref
//   const inputRef = useRef(null);

//   // Focus the input field when the component mounts
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       {/* Assign the ref to the input element */}
//       <input type="text" ref={inputRef} />
//       <button onClick={() => inputRef.current.focus()}>Focus Input</button>
//     </div>
//   );
// }

// export default MyComponent;

// JWT token => JSON web token.

//          @#@#@# useContext hook

// without using props we can get data from parent to child using useContext.

// const CounterContext = createContext();

// const A = () => {
//   const { count, setCount } = useContext(CounterContext);

//   const incA = () => {
//     setCount((prev) => prev + 1);
//   }

//   return (
//     <div className="box">
//       <h3>count: {count} </h3>
//       <p>Inside A component</p>
//       <Button onClick={incA}  >Increment</Button>
//     </div>
//   );
// };

// const B = () => {
//   const { count, setCount } = useContext(CounterContext);

//   const decB = () => {
//     setCount((prev) => prev - 1);
//   }

//   return (
//     <div className="box">
//       <h3>count: {count} </h3>
//       <p>Inside B component</p>
//       <Button onClick={decB}>Decrement</Button>
//     </div>
//   );
// };

// function App() {
//   const [count, setCount] = useState(10);

//   return (
//     <div className="box">
//       <CounterContext.Provider value={{ count, setCount }}>
//         <p>app compoenent</p>
//         <h2>count: {count} </h2>
//         <A />
//         <B />
//       </CounterContext.Provider>
//     </div>
//   );
// }

// export default App;

// useMemo.

// const A = memo(({ a }) => {
//   console.log("a rendered");
//   return (
//     <div>
//       <p>A compoent</p>
//       <p>value of A is : {a} </p>
//     </div>
//   );
// });

// const MemoExample = () => {
//   console.log("re-render memo comp");
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <A a={10} />
//       <button onClick={() => setToggle(!toggle)}>memo example</button>
//     </div>
//   );
// };

// export default MemoExample;

// memo is same as useEffect.
// when props value changes then A component renders because of memo.
// here memo is function not a hook.

//  memo syntax =>  memo(({x}) => {
//                               hello                            
//                              })
      
// when props (or) anychange takes place, then only memo function will excute.

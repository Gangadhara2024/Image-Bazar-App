// PS C:\Users\ganga\Documents\React-js\react-1> git status
// fatal: not a git repository (or any of the parent directories): .git
// Initialized empty Git repository in C:/Users/ganga/Documents/React-js/react-1/.git/
// PS C:\Users\ganga\Documents\React-js\react-1> git remote add origin https://github.com/Gangadhara2024/React-notes-code.git
// PS C:\Users\ganga\Documents\React-js\react-1> git status
// On branch master

// No commits yet

// Untracked files:
//         .gitignore
//         README.md
//         package-lock.json
//         package.json
//         public/
//         src/

// nothing added to commit but untracked files present (use "git add" to track)
// PS C:\Users\ganga\Documents\React-js\react-1> git add .
// warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
// warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
// warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
// warning: in the working copy of 'public/index.html', LF will be replaced by CRLF the next time Git touches it
// warning: in the working copy of 'src/App.js', LF will be replaced by CRLF the next time Git touches it
// warning: in the working copy of 'src/index.js', LF will be replaced by CRLF the next time Git touches it
// PS C:\Users\ganga\Documents\React-js\react-1> git commit -m "checking"
// [master (root-commit) 9175c70] checking
//  10 files changed, 18599 insertions(+)
//  create mode 100644 .gitignore
//  create mode 100644 README.md
//  create mode 100644 package-lock.json
//  create mode 100644 package.json
//  create mode 100644 public/index.html
//  create mode 100644 src/App.css
//  create mode 100644 src/App.js
//  create mode 100644 src/app.scss
//  create mode 100644 src/index.css
//  create mode 100644 src/index.js
// PS C:\Users\ganga\Documents\React-js\react-1> git status
// On branch master
// nothing to commit, working tree clean
// PS C:\Users\ganga\Documents\React-js\react-1> git push -u origin master
// Enumerating objects: 14, done.
// Counting objects: 100% (14/14), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (12/12), done.
// Writing objects: 100% (14/14), 158.88 KiB | 2.37 MiB/s, done.
// Total 14 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
// To https://github.com/Gangadhara2024/React-notes-code.git
//  * [new branch]      master -> master
// branch 'master' set up to track 'origin/master'.

// PS C:\Users\ganga\Documents\React-js\notes-r> git pull origin master
// >>
// From https://github.com/Gangadhara2024/Image-Bazar-App
//  * branch            master     -> FETCH_HEAD
// fatal: refusing to merge unrelated histories
// PS C:\Users\ganga\Documents\React-js\notes-r> git push -f origin master
// >>
// Enumerating objects: 30, done.
// Counting objects: 100% (30/30), done.
// Delta compression using up to 4 threads
// Compressing objects: 100% (29/29), done.
// Writing objects: 100% (30/30), 191.14 KiB | 4.78 MiB/s, done.
// Total 30 (delta 3), reused 0 (delta 0), pack-reused 0 (from 0)
// remote: Resolving deltas: 100% (3/3), done.
// To https://github.com/Gangadhara2024/Image-Bazar-App.git
//  + 6051ede...bbcebd8 master -> master (forced update)

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

// static routing

// const App = () => {
//   return (
//     <div>
//       <h1>entry component</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path="home" element={<Home />}></Route>
//           <Route path="about" element={<About />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

// const Home = () => {
//     return (
//       <div>
//         <h1>Home page !</h1>
//         <Link to="/xyz">home page</Link>
//       </div>
//     );
//   };

//   export default Home;

//   const About = () => {
//     return (
//       <div>
//         <h1>about page</h1>
//         <Link to="/abc">about page</Link>
//       </div>
//     );
//   };

//   export default About;

//             @#@#  Dynamic routing

// const RoutingApp = () => {
//       const Layout = () => {
//         return (
//           <div>
//             <h1>this is user route</h1>
//             <Outlet />
//             {/* outlet defined nested components    */}
//           </div>
//         );
//       };
//       return (
//         <BrowserRouter>
//           <Routes>
//             <Route path="user" element={<Layout />}>
//               <Route path="home" element={<h2>home rout for user</h2>} />
//               <Route path="about" element={<h2>about rout for user</h2>} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       );
//     };

//     export default RoutingApp;

//          NESTED ROUTING

// const Layout = () => {
//       const location = useLocation();
//       console.log(location);

//       return (
//         <div>
//           <nav>
//             <div>
//               <Link
//                 to="/user/home"
//                 style={{
//                   color: location.pathname === "/user/home" ? "red" : "",
//                 }}
//               >
//                 Home
//               </Link>
//             </div>
//             <div>
//               <Link
//                 to="/user/about"
//                 style={{
//                   color: location.pathname === "/user/about" ? "red" : "",
//                 }}
//               >
//                 About
//               </Link>
//             </div>
//           </nav>
//           <Outlet />
//           {/* outlet defined nested components    */}
//         </div>
//       );
//     };

//     const RoutingApp = () => {
//       return (
//         <BrowserRouter>
//           <Routes>
//             <Route path="user" element={<Layout />}>
//               <Route path="home" element={<Home />} />
//               <Route path="about" element={<About />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       );
//     };

//     export default RoutingApp;

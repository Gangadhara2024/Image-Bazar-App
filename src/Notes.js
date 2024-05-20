
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
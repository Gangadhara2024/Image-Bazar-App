import { memo, useState } from "react";

const A = memo(({ a }) => {
  console.log("a rendered");
  return (
    <div>
      <p>A compoent</p>
      <p>value of A is : {a} </p>
    </div>
  );
});

const MemoExample = () => {
  console.log("re-render memo comp");
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <A a={10} />
      <button onClick={() => setToggle(!toggle)}>memo example</button>
    </div>
  );
};

export default MemoExample;

// memo is same as useEffect.
// when props value changes then A component renders because of memo.
// here memo is function not a hook.

/* memo syntax =>  memo(({x}) => {
      
                   })
*/
// when props (or) anychange takes place, then only memo function will excute.  
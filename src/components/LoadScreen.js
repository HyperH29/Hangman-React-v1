// import { useState, useEffect } from "react";
// import PropagateLoader from "react-spinners/PropagateLoader";
// import { Button } from "react-bootstrap";
// import Hangman from "./Hangman";
//
// const LoadScreen = () => {
//   const [load, setLoad] = useState(false);
//   let timerId;
//
//   // // Turn load on and off
//   // useEffect(() => {
//   //   // Load on
//   //   setLoad(true);
//   //   setTimeout(() => {
//   //     // Load off
//   //     setLoad(false);
//   //   }, 1000);
//   // }, []);
//
//   // When button is pressed activate load
//   const handelLoad = () => {
//     setLoad(true);
//     //   once load is true load the next page
//   };
//
//   //  This works
//   useEffect(() => {
//     if (load) {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       timerId = setTimeout(() => {
//         setLoad(false);
//       }, 3000);
//     }
//     return () => clearTimeout(timerId);
//   }, [load]);
//
//   return (
//     <div>
//       {/*Add a conditional if load display nothing*/}
//       {!load && (
//         <div>
//           <h1>Hangman</h1>
//           <Button size="xl" variant="success" onClick={handelLoad}>
//             Start
//           </Button>
//         </div>
//       )}
//       {load && (
//         <PropagateLoader
//           color={"#070707"}
//           loading={load}
//           size={20}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//
//         // <Hangman />
//       )}
//     </div>
//   );
// };
//
// export default LoadScreen;
//
// Future integration

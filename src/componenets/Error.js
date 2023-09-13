import { useRouteError } from "react-router-dom";

const Error = () => {
  const arr = useRouteError();
  console.log(arr);
  return (
    <div>
      <h1>Oops!!</h1>
      <h3>Something went wrong!</h3>
      <h3>
        {arr.status} : {arr.statusText}
      </h3>
    </div>
  );
};

export default Error;

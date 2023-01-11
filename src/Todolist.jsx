import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

  const Todolist = () => {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);

  const Result = () => {
    if (!input) {
      toast("Please this field Required", {
        position: "top-center",
      });
    } else {
      setitem([...item, input]);
      setinput("");
    }
  };

  const Clear = () => {
    setitem([]);
  };

  const Delete = (id) => {
    const upitems = item.filter((elems, ind) => {
      return id != ind;
    });
    setitem(upitems);
  };
  return (
    <>
      <div className="container p-5 border">
        <center className="p-5">
          <h1>TODO LIST  {input}</h1>
          <input
            className="form-control"
            type="text"
            placeholder="Add a list"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <br />
          <ToastContainer />
          <button onClick={Result} className="btn btn-primary">
            Add A list
          </button>
          <br />
          <ul>
            {item.map((elem, ind) => {
              return (
                <>
                  <br />
                  <div key={ind}>
                    <i
                      className="fa fa-trash text-success"
                      title="Delete"
                      onClick={() => Delete(ind)}
                    />
                    <li style={{ backgroundColor: "red" }} className="p-3">
                      {elem}
                    </li>
                  </div>
                </>
              );
            })}
          </ul>

          <br />
          <button onClick={Clear} className="btn btn-danger">
            Clear all
          </button>
        </center>
      </div>
    </>
  );
};
export default Todolist;
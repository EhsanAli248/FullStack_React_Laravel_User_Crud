import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FetchUserList, Removeuser } from "../Redux/Action";

const Userlisting = () => {
  const dispatch = useDispatch();
  const { loading, errmessage, userlist } = useSelector((state) => state.user);
  console.clear();
  console.log("all user data", userlist.all_users);

  useEffect(() => {
    dispatch(FetchUserList());
  }, [dispatch]);

  const handleDelete = (code) => {
    
       dispatch(Removeuser(code));
      dispatch(FetchUserList()); // Fetch updated user list after successful deletion
      toast.success("User removed successfully");
};

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={"/user/add"} className="btn btn-success">
            Add User +
          </Link>
        </div>
        <div className="card-body">
          {loading ? (
            <h2>Loading...</h2>
          ) : errmessage ? (
            <h2>{errmessage}</h2>
          ) : (
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <td>Code</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Role</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(userlist.all_users) &&
                  userlist.all_users.map((item,idx) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.role}</td>
                      <td>
                        <Link
                          to={`/user/edit/${item.id}`} className="btn btn-primary"> Edit  </Link>
                        <button onClick={() => {handleDelete(item.id);}}className="btn btn-danger">Delete</button>

                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Userlisting;

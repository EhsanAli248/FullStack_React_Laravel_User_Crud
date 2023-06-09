import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { FunctionUpdateUser,FetchUserObj } from '../Redux/Action';
import { Link } from 'react-router-dom';

const Updateuser = () => {
  const [id,setIdChange]=useState('0')
  const [name,setNameChange]=useState('');
  const [email,setEmailChange]=useState('');
  const [phone,setPhoneChange]=useState('');
  const [role,setRoleChange]=useState('staff');
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {code}=useParams()
  console.log("params",code)
  const userobj=useSelector((state)=>state.user.userobj)
  console.log("user object data",userobj.user)
  const handlesubmit=(e)=>{
    e.preventDefault();
    // const userobj={id,name,email,phone,role}
    const updateData={
name:name,
email:email,
phone:phone,
role:role

    }
    console.log("update",userobj.user)
    dispatch(FunctionUpdateUser(updateData,id));
    // navigate(`/user${id}`); 
    navigate('/user'); 

  }
  useEffect(()=>{
    dispatch(FetchUserObj(code));
    
  },[])
  useEffect(()=>{
    if(userobj.user){
      setIdChange(userobj.user.id);
      setNameChange(userobj.user.name);
      setEmailChange(userobj.user.email);
      setPhoneChange(userobj.user.phone);
      setRoleChange(userobj.user.role);
    }
  },[userobj.user]);
  return (
    <div>
      <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name || ''} onChange={e => setNameChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email || ''} onChange={e => setEmailChange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone || ''} onChange={e => setPhoneChange
                                      
                                      (e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={role || ''} onChange={e => setRoleChange(e.target.value)} className="form-control">
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
    </div>
  )
}

export default Updateuser

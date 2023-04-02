import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BiCog } from 'react-icons/bi'
import { AuthAccount, AuthAccountDispatchContext } from "../context/AuthContext";

export default function () {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const authAccountDispatch = useContext(AuthAccountDispatchContext) as React.Dispatch<Partial<AuthAccount>>
  
  const handleLogout = () => {
    // add authenticated false
    authAccountDispatch({authenticated: false, email: "", password: ""})
    navigate("/login")
    setToggle(false)
  }

  return (
    <nav>
      <div className="flex justify-between pt-2">
        <div>
          <NavLink to="/">
            <span className="cursor-pointer font-thin text-5xl ml-5 mt-5 border-l border-b p-2">
              Fake Z
            </span>
          </NavLink>
        </div>
        <div className="py-5 px-5 space-y-6">
          <div className="flex items-center space-x-4 gap-5">
            <div className="flex gap-2 cursor-pointer items-center gap-x-9 relative">
              <NavLink className="hover:text-gray-300" to="/cart">Cart</NavLink>
              <BiCog className="hover:text-gray-300" size={25} onClick={() => setToggle(!toggle)} />
              {
                toggle
                  ? <ul className="border absolute right-0 top-9 bg-indigo-400 hover:bg-indigo-500 text-white px-2 py-1 rounded">
                    <li onClick={handleLogout}>Log out</li>
                  </ul>
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

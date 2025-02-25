import React, { useState } from "react";
import axio from "axios";
import { Link } from "react-router-dom";
import Footer from "./Bottom";

const Registration = () => {
  const [regestration, setRegestration] = useState({
    fname: "",
    lname: "",
    email: "",
    phono_no: "",
    adhar_no: "",
    username: "",
    usertype: "",
    password: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegestration({ ...regestration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      regestration.fname &&
      regestration.lname &&
      regestration.email &&
      regestration.phono_no &&
      regestration.adhar_no &&
      regestration.username &&
      regestration.usertype &&
      regestration.password
    ) {
      const newPerson = {
        ...regestration,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, newPerson]);

      axio
        .post("http://localhost:8080/api/registration/signup", {
          aadhaar_no: regestration.adhar_no,
          email: regestration.email,
          fname: regestration.fname,
          lname: regestration.lname,
          password: regestration.password,
          phone_no: regestration.phono_no,
          username: regestration.username,
          usertype: regestration.usertype,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
      // handleRegister(regestration)
      setRegestration({
        fname: "",
        lname: "",
        email: "",
        phono_no: "",
        adhar_no: "",
        username: "",
        usertype: "",
        password: "",
      });
    }
  };

  return (
    <>
      {/* <section className="vh-100" > */}
      <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registration
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="fname"
                              name="fname"
                              className="form-control"
                              placeholder="First Name"
                              value={regestration.fname}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="lname"
                              name="lname"
                              className="form-control"
                              placeholder="Last Name"
                              value={regestration.lname}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="email"
                              value={regestration.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-phono_no fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="phono_no"
                              name="phono_no"
                              className="form-control"
                              placeholder="phono_no No"
                              value={regestration.phono_no}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-address-card fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="adhar_no"
                              name="adhar_no"
                              className="form-control"
                              placeholder="adhar No"
                              value={regestration.adhar_no}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="username"
                              name="username"
                              className="form-control"
                              placeholder="User Name"
                              value={regestration.username}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="number"
                              id="usertype"
                              name="usertype"
                              className="form-control"
                              placeholder="User Type [Buy/Sell]"
                              value={regestration.usertype}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-unlock-alt fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                              placeholder="Password"
                              value={regestration.password}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            <Link to="/login" className="nav-links">
                              Registration
                            </Link>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9aab9a1f-d227-4471-9f12-fa4a5b348f90/d3aq9rs-1f2f48c9-d089-40a2-b245-b60054cb9bb8.jpg/v1/fill/w_900,h_1313,q_75,strp/pet_stack_by_robthedoodler_d3aq9rs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMxMyIsInBhdGgiOiJcL2ZcLzlhYWI5YTFmLWQyMjctNDQ3MS05ZjEyLWZhNGE1YjM0OGY5MFwvZDNhcTlycy0xZjJmNDhjOS1kMDg5LTQwYTItYjI0NS1iNjAwNTRjYjliYjguanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.gmX2L-eLvNTJqupcJylhVOmZxCvyYqOghjHOS3SKWOY"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
      <Footer />
    </>
  );
};

export default Registration;

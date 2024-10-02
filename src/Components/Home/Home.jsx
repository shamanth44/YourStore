import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom"
import FeaturedProducts from "../Products/FeaturedProducts";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="banner">
          <div className="bannerDetails col-2">
            <h1>
              Welcome to <span className="logotext">YourStore</span>
            </h1>
            <p>Hurry! It's end of season sale</p>

            <NavLink to="/products">

            <button className="exploreNow">Explore now</button>

            </NavLink>
          </div>
          <div className="col-2">
            <img className="bannerImg" src="https://res.cloudinary.com/shamanth-ganiger/image/upload/v1725477294/enxcqbhwrut0nwgoprfj.png" alt="banner" />
          </div>
        </div>



        <FeaturedProducts/>

        {/* <div className="categories">
          <h1>Shop By Categories </h1>
          <hr />
          <div className="shopByCategories">
          <div><img src="/Assets/model2.jpeg" alt="" /><h3>Men</h3></div>
          <div><img src="/Assets/model5.jpeg" alt="" /><h3>Women</h3></div>
          <div><img src="/Assets/model6.jpeg" alt="" /><h3>Kids</h3></div>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Home;

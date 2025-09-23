import React from "react";
import "./Styles/Blogs.css";
import pastpaperai from "../assets/pastpaperai.mp4"
import labproject from "../assets/labproject.mp4";
const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>
          My <span className="highlight">Latest Blogs</span>
        </h1>
        <p>Sharing insights and knowledge from my development journey</p>
      </div>

      {/* First Card - Full Width */}
      <div className="featured-blog">
        <div className="blog-card featured">
          <div className="blog-image">
            <div className="blog-placeholder">
              <span>
                <img
                  style={{ objectFit: "inherit" }}
                  src="https://strapi.dhiwise.com/uploads/web_app_architecture_enhancing_react_applications_0_f073e386b7.jpg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-date">Jan 15, 2025</span>
              <span className="blog-category">Development</span>
            </div>
            <h3>
              Building Scalable React Applications with Modern Architecture
            </h3>
            <p>
              Exploring the best practices and patterns for creating
              maintainable React applications that can scale with your business
              needs. Learn about component architecture, state management, and
              performance optimization techniques.
            </p>
            <div className="blog-footer">
              <div className="blog-tags">
                <span className="tag">React</span>
                <span className="tag">Architecture</span>
                <span className="tag">Performance</span>
              </div>
              {/* <button className="read-more-btn">Read More</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Two Cards Horizontally */}
      <div className="blog-grid">
        <div className="blog-card">
          <div className="blog-image">
            <div className="blog-placeholder">
              <span>
                <video src={labproject} autoPlay loop muted playsInline />
              </span>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-date">Jan 10, 2025</span>
              <span className="blog-category">tutorial</span>
            </div>
            <h3>Advanced CSS Animations with Tailwind</h3>
            <p>
              Deep dive into creating smooth, performant animations using
              Tailwind CSS and custom CSS properties.
            </p>
            <div className="blog-footer">
              <div className="blog-tags">
                <span className="tag">CSS</span>
                <span className="tag">Animation</span>
              </div>
              {/* <button className="read-more-btn">Read More</button> */}
            </div>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-image">
            <div className="blog-placeholder">
              <span>
                <img
                  style={{ objectFit: "cover" }}
                  src="https://www.searchenginejournal.com/wp-content/uploads/2022/05/javascript-seo-6286cc9ae2da3-sej.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-date">Jan 05, 2025</span>
              <span className="blog-category">Guide</span>
            </div>
            <h3>JavaScript Performance Optimization</h3>
            <p>
              Essential techniques for optimizing JavaScript performance in
              modern web applications and frameworks.
            </p>
            <div className="blog-footer">
              <div className="blog-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">Performance</span>
              </div>
              {/* <button className="read-more-btn">Read More</button> */}
            </div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <div className="blog-placeholder">
              <span>
                <video src={pastpaperai} autoPlay loop muted playsInline />
              </span>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-date">Mar 10, 2025</span>
              <span className="blog-category">tutorial</span>
            </div>
            <h3>Advanced React and Tailwind CSS</h3>
            <p>
              I completed a training program in React.js, where I learned how to
              build dynamic, component-based user interfaces. This experience
              improved my frontend development skills and gave me confidence to
              create modern, responsive web applications.
            </p>
            <div className="blog-footer">
              <div className="blog-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Tailwind Css</span>
              </div>
              {/* <button className="read-more-btn">Read More</button> */}
            </div>
          </div>
        </div>
        <div className="blog-card">
          <div className="blog-image">
            <div className="blog-placeholder">
              <span>
                <img style={{objectFit:'fill'}} src="https://d1dykungmee0hk.cloudfront.net/wp-content/uploads/2021/05/Fundamentals-of-HTML-CSS-and-JavaScript_Feature-11.png" alt="" />
              </span>
            </div>
          </div>
          <div className="blog-content">
            <div className="blog-meta">
              <span className="blog-date">Jan 10, 2024</span>
              <span className="blog-category">development</span>
            </div>
            <h3>Advanced HTML, CSS and Javascript</h3>
            <p>
              I completed an internship where I learned the fundamentals of
              HTML, CSS, and JavaScript, building my foundation in web
              development. This experience boosted my confidence and sparked my
              passion for creating interactive, user-friendly websites.
            </p>
            <div className="blog-footer">
              <div className="blog-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
              </div>
              {/* <button className="read-more-btn">Read More</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

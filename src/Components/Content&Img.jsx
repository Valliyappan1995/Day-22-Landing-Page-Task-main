const ContentImg = () => {
  return (
    <section className="section-container">
      <div className="content-img">
        <div className="row">
        <div className="img-container-1">
          <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"alt="phone"/> 

        </div>
        <div className="content">
        <h2 className="content-heading">Fully Responsive Design</h2>
        <p className="text">
          When you use a theme created by Start Bootstrap,
          <br />
          you know that the theme will look great on any
          <br />
          device, whether its a phone, tablet, or desktop the
          <br />
          page will behave responsively!
        </p>
        </div>
        </div>
        <div className="row">
        <div className="img-container-2">
          <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"alt="code"/>
        </div>
        <div className="content">
        <h2 className="content-heading">Updated For Bootstrap 5</h2>
        <p className="text">
        Newly improved, and full of great utility classes,
          <br />
          Bootstrap 5 is leading the way in mobile responsive
          <br />
          web development! All of the themes on Start
          <br />
          Bootstrap are now using Bootstrap 5!
        </p>
        </div>
        </div>
        <div className="row">
        <div className="img-container-3">
          <img src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"alt="type"/>
        </div>
        <div className="content">
        <h2 className="content-heading">Easy to Use & Customize</h2>
        <p className="text">
        Landing Page is just HTML and CSS with a splash of
          <br />
          SCSS for users who demand some deeper
          <br />
          customization options. Out of the box, just add your
          <br />
          content and images, and your new landing page will<br/>
          be ready to go!
        </p>
        </div>
        </div>
      </div>
    </section>
  );
};
export default ContentImg;

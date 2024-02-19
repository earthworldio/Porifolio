import './App.css';

function App() {
  return (
    <>
      <header id="header">
        <div id="head" className="parallax" parallax-speed={2}>
          <h1 id="logo" className="text-center">
            <img alt="/8" className="img-circle" src="assets/images/guy.jpg" />
            <div style={{ marginTop: '20px' }}>
              <span className="title">Virapat Poangmalai</span>
            </div>
          </h1>
        </div>
      </header>
      <main id="main">
        <div className="container">
          <div className="row section topspace">
            <div className="col-md-12">
              <h1 className="lead text-center text-muted">
                Hello my name is Virapat Poangmalai  I'm a Web developer
                <br></br>
                <br></br>
                " SHOW THEM WHO WANT IT MORES "
              </h1>
            </div>
          </div>
          {" "}
          {/* / section */}
          <div className="row section featured topspace">
            <h2 className="section-title">
              <span>EDUCATED</span>
            </h2>
            <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="col-sm-6 col-md-3" style={{ marginTop: '12.5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 className="text-center" style={{ fontSize: '21.5px' }}>Elementary School</h3>
                <img alt='/4' style={{ borderRadius: '50%', width: '150px', height: '150px', border: '1px solid' }} id="kdgarten"></img>
                <a href="/#" className="btn btn-action" style={{ marginTop: '35px', borderRadius: '4px' }}>THAI PROGRAM</a>
              </div>
              <div className="col-sm-6 col-md-3" style={{ marginTop: '12.5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 className="text-center" style={{ fontSize: '21.5px' }}>High School</h3>
                <img alt='/3' style={{ borderRadius: '50%', width: '150px', height: '150px', border: '1px solid' }} id="bkw"></img>
                <a href="/#" className="btn btn-action" style={{ marginTop: '35px', borderRadius: '4px' }}>SCIENCE - MATH</a>
              </div>
              <div className="col-sm-6 col-md-3" style={{ marginTop: '12.5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 className="text-center" style={{ fontSize: '21.5px' }}>Bachelor Degrees</h3>
                <img alt='/2' style={{ borderRadius: '50%', width: '150px', height: '150px', border: '1px solid' }} id="buu"></img>
                <a href="/#" className="btn btn-action" style={{ marginTop: '35px', borderRadius: '4px' }}>Computer Science</a>
              </div>
            </div>
          </div>{" "}
          {/* / section */}
          <div className="row section recentworks topspace" style={{ marginTop: '50px' }}>
            <h2 className="section-title">
              <span>PROJECT</span>
            </h2>
            <div className="thumbnails recentworks row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://drive.google.com/file/d/1q7rLn1UvzYoZHy3iAqwPBkqFXPf9ynZv/view?usp=drive_link" target='_blank' rel="noreferrer">
                  <div className="img-1"> </div>
                  <a href="https://drive.google.com/file/d/1q7rLn1UvzYoZHy3iAqwPBkqFXPf9ynZv/view?usp=drive_link" target='_blank' style={{ color: 'black' }} rel="noreferrer">
                    LINEBOT - GENERATE INVOICE
                  </a>
                </a>
                <p />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://drive.google.com/file/d/1qQr9os-D_gqLHzKp1OAX-Hm9R3H1sVBD/view?usp=drive_link" target='_blank' rel="noreferrer">
                  <div className="img-2"> </div>
                  <a href="https://drive.google.com/file/d/1qQr9os-D_gqLHzKp1OAX-Hm9R3H1sVBD/view?usp=drive_link" target='_blank' style={{ color: 'black' }} rel="noreferrer">
                    WORKSHOP POS
                  </a>
                </a>
                <p />
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <a className="thumbnail" href="https://www.youtube.com/watch?v=JKA8Twl-kJM" target='_blank' rel="noreferrer">
                  <div className="img-3"> </div>
                  <a href="https://www.youtube.com/watch?v=JKA8Twl-kJM" target='_blank' style={{ color: 'black' }} rel="noreferrer">
                    DISCORDBOT - GENERATE SERIAL
                  </a>
                </a>
                <p />
              </div>
            </div>
          </div>{" "}
          {/* /section */}
          <div className="row section topspace">

          </div>{" "}
          {/* /section */}
          <div className="row section clients topspace">
            <h2 className="section-title">
              <span>TOOLS</span>
            </h2>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-4">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  JavaScript / HTML / CSS
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-5">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  PG ADMIN 4
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-6">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  Vercel
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-7">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  ADOBE PHOTOSHOP
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-8">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  GITHUB
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-9">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  BOOTSTRAP 5
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-10">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  POSTMAN
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-11">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  REACT JS
                </span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <a className="thumbnail" href='/'>
                <span className="img-12">
                  <img src="./images/JS.png" alt="" />
                </span>
                <span className="title">
                  NODE JS
                </span>
              </a>
            </div>
          </div>{" "}
          {/* /section */}
        </div>{" "}
        {/* /container */}
      </main>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 widget">
              <h3 className="widget-title">Contact</h3>
              <div className="widget-body">
                <p>
                  +66 952802754
                  <br />
                  <a href="/#">emailworldiox@gmail.com</a>
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3 widget">
              <h3 className="widget-title">Follow me</h3>
              <div className="widget-body">
                <p className="follow-me-icons">
                  <a href="/#">
                    <i className="fa fa-github fa-2" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-facebook fa-2" />
                  </a>
                </p>
              </div>
            </div>


          </div>{" "}
          {/* /row of widgets */}
        </div>
      </footer>


    </>

  );
}

export default App;

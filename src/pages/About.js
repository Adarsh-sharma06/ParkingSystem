const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SmartPark Innovations</h1>
        <hr />
        <fieldset className="full-page-fieldset">
          <legend>Presentation</legend>
          <iframe
            title="Smart Park Innovations PDF"
            src={require('.././components/assets/SMART-PARK INNOVATIONS.pdf')}
            className="full-page-iframe"
            style={{ height: '100vh', width: '100vw', border: 'none' }}
          >
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
        </fieldset>
      </header>
    </div>
  );
};

export default About;

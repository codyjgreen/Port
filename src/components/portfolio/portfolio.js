import React, { Component } from 'react';



export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div key={Math.random()} className="columns portfolio-item">
                      <div className="item-wrap">
                        <img alt="" src={`${resumeData.imagebaseurl}${item.imgurl}`} className="item-img" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            <a href={item.githubUrl} target="_blank" >github</a>
                            {/* console.log({item.githubUrl})
                            console.log({item.deployedUrl}) */}

                            <a href={item.deployedUrl} target="_blank" >deployed</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

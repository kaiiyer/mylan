import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
        <div className="container" style={{backgroundColor: '#fff', marginTop: '1em'}}>
          <h3>My Med</h3>
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">cloud</i>
                <div className="card-title">Simplest Storage Solution</div>
                <div className="white-text-custom">
                  Store your certificates and government/classified documents on Blockchain.
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">sd_storage</i>
                <div className="card-title">Cloud Bucket</div>
                <div className="white-text-custom">
                  No need to buy cloud buckets. Pay only for the amount of storage you use.
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">business_center</i>
                <div className="card-title">Looking for a storage bucket?</div>
                <div className="white-text-custom">
                  Small business' website? Store media files/bundles on ethereum and access them anywhere.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">compare_arrows</i>
                <div className="card-title">End to End Encryption</div>
                <div className="white-text-custom">
                  Store important notes/passwords privately. Pretty handy for small files(texts, images, GIFs). 
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">security</i>
                <div className="card-title">Security at every step</div>
                <div className="white-text-custom">
                  Files stored on decentralized blockchain network. Attacks impossible!
                </div>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="material-icons large">cloud_done</i>
                <div className="card-title">Save Paperwork</div>
                <div className="white-text-custom">
                  No need to carry physical documents to an interview. Store them throughout the world, in a decentralized network.
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}
 
export default Homepage;
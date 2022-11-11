import {Component} from 'react';

class BootstrapCard extends Component{
    render(){
        const imgUrl = "dog.jpg";
        return(

            <div className="container mt-3">
                <h2>Card Image</h2>
                <p>Image at the top (card-img-top):</p>

                <div className="card" style={{width:"400px"}}>
                    <img className="card-img-top" src={imgUrl} alt="Card image" style={{width : '100%'}}/>

                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapCard;


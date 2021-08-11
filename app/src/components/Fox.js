import React, { useEffect } from 'react';
import { getFox } from './../actions';
import { connect } from 'react-redux';


const Fox = (props) => {
   const { fox } = props;
    // console.log(fox);

   useEffect(() => {
    props.getFox();
   }, []);

   const handleClick = () => {
    props.getFox();
   }

    return(
        <div className="mainDiv">
            <h2>Say Hello to This Fox</h2>
                <div className="imgDiv">
                    <img src={fox.picture} alt=""/>
                </div>
            <button className="new" onClick={() => handleClick()}>Get a New Fox</button>
        </div>
        
    )
}

const mapStateToProps = state => {
    return{
        fox: state.fox
    }
}

export default connect(mapStateToProps, {getFox})(Fox);
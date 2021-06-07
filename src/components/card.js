import React from "react";

// class Card extends React.Component {
//     render() {
//         return (<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img alt="photo" src="https://robohash.org/test?200x200"/>
//             <div>
//                 <h2>{this.props.name}</h2>
//                 <p>jane.doe.@gmail.com</p>
//             </div>
//         </div>);
//     }
// }

const Card = ({id, name, email}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="photo" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

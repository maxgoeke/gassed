import './App.css';

function Form(props) {
  const name = props.name;

  const nfts = {
    "27040 - Mutant Ape Yacht Club | OpenSea": "BBB",
    "MOAR #4368 - \"MOAR\" by Joan Cornella | OpenSea": "AA-",
    "---": "Not Generated"
  };

  const work_rating = nfts[name];

  return (
    <div className="main">
        <ul className="NFTForm">
         <li className="GassedRating">
           <div className="GassedRatingField">
             <span className="GassedRatingFieldTitle">Title</span>
           </div>
           <div className="GassedRatingFieldValue">
             {name}
           </div>
         </li>
         <li className="GassedRating">
           <div className="GassedRatingField">
             <span className="GassedRatingFieldTitle">NFT Rating</span>
             <span className={`GassedRatingFieldStatus ${name in nfts ? 'Ok' : 'Error'}`}>
              {work_rating}
             </span>
           </div>
         </li>
         <li className="GassedRating">
           <div className="GassedRatingField">
             <span className="GassedRatingFieldTitle">Owner Rating</span>
             <span className="GassedRatingFieldStatus Error">
              Not Generated
             </span>
           </div>
         </li>
        </ul>
    </div>
  );
}

Form.defaultProps = {
  name: "---",
}

export default Form
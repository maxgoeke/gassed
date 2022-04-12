import './App.css';

function Form(props) {
  const name = props.name;

  const nft_works = {
    "27040 - Mutant Ape Yacht Club | OpenSea": "BBB",
    "MOAR #4368 - \"MOAR\" by Joan Cornella | OpenSea": "AA-",
    "---": "Not Generated"
  };

  const nft_owners = {
    "27040 - Mutant Ape Yacht Club | OpenSea": "650",
    "MOAR #4368 - \"MOAR\" by Joan Cornella | OpenSea": "720",
    "---": "Not Generated"
  };

  let work_rating, user_rating;
  if(name in nft_works) {
    work_rating = nft_works[name];
    user_rating = nft_owners[name];
  } else {
    work_rating = "Not Generated";
    user_rating = "Not Generated";
  }

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
             <span className={`GassedRatingFieldStatus ${name in nft_works ? 'Ok' : 'Error'}`}>
              {work_rating}
             </span>
           </div>
         </li>
         <li className="GassedRating">
           <div className="GassedRatingField">
             <span className="GassedRatingFieldTitle">Owner Rating</span>
             <span className={`GassedRatingFieldStatus ${name in nft_owners ? 'Ok' : 'Error'}`}>
              {user_rating}
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
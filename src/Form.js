import './App.css';

function Form(props) {
  const name = props.name;

  const nft_works = {
    "27040 - Mutant Ape Yacht Club | OpenSea": "BBB",
    "MOAR #4368 - \"MOAR\" by Joan Cornella | OpenSea": "AA-",
    "Invisible Friends #445 - Invisible Friends | OpenSea": "CC+",
    "Chill Bear Club Genesis #2028 - Chill Bear Club Genesis | OpenSea": "AA",
    "Bonsai #4251 - Bonsai by ZENFT | OpenSea": "BB-",
    "Lil Pudgy #14425 - Lil Pudgys | OpenSea": "B+",
    "Cube #4297 - JustCubesNFT | OpenSea": "BBB-",
    "#3010 - Dope Cats | OpenSea": "A-",
    "Cool Cat #9865 - Cool Cats NFT | OpenSea": "A+",
    "Arcade Land Standard #8622 - Arcade Land | OpenSea": "BBB+",
    "---": "Not Generated"
  };

  const nft_owners = {
    "27040 - Mutant Ape Yacht Club | OpenSea": "650",
    "MOAR #4368 - \"MOAR\" by Joan Cornella | OpenSea": "720",
    "Invisible Friends #445 - Invisible Friends | OpenSea": "550",
    "Chill Bear Club Genesis #2028 - Chill Bear Club Genesis | OpenSea": "680",
    "Bonsai #4251 - Bonsai by ZENFT | OpenSea": "620",
    "Lil Pudgy #14425 - Lil Pudgys | OpenSea": "700",
    "Cube #4297 - JustCubesNFT | OpenSea": "590",
    "#3010 - Dope Cats | OpenSea": "600",
    "Cool Cat #9865 - Cool Cats NFT | OpenSea": "750",
    "Arcade Land Standard #8622 - Arcade Land | OpenSea": "690",
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
        <button className="button-33" role="button">Generate</button>
    </div>
  );
}

Form.defaultProps = {
  name: "---",
}

export default Form
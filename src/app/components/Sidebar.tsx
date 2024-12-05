import { useState } from 'react';
import { useNavigate } from "react-router";
import { collections } from '../test_data/seedItems';

function Sidebar() {
  let navigate = useNavigate();

  const collectionList = collections.map((collection) => 
    <p key={ collection } onClick={() => navigate(`/collections/${collection}`)}>{collection}</p>);

  return (
    <div className="min-w-24 h-full bg-violet-950/75 text-violet-400 pt-10 flex flex-col items-center space-y-10">
      <p className="text-2xl" onClick={() => navigate("/collections/All")}>All</p>
      {collectionList}
      <i className="text-lg fi fi-rr-add-document"></i>
      {/* <i className="text-4xl fi fi-sr-journal-alt" onClick={() => navigate("/")}></i> */}
    </div>
  )
}

export default Sidebar;
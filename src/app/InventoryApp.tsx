import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Sidebar from './components/Sidebar';
import Collection from './views/Collection';
import AddForm from './views/AddForm';

function InventoryApp() {
  
  return (
    <div className="w-screen h-screen flex bg-violet-500/75 text-violet-200">
      <BrowserRouter>
        <Sidebar/>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl p-8 flex justify-center">
            {/* TODO: create search bar and edit button */}
            <Routes>
              <Route path="collections/:collectionName" element={<Collection/>} />
              {/* <Route path="add" element={<AddForm/>} /> */}
              {/* <Route path="item" element={<Item/>} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default InventoryApp;
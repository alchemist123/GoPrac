import React from 'react';
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResult from './Components/SearchResult';
import CreateId from './Components/CreateId'
function App() {
  return (
   <div>
     <Header/>
     <CreateId/>
     <SearchResult/>
   </div>
  );
}

export default App;

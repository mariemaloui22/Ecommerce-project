
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Men from './Men';
import Women from './Women';
import Electronics from'./Electronics';

function App() {
  return (
   <div>
     <div className="flex gap-2 bg-slate-200 font-semibold">
        <a className="p-2" href="/men" >Men</a>
        <a className="p-2" href="/Women" >Women</a>
        <a className="p-2" href="/electronics" >Electronics</a>
</div>
      <BrowserRouter>
        <Routes>
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/electronics" element={<Electronics/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

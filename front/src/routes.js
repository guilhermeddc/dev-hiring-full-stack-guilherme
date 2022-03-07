import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Products,
} from 'pages';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

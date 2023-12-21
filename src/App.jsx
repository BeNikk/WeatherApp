import { useState } from 'react';
import './App.css'
import Weather from './components/Weather';
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <div className='flex flex-col items-center justify-center'>
      <p className='text-3xl font-bold'>Weather app</p>
      <Weather/>
    </div>

    </RecoilRoot>
    
  )
}
export const weatherAtom=atom({
  key:"weather",
  default:null
});
export const cityAtom=atom({
  key:"city",
  default:""
});
export default App;

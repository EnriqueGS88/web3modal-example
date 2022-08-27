// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {
  VStack,
  Button,
  Text,
  HStack,
  Select,
  Input,
  Box,
  Tooltip
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icon'
import { networkParams } from './networks';
import { toHex, truncateAddress } from './utils';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
// import { providerOptions } from './providerOptions';



function App() {
  return (
    <div>Title</div>
  );
}

export default App;

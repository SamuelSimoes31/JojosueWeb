import { AddressInfo } from 'net';
import { serverHTTP } from './http';
import './websocket';

serverHTTP.listen(3001, () => {
  const {address, port} = serverHTTP.address() as AddressInfo;
  console.log(`Server is running on ${address === '::' ? 'localhost' : address}:${port}`);
});
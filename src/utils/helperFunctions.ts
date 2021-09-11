export const randColorArray = () : [number,number,number] => {
  const R = Math.floor(Math.random()*256);
  const G = Math.floor(Math.random()*256);
  const B = Math.floor(Math.random()*256);
  return [R,G,B];
}
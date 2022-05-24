let squarer;
function loadWebAssembly(fileName) {
  return fetch(fileName)
    // buffer is temporary storage place for data while it's being moved around - useful
    // when data is being received & processed at diff rates
    .then(response => response.arrayBuffer())
    // compile array buffer into a module
    .then(buffer => WebAssembly.compile(buffer))
    // create instance of WASM module
    .then(module => {return new WebAssembly.Instance(module) });
};
  
loadWebAssembly('squarer.wasm')
  .then(instance => {
    // the below lets us use the squarer function as a regular JavaScript function
    squarer = instance.exports._Z7squareri;
    console.log('Finished compiling! Ready when you are...');
  }); 

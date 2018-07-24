/**
* Orden.js
*
* @description :: A model definition.  Represents a database table/collection/etc.
* @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {
  
  attributes: {
    
    idUsuario:{
      type:"number"
    },
    fecha:{
      type:"string"
    },
    total:{
      type:"number"
    },
    estado:{
      type:"number"
    },
    fechaEntrega:{
      type:"string"
    },
    costoEntrega:{
      type:"number"
    }
    
  },
  
};


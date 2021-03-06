/**
* Libro.js
*
* @description :: A model definition.  Represents a database table/collection/etc.
* @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {
  
  attributes: {
    
    isbn: {
      type: 'string'
    },
    nombre: {
      type: 'string'
    },
    numeroPaginas: {
      type: 'number'
    },
    edicion: {
      type: 'number'
    },
    fechaPublicacion: {
      type: 'string'
    },
    nombreEditorial: {
      type: 'string'
    },
    precio: {
      type: 'number'
    },
    imagen:{
      type:"string"
    },
    autorId: {
      type: 'number'
    }
    
  },
  
};


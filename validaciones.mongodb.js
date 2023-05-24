const database = 'psbarber';

// Create a new database.
use('prueba');

// Coleccion Proveedor
db.createCollection("proveedor", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_Proveedor", "nit", "nombre", "telefono", "email", "direccion", "estado"],
      properties: {
        id_Proveedor: {
          bsonType: "string",
          description: "Id del proveedor. Debe ser tipo entero"
        },
        nit: {
          bsonType: "string",
          description: "Numero de identificacion tributaria, Debe ser tipo string"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre de la empresa, Debe ser tipo string"
        },
        telefono: {
          bsonType: "string",
          description: "Telefono de la empresa, Debe ser tipo string"
        },
        email: {
          bsonType: "string",
          pattern: "^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
          description: "Correo tipo string, con formato de correo@mail.com"
        },
        direccion: {
          bsonType: "string",
          description: "Direccion fisica de la empresa, Debe ser tipo string"
        },
        estado: {
          bsonType: "bool",
          description: "Estado del proveedor(true-false). Tipo bool"
        },
        persona_Encargada: {
          bsonType: "object",
          properties: {
            nombre_PE: {
              bsonType: "string",
              description: "Nombre de la persona encargada, Debe ser tipo string"
            },
            telefono_PE: {
              bsonType: "string",
              description: "Telefono de la persona encargada, Debe ser tipo string"
            }
          },
        }
      }
    }
  }
}
)

use('prueba');
// // Coleccion Producto
db.createCollection("producto", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_Producto", "nombre", "precio", "cantidad", "estado"],
      properties: {
        id_Producto: {
          bsonType: "string",
          description: "Id del producto. Debe ser tipo string"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del producto, Debe ser string"
        },
        precio: {
          bsonType: "string",
          description: "Precio del producto, Debe ser tipo string"
        },
        cantidad: {
          bsonType: "string",
          description: "Cantidad de productos, Debe ser tipo string"
        },
        estado: {
          bsonType: "bool",
          description: "Estado del producto, Tipo booleano(TRUE-FALSE)"
        },
        fk_Proveedor: {
          bsonType: 'string',
          description: 'Llave foranea de Id proveedor'
        }
      }
    },
  }
}
)

db.createCollection("producto", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_Producto", "nombre", "precio", "cantidad", "estado"],
      properties: {
        id_Producto: {
          bsonType: "string",
          description: "Id del producto. Debe ser tipo string"
        },
        nombre: {
          bsonType: "string",
          description: "Nombre del producto, Debe ser string"
        },
        precio: {
          bsonType: "string",
          description: "Precio del producto, Debe ser tipo string"
        },
        cantidad: {
          bsonType: "string",
          description: "Cantidad de productos, Debe ser tipo string"
        },
        estado: {
          bsonType: "bool",
          description: "Estado del producto, Tipo booleano(TRUE-FALSE)"
        },
        fk_Proveedor: {
          bsonType: 'string',
          description: 'Llave foranea de Id proveedor'
        }
      }
    },
  }
}
)

use('prueba')
db.createCollection("compra", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_Compra", "fecha", "total", "estado"],
      properties: {
        id_Compra: {
          bsonType: "string",
          description: "Id del producto. Debe ser tipo string"
        },
        fecha: {
          bsonType: "string",
          description: "Nombre del producto, Debe ser string"
        },
        total: {
          bsonType: "string",
          description: "Precio del producto, Debe ser tipo string"
        },
        estado: {
          bsonType: "bool",
          description: "Estado del producto, Tipo booleano(TRUE-FALSE)"
        },
      }
    },
  }
}
)

db.createCollection("detalle_compra", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_Detalle_Compra", "cantidad", "subtotal", "id_Compra","id_Producto"],
      properties: {
        id_Detalle_Compra: {
          bsonType: "string",
          description: "Id de detalle de compra. Debe ser tipo string"
        },
        cantidad: {
          bsonType: "string",
          description: "Nombre del producto, Debe ser string"
        },
        subtotal: {
          bsonType: "string",
          description: "Precio del producto, Debe ser tipo string"
        },
        id_Compra: {
          bsonType: "string",
          description: "Id de la compra. Debe ser tipo string"
        },
        id_Producto: {
          bsonType: "string",
          description: "Id del producto. Debe ser tipo string"
        }
      }
    },
  }
}
)
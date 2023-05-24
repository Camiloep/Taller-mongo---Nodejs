const { faker } = require('@faker-js/faker');
const uri = "mongodb+srv://admin:admin@cluster0.b7rbibw.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require("mongodb")

// Funcion para insertar 1 solo proveedor
// async function crearProveedor(nuevaProveedor) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('proveedor').insertOne(nuevaProveedor)
//         console.log(result);
//         console.log(`Se creo un nuevo proveedor con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }



// crearProveedor(
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// })

// Funcion para insertar varios proveedores
// async function crearProveedores(nuevaProveedor) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('proveedor').insertMany(nuevaProveedor)
//         console.log(result);
//         console.log(`Se crearon exitosamente los proveedores`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }

// // Se insertan con un for
// for (let i = 0; i < 200; i++) {
    
// crearProveedores([{
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// },
// {
//     "id_Proveedor" : faker.phone.number('####'),
//     "nit": faker.phone.number('#########'),
//     "nombre": faker.company.name(),
//     "telefono": faker.phone.number('+57 30# ### ####'),
//     "email": faker.internet.email({provider: 'gmail.com' }),
//     "direccion": faker.location.streetAddress(),
//     "estado": faker.datatype.boolean(),
//     "persona_Encargada": {
//         "nombre_PE": faker.person.fullName(),
//         "telefono_PE": faker.phone.number('+57 30# ### ####')
//     }
// }])}

// Funcion para insertar 1 solo producto
// async function crearProducto(nuevoProducto) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('producto').insertOne(nuevoProducto)
//         console.log(result);
//         console.log(`Se creo un nuevo proveedor con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }

// const pvd = faker.phone.number('####');

// crearProducto(
//     {
//     "id_Producto" : faker.phone.number('###'),
//     "nombre": faker.company.name(),
//     "precio": faker.phone.number('$#####'),
//     "cantidad": faker.phone.number('##'),
//     "estado": faker.datatype.boolean(),
//     "fk_Proveedor": pvd
// })

async function crearProducto(nuevoProducto) {
    const client = new MongoClient(uri);
    try {
        await client.connect();

        const result = await client.db('prueba').collection('producto').insertMany(nuevoProducto)
        console.log(result);
        console.log(`Se creo un nuevo proveedor con el siguiente _id: ${result.insertedId}`);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close()
    }

}

for (let i = 0; i < 100; i++) {
    crearProducto([
        {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    },
    {
        "id_Producto" : faker.phone.number('###'),
        "nombre": faker.company.name(),
        "precio": faker.phone.number('$#####'),
        "cantidad": faker.phone.number('##'),
        "estado": faker.datatype.boolean(),
        "fk_Proveedor": faker.phone.number('####')
    }])
    
}



// 1. lookup
// use('prueba')

// db.producto.aggregate([
//     {$lookup: {
//         from: 'proveedor',
//         localField: 'fk_Proveedor',
//         foreignField: 'id_Proveedor',
//         as: 'proveedor'
//     }}
// ])
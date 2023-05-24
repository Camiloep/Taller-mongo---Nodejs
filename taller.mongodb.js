const { faker } = require('@faker-js/faker');
const uri = "mongodb+srv://admin:admin@cluster0.b7rbibw.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require("mongodb")


// ******** Proveedor ********

// ******** Funcion para insertar 1 solo proveedor ********

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



// ******** Funcion para insertar varios proveedores ********

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


// ******** Se insertan con un for ********
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





// ******** Productos ********

// ******** Funcion para insertar 1 solo producto ********

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

// crearProducto(
//     {
//     "id_Producto" : faker.phone.number('###'),
//     "nombre": faker.company.name(),
//     "precio": faker.phone.number('$#####'),
//     "cantidad": faker.phone.number('##'),
//     "estado": faker.datatype.boolean(),
//     "fk_Proveedor": pvd
// })



// ******** Funcion para insertar varios productos ********

// async function crearProducto(nuevoProducto) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('producto').insertMany(nuevoProducto)
//         console.log(result);
//         console.log(`Se creo un nuevo proveedor con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }

// for (let i = 0; i < 100; i++) {
//     crearProducto([
//         {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     },
//     {
//         "id_Producto" : faker.phone.number('###'),
//         "nombre": faker.company.name(),
//         "precio": faker.phone.number('$#####'),
//         "cantidad": faker.phone.number('##'),
//         "estado": faker.datatype.boolean(),
//         "fk_Proveedor": faker.phone.number('####')
//     }])

// }



// ******** Primer lookup ********

// use('prueba')

// db.producto.aggregate([
//     {$lookup: {
//         from: 'proveedor',
//         localField: 'fk_Proveedor',
//         foreignField: 'id_Proveedor',
//         as: 'proveedor'
//     }}
// ])




// ******** Compra ********

// ******** Insert de 1 sola compra ********

// async function crearCompra(nuevaCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('compra').insertOne(nuevaCompra)
//         console.log(result);
//         console.log(`Se creo una nueva compra con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }


// crearCompra(
//     {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// })



// ******** insert de varias compras ********

// async function crearCompra(nuevaCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('compra').insertMany(nuevaCompra)
//         console.log(result);
//         console.log(`Se creo una nueva compra con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }
// for (let i = 0; i < 200; i++) {

// crearCompra([
//     {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },{
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// },
// {
//     "id_Compra" : faker.phone.number('####'),
//     "fecha": faker.date.anytime(),
//     "total": faker.phone.number('$#####'),
//     "estado": faker.datatype.boolean()
// }])}



// ******** Insert de 1 solo detalle Compra ********

// async function crearDetalleCompra(nuevoDetalleCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('detalle_compra').insertOne(nuevoDetalleCompra)
//         console.log(result);
//         console.log(`Se creo un nuevo detalle de compra con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }


// crearDetalleCompra(
//     {
//         "id_Detalle_Compra": faker.phone.number('0####'),
//         "cantidad": faker.phone.number('##'),
//         "subtotal": faker.phone.number('$#####'),
//         "fk_Compra": faker.phone.number('####'),
//         "fk_Producto": faker.phone.number('###')
//     }
// )




// ******** detalle_Compra ********

// ******** insert de varios detalles de compra ********

// async function crearDetalleCompra(nuevoDetalleCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('detalle_compra').insertMany(nuevoDetalleCompra)
//         console.log(result);
//         console.log(`Se creo un nuevo detalle de compra con el siguiente _id: ${result.insertedId}`);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }

// }

// for (let i = 0; i < 200; i++) {
//     crearDetalleCompra([
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         },
//         {
//             "id_Detalle_Compra": faker.phone.number('0####'),
//             "cantidad": faker.phone.number('##'),
//             "subtotal": faker.phone.number('$#####'),
//             "fk_Compra": faker.phone.number('####'),
//             "fk_Producto": faker.phone.number('###')
//         }])}



// ******** Segundo lookup ********

// use('prueba')

// db.detalle_compra.aggregate([
//     {
//         $lookup: {
//             from: "producto",
//             localField: "fk_Producto",
//             foreignField: "id_Producto",
//             as: "Producto"
//           }
//     },
// ])

// db.detalle_compra.aggregate([
// {
//     $lookup: {
//       from: "compra",
//       localField: "fk_Compra",
//       foreignField: "id_Compra",
//       as: "Compra"
//     }
// }])

const { faker } = require('@faker-js/faker');
const uri = "mongodb+srv://admin:admin@cluster0.b7rbibw.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require("mongodb")



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

// READ o findOne()

// async function buscarProducto(idProducto) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('producto').findOne({id_Producto: idProducto})
//         if (result) {
//             console.log(result);
//             console.log(`Se encontro un producto de compra con el id: ${idProducto}`); 
//         }else{
//             console.log(`NO se encontro un producto de compra con el id: ${idProducto}`);
//         } 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// buscarProducto("435");      


// Update o UpdateOne

// async function actualizarProducto(idProducto, campoActualizar) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('producto').updateOne({id_Producto: idProducto}, {$set:{nombre: campoActualizar}});
//             console.log(result);
//             console.log(`${result.matchedCount} Producto(s) cumplen con el criterio de busqueda`);
//             console.log(`${result.modifiedCount} Producto(s) fue(ron) actualizado(s)`);  
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// 
// actualizarProducto("435", "Cuchillas")



// Delete o deleteOne()

// async function eliminarProducto(idProducto) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('producto').deleteOne({id_Producto:idProducto});
//             console.log(result);
//             console.log(`${result.deletedCount} Producto(s) fue(ron) eliminado(s)`); 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// eliminarProducto("435")
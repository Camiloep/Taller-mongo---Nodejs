const { faker } = require('@faker-js/faker');
const uri = "mongodb+srv://admin:admin@cluster0.b7rbibw.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require("mongodb")

// ******** Detalle de compra *********

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

// READ o findOne()

// async function buscarDetalleCompra(idDetalleCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('detalle_compra').findOne({id_Detalle_Compra: idDetalleCompra})
//         if (result) {
//             console.log(result);
//             console.log(`Se encontro un detalle de compra con el id: ${idDetalleCompra}`); 
//         }else{
//             console.log(`NO se encontro un detalle de compra con el id: ${idDetalleCompra}`);
//         } 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// buscarDetalleCompra("06501");      


// Update o UpdateOne

// async function actualizarDetalleCompra(idDetalleCompra, campoActualizar) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('detalle_compra').updateOne({id_Detalle_Compra: idDetalleCompra}, {$set:{cantidad: campoActualizar}});
//             console.log(result);
//             console.log(`${result.matchedCount} Detalle(s) cumplen con el criterio de busqueda`);
//             console.log(`${result.modifiedCount} Detalle(s) fue(ron) actualizado(s)`);  
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// 
// actualizarDetalleCompra("06501", "20")



// Delete o deleteOne()
// async function eliminarDetalleCompra(idDetalleCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('detalle_compra').deleteOne({id_Detalle_Compra:idDetalleCompra});
//             console.log(result);
//             console.log(`${result.deletedCount} Detalle(s) fue(ron) eliminado(s)`); 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// eliminarDetalleCompra("06501")
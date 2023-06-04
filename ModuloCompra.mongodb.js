const { faker } = require('@faker-js/faker');
const uri = "mongodb+srv://admin:admin@cluster0.b7rbibw.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require("mongodb")

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

// READ o findOne()

// async function buscarCompra(idCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('compra').findOne({id_Compra: idDCompra})
//         if (result) {
//             console.log(result);
//             console.log(`Se encontro una compra con el id: ${idCompra}`); 
//         }else{
//             console.log(`NO se encontro una compra con el id: ${idCompra}`);
//         } 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// buscarCompra("5266");      


// Update o UpdateOne

// async function actualizarCompra(idCompra, campoActualizar) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('compra').updateOne({id_Compra: idCompra}, {$set:{fecha: campoActualizar}});
//             console.log(result);
//             console.log(`${result.matchedCount} Compra(s) cumplen con el criterio de busqueda`);
//             console.log(`${result.modifiedCount} Compra(s) fue(ron) actualizada(s)`);  
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }


// actualizarCompra("5266", faker.date.anytime())



// Delete o deleteOne()
// async function eliminarCompra(idCompra) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('compra').deleteOne({id_Compra:idCompra});
//             console.log(result);
//             console.log(`${result.deletedCount} Compra(s) fue(ron) eliminada(s)`); 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// eliminarCompra("5266")
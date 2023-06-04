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

// READ o findOne()

// async function buscarProveedor(idProveedor) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('proveedor').findOne({id_Proveedor: idProveedor})
//         if (result) {
//             console.log(result);
//             console.log(`Se encontro un Proveedor de compra con el id: ${idProveedor}`); 
//         }else{
//             console.log(`NO se encontro un proveedor de compra con el id: ${idProveedor}`);
//         } 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// buscarProveedor("7084");      


// Update o UpdateOne

// async function actualizarProveedor(idProveedor, campoActualizar) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('proveedor').updateOne({id_Proveedor: idProveedor}, {$set:{nombre: campoActualizar}});
//             console.log(result);
//             console.log(`${result.matchedCount} Proveedor(es) cumplen con el criterio de busqueda`);
//             console.log(`${result.modifiedCount} Proveedor(es) fue(ron) actualizado(s)`);  
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// 
// actualizarProveedor("7084", "H&S")



// Delete o deleteOne()

// async function eliminarProveedor(idProveedor) {
//     const client = new MongoClient(uri);
//     try {
//         await client.connect();

//         const result = await client.db('prueba').collection('proveedor').deleteOne({id_Proveedor:idProveedor});
//             console.log(result);
//             console.log(`${result.deletedCount} Proveedor(es) fue(ron) eliminado(s)`); 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close()
//     }
// }

// eliminarProveedor("435")
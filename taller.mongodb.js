const { faker } = require('@faker-js/faker');
const uri = "mongodb+srv://admin:admin@cluster0.b7rbibw.mongodb.net/?retryWrites=true&w=majority"
const { MongoClient } = require("mongodb")


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


// ******** Segundo lookup ********

// use('prueba')

// // db.detalle_compra.aggregate([
// //     {
// //         $lookup: {
// //             from: "producto",
// //             localField: "fk_Producto",
// //             foreignField: "id_Producto",
// //             as: "Producto"
// //           }
// //     },
// // ])

// // Pipeline
// db.detalle_compra.aggregate([
// {
//     $lookup: {
//       from: "compra",
//       localField: "fk_Compra",
//       foreignField: "id_Compra",
//       as: "Compra"
//     }
// },
// {
//      $skip: 10
// },
// {
//     $limit: 5
// }
// ])

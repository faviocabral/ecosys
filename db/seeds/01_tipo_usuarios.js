/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tipo_usuarios').del()
  await knex('tipo_usuarios').insert([
    {id: 1, nombre: 'Administrador' , estado:'Activo'},
    {id: 2, nombre: 'Intermedio' , estado:'Activo'},
    {id: 3, nombre: 'Basico' , estado:'Activo'},
  ]);
};

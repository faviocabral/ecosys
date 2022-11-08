/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('usuarios').del()
  await knex('usuarios').insert([
    {id: 1, nombre_usuario: 'Administrador', codigo: 'admin', password: '$2a$12$w5ZU5rUfMD7AxxMCKA7rLeQPLYH1fvlnxQKhTkEnbk/Lt8Wkp2hdu' , estado:'Activo', tipo_usuario:1 },
    {id: 2, nombre_usuario: 'Usuario', codigo: 'user', password: '$2a$12$dfkBiFVwRjErwU4.gfmDJ.NVMhQ86ko/4x3XPEn48iDYWbPPayEPK' , estado:'Activo', tipo_usuario:2 },
  ]);
};

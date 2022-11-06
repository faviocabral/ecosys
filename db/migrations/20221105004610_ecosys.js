/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('tipo_usuarios', (table)=>{
        table.increments()
        table.string('nombre').notNullable()
        table.string('estado')
        table.timestamp('fecha_ins').defaultTo(knex.fn.now())
        table.timestamp('fecha_upd').defaultTo(knex.fn.now())
        table.string('user_ins')
        table.string('user_upd')
    })
    .createTable('usuarios', (table)=>{
        table.increments()
        table.string('nombre_usuario').notNullable()
        table.string('codigo')
        table.string('password')
        table.string('estado')
        table.integer('tipo_usuario').unsigned().references('id').inTable('tipo_usuarios')
        table.timestamp('fecha_ins').defaultTo(knex.fn.now())
        table.timestamp('fecha_upd').defaultTo(knex.fn.now())
        table.string('user_ins')
        table.string('user_upd')
    })
    .createTable('contactos', (table)=>{
        table.increments()
        table.string('codigo').notNullable()
        table.string('nombre')
        table.string('ruc').notNullable()
        table.string('telefono')
        table.string('telefono2')
        table.string('correo_electronico')
        table.string('ciudad')
        table.string('barrio')
        table.string('direccion')
        table.string('retencion')
        table.string('profesion')
        table.integer('limite_credito')
        table.string('tipo_persona')
        table.string('estado')
        table.timestamp('fecha_ins').defaultTo(knex.fn.now())
        table.timestamp('fecha_upd').defaultTo(knex.fn.now())
        table.string('user_ins')
        table.string('user_upd')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('tipo_usuarios')
        .dropTable('usuarios')
        .dropTable('contactos')
  
};

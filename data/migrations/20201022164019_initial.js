
exports.up = async function(knex) {
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("name")
    })

    await knex.schema.createTable("steps", (table) => {
        
        
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
        table.integer("order")
        table.text("description")
        table.primary(["recipe_id","order"])
    })

    await knex.schema.createTable("ingredient_list", (table) => {
        table.increments("id")
        table.integer("measurement")
        table.integer("ingredient_id")
            .references("id")
            .inTable("ingredients")
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
    })


  
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredient_list")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};

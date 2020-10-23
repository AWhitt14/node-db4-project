
exports.seed = async function(knex) {
  await knex("ingredient_list").truncate()
    
    await knex("ingredient_list").insert([
        { measurement: 1, ingredient_id:1, recipe_id: 2},
        { measurement: 6, ingredient_id:2, recipe_id: 2},
        { measurement: 8, ingredient_id:3, recipe_id: 1},
        { measurement: 2, ingredient_id:4, recipe_id: 1},
        { measurement: 3, ingredient_id:5, recipe_id: 1},
        { measurement: 2, ingredient_id:5, recipe_id: 2}
        
      ]);
};

exports.seed = async function(knex) {
  await knex("steps").truncate()
    
    await knex("steps").insert([
        { recipe_id: 1, order: 1, description: "rub red wine over steak"},
        { recipe_id: 1,order: 2, description: "put the meat in the oven"},
        { recipe_id: 2, order: 1, description: "mix dry ingredients"},
        { recipe_id: 2, order: 2, description: "mix in wet ingredients and bake at 375 for 1 hour"},
      ]);
};

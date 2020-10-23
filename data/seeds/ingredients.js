
exports.seed = async function(knex) {
  await knex("ingredients").truncate()
    
    await knex("ingredients").insert([
        { name: "cups of milk"},
        { name: "cups of flour"},
        { name: "oz of steak"},
        { name: "tsp of red wine"},
        { name: "tbs of salt"}
        
      ]);
};

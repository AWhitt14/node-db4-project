
exports.seed = async function(knex) {
    await knex("recipes").truncate()
    
    await knex("recipes").insert([
        { name: "Three cheese Lamp"},
        { name: "cake"}
        
      ]);

};

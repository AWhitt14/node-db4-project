const { as } = require('../data/config')
const db = require('../data/config')
const { param } = require('./recipeRouter')



function findRecipes() {
    return db("recipes")
}

function getSteps(id) {
    return db("steps").where("recipe_id",id)
}

function findRecipesById(id) {
    return db("recipes as r")
    .where("r.id",id)
    .join("ingredient_list as il", "il.recipe_id","r.id")
    .join("ingredients as i","i.id","il.ingredient_id")
    .join("steps as s","s.recipe_id","r.id")
    .select("r.name","s.order","s.description","il.measurement", "i.name as ingredient")
}



module.exports = {
    findRecipes, findRecipesById, getSteps
}
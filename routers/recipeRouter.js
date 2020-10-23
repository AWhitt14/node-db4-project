const express = require("express")
const {findRecipes, findRecipesById, getSteps} = require('./routerModule')


const router = express.Router()

router.get('/',async (req,res,next) => {
    try {
    const recipe = await findRecipes()
    res.json(recipe)
    } catch(er) {
        next(er)
    }
    
})

router.get('/:id',async (req,res,next) => {
    try {
        const ingredients = []
        const steps = []
        const rec = await findRecipesById(req.params.id)
        rec.forEach(x => {
            ingredients.push(`${x.measurement}${x.ingredient}`)
            steps.push(`step ${x.order}: ${x.description}`)
        })
        const recipe = {
            name: rec[0].name,
            ingredients: ingredients,
            steps: steps,
        }

        res.json(recipe)

    } catch(er) {
        next(er)
    }
    
})

router.get('/:id/steps', async (req, res, next)=> {
    try {
        const steps = await getSteps(req.params.id)
        res.json(steps)
    } catch(er){
        next(er)
    }
})






module.exports = router
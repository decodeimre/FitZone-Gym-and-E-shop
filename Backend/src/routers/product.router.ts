import {Router} from 'express'
import { addNewProduct, deleteProduct, editProduct, seeAllProducts } from '../controllers/product.controller'
import { addNewCategory, deleteCategory } from '../controllers/category.controller'
import { authenticateAndCheckRoles } from '../middlewares/authAndRoles'

const productRouter = Router()

productRouter.post("/add",authenticateAndCheckRoles('admin'), addNewProduct)
productRouter.patch("/edit/:pid",authenticateAndCheckRoles('admin'),editProduct)
productRouter.delete("/delete/:pid",authenticateAndCheckRoles('admin'),deleteProduct)
productRouter.post("/category/add",authenticateAndCheckRoles('admin'),addNewCategory)
productRouter.delete("/category/delete/:cid",authenticateAndCheckRoles('admin'),deleteCategory)

productRouter.get("/",seeAllProducts)

export default productRouter
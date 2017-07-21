let express = require('express');
let blogsCtrl = require('./../controllers/blogsCtrl');
let blogsRouter = express.Router();


blogsRouter.get('/', blogsCtrl.get);
blogsRouter.post('/', blogsCtrl.post);
blogsRouter.get('/:id', blogsCtrl.getById);
blogsRouter.delete('/:id', blogsCtrl.remove);


module.exports = blogsRouter;
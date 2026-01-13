import { Router } from "express";

const sbusriptionRouter = Router();

sbusriptionRouter.get('/', (req,res) => res.send({title: "Get all subscriptions"}));

sbusriptionRouter.get('/:id', (req,res) => res.send({title: "Get subscription details"}));

sbusriptionRouter.post('/', (req,res) => res.send({title: "Create subscription"}));

sbusriptionRouter.put('/', (req,res) => res.send({title: "Update subscription"}));

sbusriptionRouter.delete('/', (req,res) => res.send({title: "Delete subscription"}));

sbusriptionRouter.get('/user/:id', (req,res) => res.send({title: "Get all user subscriptions"}));

sbusriptionRouter.put('/:id/cancel', (req,res) => res.send({title: "CANCEL subscription"}));

sbusriptionRouter.get('/upcoming-renewals', (req,res) => res.send({title: "Get upcoming renewals"}));

export default sbusriptionRouter;
import { Router } from "express";
import { createSubscription, getALlSubscription } from "../controllers/subscription.controller.js";
import authorize from "../middlewares/auth.middlewares.js";

const sbusriptionRouter = Router();

sbusriptionRouter.get('/', (req,res) => res.send({title: "Get all subscriptions"}));

sbusriptionRouter.get('/:id', (req,res) => res.send({title: "Get subscription details"}));

sbusriptionRouter.post('/',authorize,createSubscription);

sbusriptionRouter.put('/', (req,res) => res.send({title: "Update subscription"}));

sbusriptionRouter.delete('/', (req,res) => res.send({title: "Delete subscription"}));

sbusriptionRouter.get('/user/:id', authorize, getALlSubscription);

sbusriptionRouter.put('/:id/cancel', (req,res) => res.send({title: "CANCEL subscription"}));

sbusriptionRouter.get('/upcoming-renewals', (req,res) => res.send({title: "Get upcoming renewals"}));

export default sbusriptionRouter;
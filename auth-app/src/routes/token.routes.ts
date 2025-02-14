import tokenController from 'controller/token.controller';
import { CreateTokenDto } from 'dto/create-token.dto';
import { VerifyTokenDto } from 'dto/verify-token.dto';
import { Router } from 'express';
import { validateMiddleware } from 'middleware/validate.middleware';
import { Routes } from 'share/const';

export const tokenRouter = Router();
export const mainRouter = Router();
mainRouter.use('/auth', tokenRouter);
tokenRouter.get(
  Routes.Create,
  validateMiddleware(CreateTokenDto),
  tokenController.create
);

tokenRouter.post(
  Routes.Verify,
  validateMiddleware(VerifyTokenDto),
  tokenController.verifyToken
);

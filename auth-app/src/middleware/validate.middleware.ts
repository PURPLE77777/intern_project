import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export const validateMiddleware =
  <Entity extends ClassConstructor<{}>>(DtoEntity: Entity) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const dtoInstance = plainToInstance(DtoEntity, req.body);
    const errors = await validate(dtoInstance);

    if (errors.length > 0) {
      const formattedErrors = errors.map(err => ({
        property: err.property,
        constraints: err.constraints,
      }));
      res.status(400).json({ errors: formattedErrors });
      return;
    }

    next();
  };

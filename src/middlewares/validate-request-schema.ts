import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export function validateRequestSchema(
  req:Request, 
  res:Response, 
  next: NextFunction
):void {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // throw new Error('validation unsuccessful')
    res.status(400).json({
      errors: errors.array()
    })
  }
  next()
}
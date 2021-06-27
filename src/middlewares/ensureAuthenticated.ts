import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if(!authToken){
    return response.status(401).end()
  }

  let [,token] = authToken.split(" ")

  try{
    const { sub } = verify(token, "1c5627563887405f6d866718307887a7") as IPayLoad
    request.user_id = sub
  }catch(err){
    return response.status(401).end()
  }

  return next()
}
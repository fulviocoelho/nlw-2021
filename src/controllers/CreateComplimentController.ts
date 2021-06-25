import { Request, Response } from 'express'
import { CreateComplimentService } from '../services/CreateComplimentService'


class CreateComplimentController {
  async handler(request: Request, response: Response){
    const { tag_id, user_sender, user_receiver, message } = request.body

    const createComplimentService = new CreateComplimentService();
    const compliment = await createComplimentService.execute({ 
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    response.json(compliment)
  }
}

export { CreateComplimentController }
import * as express from 'express';

export default class HellowWordController {
  public static async hello(req: express.Request, res: express.Response): Promise<void> {
    res.status(200).send({
      message: 'GET deu certo a alteração meu CÃO SAGRADO'
    })
  }
}
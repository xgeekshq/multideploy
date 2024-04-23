import { Controller, Get } from '@nestjs/common';

type InfoMessage = {
  motd: string;
  project: string;
  message: string;
  dbEngine: string;
  api: any;
};

@Controller()
export class AppController {

  @Get()
  getApiInfo(): InfoMessage {
    return {
      motd: "Hello azure Universe",
      project: 'multideploy',
      message: 'Status: OK',
      dbEngine: "none",
      api: {
        'GET /': 'API General Infos',
        'GET /api': 'OpenApi Spec Page',
        'GET /todos': 'Fetch all todos from database',
        'POST /todos': 'Saves a new todo into database',
      },
    };
  }
}

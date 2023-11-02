import { Controller, Get } from "@nestjs/common";


@Controller()
export class AppController{
    @Get()
    getRoutRoute(){
        return "hello world all of you"
    }
}
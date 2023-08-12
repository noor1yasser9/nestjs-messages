import { MessagesReoository } from "./mesages.repository";

export class MessagesService{
    messagesRepo:MessagesReoository;

    constructor(){
        this.messagesRepo = new MessagesReoository();
    }


    findOne(id:string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(content:string){
        return this.messagesRepo.create(content);
    }
}
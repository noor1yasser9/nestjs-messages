import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesReoository } from './mesages.repository';
@Module({
  controllers: [MessagesController],
  providers:[MessagesService,MessagesReoository]
})
export class MessagesModule {}

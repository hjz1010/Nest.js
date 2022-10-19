import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';

@Module({
  imports: [ // 생성한 repository를 다른 곳에서도 사용할 수 있도록 
    TypeOrmModule.forFeature([Board]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}

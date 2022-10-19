import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-vaildation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    // @Get() // 4. 사용할 메소드를 데코레이터로 달아준다.
    // getAllBoard(): Board[]  {
    //             //7. ↑ 모델에 정의해둔 형태가 들어오도록 타입을 지정해준다.
    //     return this.boardsService.getAllBoards();
    // }

    // @Post()   // 10. 게시물 생성에 사용할 controller
    // @UsePipes(ValidationPipe)  //21. 빌트인 파이프를 가져와서 사용
    // createBoard(
    //     @Body() createBoardDto: CreateBoardDto  //12. controller에 DTO 적용하기 
    // ): Board {
    //     return this.boardsService.createBoard(createBoardDto)
    // }
    // //15. controller
    // @Get('/:id')  // ↓ path parameter에서 키가 id인 값을 가져와서 
    // getBoardById(@Param('id') id: string): Board {
    //                         // ↑ id라는 변수에 담는다!
    //     return this.boardsService.getBoardById(id)
    // }
    // //17.
    // @Delete('/:id')
    // deleteBoard(@Param('id') id:string): void {
    //     this.boardsService.deleteBoard(id)
    // }
    // //19. controller
    // @Patch('/:id/status')  // path parameter뒤에 추가 경로 덧붙이기!!
    // updateBoardStatus(
    //     @Param('id') id:string,
    //     @Body('status', BoardStatusValidationPipe) status: BoardStatus
    // ) {                     // 25. ↑
    //     return this.boardsService.updateBoardStatus(id, status);
    // }
}

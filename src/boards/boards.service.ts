import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
    // private boards: Board[] = []; //1. private를 사용하여 다른 컴포넌트에서 이 배열값을 수정할 수 없도록
    //             //7. ↑ ↓ 모델에 정의해둔 형태가 들어오도록 타입을 지정해준다.
    // 이제 DB 사용하므로 삭제

    // service에서 repository를 사용할 수 있도록 injection 해준다. controller에서 service를 사용하기 위해 주입한 것과 동일!
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ) {}

    // getAllBoards(): Board[] {  //2. 메소드 만들기
    //     return this.boards;  //3. DB 대신 사용하는 배열 반환
    // }

    // createBoard(createBoardDto: CreateBoardDto) { //8. 게시물 생성 API 
    //               //13. ↑ ↓ service에 DTO 적용
    //     const { title, description } = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board); //9. 배열에 새 게시물 넣기
    //     return board;  // 새로 생성된 게시물 반환
    // }
    // //14. service
    // getBoardById(id: string): Board { // 게시글 하나 반환하므로 []없이
    //     const found = this.boards.find((board) => board.id === id) // 배열에서 id가 일치하는 게시물 찾기

    //     if (!found) {  //22. ↓ 파이프를 이용해서 유효성 체크
    //         throw new NotFoundException('CANNOT FIND BOARD WITH THE ID')
    //     }

    //     return found
    // }
    // //16. service
    // deleteBoard(id: string): void { //void: 반환값이 없으므로
    //     const found = this.getBoardById(id); // 23. 이미 작성해둔 유효성 체크를 이용하자
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }
    // //18. 
    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}

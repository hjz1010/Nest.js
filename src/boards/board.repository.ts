import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { BoardStatus } from "./board-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board) 
export class BoardRepository extends Repository<Board> {

    // 2-7. DB관련 로직은 service가 아닌 요기 repository로 옮겨서 처리해주자. (Repository Pattern)
    async createBoard(createBoardDto: CreateBoardDto) : Promise <Board> {
        const { title, description } = createBoardDto;

        const board = this.create({ //이미 repository 안에 있으므로 this로 변경
            title,
            description,
            status: BoardStatus.PUBLIC
        })

        await this.save(board);
        return board;
    }
}

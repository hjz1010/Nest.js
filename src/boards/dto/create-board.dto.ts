import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {  //11. class로 DTO 사용하기
    @IsNotEmpty() // 20. DTO에 파이프 추가
    title: string;

    @IsNotEmpty()
    description: string;
}

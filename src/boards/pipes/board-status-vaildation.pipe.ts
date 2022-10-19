import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";
//24.  
export class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions = [ //25. 접두사 readOnly 를 사용해서 읽기전용 값을 만들자
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any, metadata: ArgumentMetadata) {
        // console.log('value', value) 
        // console.log('metadata',metadata)
        value = value.toUpperCase();  //26. 들어온 값을 대문자로 바꾸고 

        if (!this.isStatusVaild(value)) { //27. 함수를 정의해서 사용하자 
            throw new BadRequestException(`${value} is NOT in the status options`)
        }
        return value;
    }

    private isStatusVaild(status: any) {  //28. status 를 확인하는 함수 정의
        const index = this.StatusOptions.indexOf(status);
        return index !== -1
    }
}


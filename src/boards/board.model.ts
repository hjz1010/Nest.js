export interface Board {   //5. interface를 이용하여 모델 생성
    id : string;
    title : string;
    description : string;
    status : BoardStatus;
}

export enum BoardStatus {  //6. Enum을 사용하여 지정해둔 값 외에는 들어올 수 없게
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
}

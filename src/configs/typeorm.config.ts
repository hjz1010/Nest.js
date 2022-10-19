import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Board } from "src/boards/board.entity";

export const typeORMconfig : TypeOrmModuleOptions = {

        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "password1!",
        "database": "Nestjs_test",
        "entities": [Board], 
        "synchronize": true 
}

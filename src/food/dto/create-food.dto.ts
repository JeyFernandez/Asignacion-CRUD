import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFoodDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsNumber()
    @IsNotEmpty()
    stock: number

    @IsString()
    @IsNotEmpty()
    category: string
    
    @IsString()
    @IsNotEmpty()
    description: string

}

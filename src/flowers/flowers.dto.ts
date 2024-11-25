import { IsNumber, IsString } from 'class-validator';

export class CreateFlowerDto {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsNumber()
  price: number;
}

export type TFlowersUpdatedDto = Partial<CreateFlowerDto>;

import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from '../conseption/pipe';
import { CreateFlowerDto } from './flowers.dto';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  //
  @Get('')
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() dto: CreateFlowerDto) {
    return this.flowersService.create(dto);
  }
}

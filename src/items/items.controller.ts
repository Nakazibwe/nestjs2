import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from '../dto/createitem.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interfaces';
import { Request, Response } from 'express';
@Controller('items')
export class ItemsController {
  // @Get()
  // findAll(@Req() req: Request, @Res() res: Response): Response{
  //     return res.json('All available items')
  // }
  constructor(private readonly itemsService: ItemsService) {}
  //Get All items
  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  //Post an item
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }
  //Get one item
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  //Delete an item.
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
  //Update an item.
  @Put(':id')
  update(
    @Body() updatedItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<Item> {
    return this.itemsService.update(id, updatedItemDto);
  }
}

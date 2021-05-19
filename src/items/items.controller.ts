import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { Youtube } from 'tube-api';

@Controller('items')
export class ItemsController {
  yt;
  vid = [];
  constructor(private readonly itemsService: ItemsService) {
    this.yt = new Youtube('AIzaSyDzpOSifvlHU5G_pL7lVRWAm50Z8KkrNz4');
  }

  @Get()
  async findAll(): Promise<Item[]> {
    if (this.yt){
    const ch = await this.yt.channelDetails('UC8butISFwT-Wl7EV0hUK0BQ');
      // console.log(ch);
    // const vid = await this.yt.videosList(ch.uploads_id, [])
    //   console.log(vid);
    const c = await this.yt.videoInfo('RBSGKlAvoiM')
      console.log(c);
    return this.itemsService.findAll();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `delete ${id}`;
  }


  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto,
         @Param('id') id): string {
    return `update ${id} ${updateItemDto.name}`;
  }
}

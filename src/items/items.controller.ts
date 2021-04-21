import { Controller, Get, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
  @Get()
  getAll(): string {
    return 'all items';
  }

  @Post()
  create(): string {
    return 'create';
  }
}

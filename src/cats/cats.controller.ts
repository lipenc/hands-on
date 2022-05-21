import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    NotFoundException,
  } from '@nestjs/common';
  import { CatsService } from './cats.service';
  import { CreateCatDto } from './dto/create-cat.dto';
  import { UpdateCatDto } from './dto/update-cat.dto';
  
  @Controller('cats')
  export class CatsController {
    constructor(private readonly catsService: CatsService) {}
  
    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      return await this.catsService.create(createCatDto);
    }
  
    @Get()
    async findAll() {
      return await this.catsService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const cat = await this.catsService.findOne(+id);
      if (!cat) {
        throw new NotFoundException('Cat not found');
      }
  
      return cat;
    }

    @Get('name/:name')
    async findByName(@Param('name') name: string){
      const cat = await this.catsService.findByName(name);
      if (!cat) {
        throw new NotFoundException('Cat not found');
      }
  
      return cat;
    }
  
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
      return await this.catsService.update(+id, updateCatDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return await this.catsService.remove(+id);
    }
  }
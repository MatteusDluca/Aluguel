import { Body, Controller, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';
import { FunctionaryService } from './functionary.service';
import { iUser } from './functionary.interface';
import { FunctionaryFilter } from './functionary.filter';
import { iUserUpdate } from './functionaryupdate.interface';


@Controller('functionary')
export class FunctionaryController {
    constructor(private readonly functionaryService: FunctionaryService) {}

    @Get()
    async showUser() {
        return this.functionaryService.showUsers()
    }
    @Post()
    @UseFilters(FunctionaryFilter)
    async register(@Body() userData: iUser): Promise<iUser> {
        return this.functionaryService.newUser(userData)
    }
    @Patch(':id')
    async up(@Param('id') id: string, @Body() update: iUserUpdate) {
        return this.functionaryService.patchFunctionary(id, update)
    }
}

import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common"
import { ExercicesService } from "./exercices.service"
import { CreateExerciceDto } from "./dto/create-exercice.dto"
import { UpdateExerciceDto } from "./dto/update-exercice.dto"

@Controller("exercices")
export class ExercicesController {
    constructor(private readonly exercicesService: ExercicesService) {}

    @Post()
    create(@Body() createExerciceDto: CreateExerciceDto) {
        return this.exercicesService.create(createExerciceDto)
    }

    @Get()
    findAll() {
        return this.exercicesService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id: number) {
        return this.exercicesService.findOne(id)
    }

    @Put(":id")
    update(
        @Param("id") id: number,
        @Body() updateExerciceDto: UpdateExerciceDto,
    ) {
        return this.exercicesService.update(id, updateExerciceDto)
    }

    @Delete(":id")
    remove(@Param("id") id: number) {
        return this.exercicesService.remove(id)
    }
}

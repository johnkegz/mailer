import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FileUploadGcpService } from './file-upload-gcp.service';
import { CreateFileUploadGcpDto } from './dto/create-file-upload-gcp.dto';
import { UpdateFileUploadGcpDto } from './dto/update-file-upload-gcp.dto';

@Controller('file-upload-gcp')
export class FileUploadGcpController {
  constructor(private readonly fileUploadGcpService: FileUploadGcpService) {}

  @Post()
  create(@Body() createFileUploadGcpDto: CreateFileUploadGcpDto) {
    return this.fileUploadGcpService.create(createFileUploadGcpDto);
  }

  @Get()
  findAll() {
    return this.fileUploadGcpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fileUploadGcpService.findOne(+id);
  }

  @Get('upload/file')
  uploadFile() {
    return this.fileUploadGcpService.uploadFile();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFileUploadGcpDto: UpdateFileUploadGcpDto,
  ) {
    return this.fileUploadGcpService.update(+id, updateFileUploadGcpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fileUploadGcpService.remove(+id);
  }
}

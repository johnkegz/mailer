import { Module } from '@nestjs/common';
import { FileUploadGcpService } from './file-upload-gcp.service';
import { FileUploadGcpController } from './file-upload-gcp.controller';

@Module({
  controllers: [FileUploadGcpController],
  providers: [FileUploadGcpService]
})
export class FileUploadGcpModule {}

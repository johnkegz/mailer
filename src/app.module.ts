import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadGcpModule } from './file-upload-gcp/file-upload-gcp.module';

@Module({
  imports: [FileUploadGcpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadGcpController } from './file-upload-gcp.controller';
import { FileUploadGcpService } from './file-upload-gcp.service';

describe('FileUploadGcpController', () => {
  let controller: FileUploadGcpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUploadGcpController],
      providers: [FileUploadGcpService],
    }).compile();

    controller = module.get<FileUploadGcpController>(FileUploadGcpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

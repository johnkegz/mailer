import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadGcpService } from './file-upload-gcp.service';

describe('FileUploadGcpService', () => {
  let service: FileUploadGcpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileUploadGcpService],
    }).compile();

    service = module.get<FileUploadGcpService>(FileUploadGcpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { PartialType } from '@nestjs/mapped-types';
import { CreateFileUploadGcpDto } from './create-file-upload-gcp.dto';

export class UpdateFileUploadGcpDto extends PartialType(CreateFileUploadGcpDto) {}

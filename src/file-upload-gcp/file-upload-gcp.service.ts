import { Injectable } from '@nestjs/common';
import { CreateFileUploadGcpDto } from './dto/create-file-upload-gcp.dto';
import { UpdateFileUploadGcpDto } from './dto/update-file-upload-gcp.dto';
import { gcsConfig } from './gcs.config';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class FileUploadGcpService {
  private readonly bucketName: string;
  private readonly storage: Storage;

  constructor() {
    this.bucketName = 'gcp_files_upload';
    this.storage = new Storage(gcsConfig);
  }

  create(createFileUploadGcpDto: CreateFileUploadGcpDto) {
    return 'This action adds a new fileUploadGcp';
  }

  findAll() {
    return `This action returns all fileUploadGcp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUploadGcp`;
  }

  update(id: number, updateFileUploadGcpDto: UpdateFileUploadGcpDto) {
    return `This action updates a #${id} fileUploadGcp`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUploadGcp`;
  }

  async uploadFile(): Promise<string> {
    try {
      const bucket = this.storage.bucket(this.bucketName);
      const gcsFileName = `uploads/traverse-bay.tiff`;
      const fileOptions = {
        // gzip: true, // You can enable gzip compression if needed
        resumable: false, // Set to true for large files
        // metadata: {
        //   contentType: file.mimetype,
        //   metadata: {
        //     custom: 'metadata',
        //   },
        // },
      };

      await bucket.upload(
        '/Users/johnkalyango/Projects/mailer/src/file-upload-gcp/traverse-bay.tiff',
        {
          destination: gcsFileName,
          ...fileOptions,
        },
        function (err, file) {
          if (err) {
            console.error(`Error uploading image image_to_upload.jpeg: ${err}`);
          } else {
            console.log(`Image image_to_upload.jpeg uploaded to .......`);

            // Making file public to the internet
            file.makePublic(async function (err) {
              if (err) {
                console.error(`Error making file public: ${err}`);
              } else {
                console.log(`File ${file.name} is now public.`);
                const publicUrl = file.publicUrl();
                console.log(`Public URL for ${file.name}: ${publicUrl}`);
              }
            });
          }
        },
      );

      // Optionally, delete the local file after upload
      // fs.unlinkSync(file.path);
      console.log('Upload..........');
      return `https://storage.googleapis.com/${this.bucketName}/${gcsFileName}`;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}

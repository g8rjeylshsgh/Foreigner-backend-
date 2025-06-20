import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

@Injectable()
export class VideoService {
  private uploadPath = join(__dirname, '../../uploads');

  constructor() {
    if (!existsSync(this.uploadPath)) {
      mkdirSync(this.uploadPath, { recursive: true });
    }
  }

  saveVideo(filename: string, fileBuffer: Buffer) {
    const filePath = join(this.uploadPath, filename);
    writeFileSync(filePath, fileBuffer);
    return { message: 'Video uploaded successfully', filePath };
  }

  getUploadPath(): string {
    return this.uploadPath;
  }
}
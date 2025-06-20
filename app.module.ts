import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    VideoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
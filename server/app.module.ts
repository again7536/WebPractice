import { Module } from '@nestjs/common';
import { ViewModule } from './view/view.module';
import { RestModule } from './rest/rest.module';

@Module({
  imports: [ViewModule, RestModule],
})
export class AppModule {}
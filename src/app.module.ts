import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlModule } from './gql/gql.module';
import { QueryModule } from './query/query.module';
import { PackageModule } from './package/package.module';
import { GqlModule } from './gql/gql.module';

@Module({
  imports: [GqlModule, QueryModule, PackageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageDataServiceModule } from './package-data-service/package-data-service.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PackageGqlModule } from './package-gql/package-gql.module';

@Module({
  imports: [PackageDataServiceModule,PackageGqlModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

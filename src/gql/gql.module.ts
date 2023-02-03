import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PackageGqlModule } from 'src/package-gql/package-gql.module';


@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      // autoSchemaFile: true
    }),
     PackageGqlModule
    ],
})
export class GqlModule {}

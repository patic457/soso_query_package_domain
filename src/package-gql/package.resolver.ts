import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PackageType } from "./package.type";


@Resolver(() => PackageType)
export class PackageResolver {
    // constructor(private readonly packageService: PackageService) {}

    constructor( ) {}

    @Query(() => [PackageType])
    package() {
        // return this.packageService.findAll();

        return [{"id":1,"name":"Joge"}]
    }


}
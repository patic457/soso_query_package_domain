import { Field, ID, ObjectType } from "@nestjs/graphql";


@ObjectType('PackageQL')
export class PackageType {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;
}
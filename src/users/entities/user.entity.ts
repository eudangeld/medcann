import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'User email' })
  email: string;

  @Field(() => String, { description: 'User name' })
  name: string;

  @Field(() => String, { description: 'User phone' })
  phone: string;

  @Field(() => Date, { description: 'User birthdate' })
  birth: Date;
}

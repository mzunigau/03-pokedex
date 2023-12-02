import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { JoiValidationSchema } from './config/joi.validation';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    //Es mejor tenerlo arriba por las variables de entorno
    ConfigModule.forRoot(
      {
        load: [EnvConfiguration],
        validationSchema: JoiValidationSchema
      }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    },
    ),

    MongooseModule.forRoot(process.env.MONGODB,
      {
        dbName: 'pokemonsdb'
      }),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {
  constructor(){
    
  }
}

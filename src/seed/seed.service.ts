import { Injectable } from '@nestjs/common';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
  @InjectModel(Pokemon.name)
  private readonly pokemonModel: Model<Pokemon>,
  private readonly http: AxiosAdapter,

  ){}


  async executeSeed(){

    await this.pokemonModel.deleteMany({}); //delete all


    const data = await 
    this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');

    const pokemonToInsert:{name:string, no:number} [] = [];

    data.results.forEach(async ({name, url})=>
    {
      const segments = url.split('/');
      const no: number = +segments[ segments.length - 2]; 

      pokemonToInsert.push({name,no})

    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed!';
  }
  
}

// async executeSEEDs() {
//   await this.pokemonModel.deleteMany({}); //delete all
//   const { data } = await firstValueFrom(
//     this.httpService
//       .get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=50')
//       .pipe(
//         catchError((error: AxiosError) => {
//           console.error(error.response.data);
//           throw 'An error happened!';
//         }),
//       ),
//   );
//   return data;
// }




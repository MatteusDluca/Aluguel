import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { iUser } from './functionary.interface';
import { iUserUpdate } from './functionaryUp.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class FunctionaryService {
  constructor(private readonly prisma: PrismaService) {}
  
  async showUsers() {
    const users = await this.prisma.user.findMany({
      where: {
        role: "User" 
      },
    });
    return users;
  }

  async newUser(userData: iUser) {
    try {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(userData.happyday)) {
        throw new Error('A data happyday deve estar no formato YYYY-MM-DD');
      }
      if (!['Admin', 'User'].includes(userData.role)) {
        throw new Error('O papel do usuário deve ser Admin ou User.');
      }
      
      const user = await this.prisma.user.create({
        data: {
          name: userData.name,
          cpf: userData.cpf,
          happyday: userData.happyday,
          tell: userData.tell,
          role: userData.role,
          address: {
            create: {
              num: userData.address.num,
              cep: userData.address.cep,
              complement: userData.address.complement,
              street: userData.address.street,
            },
          },
        },
        include: {
          address: true,
        },
      });
      return user;
    } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      throw new Error('Erro ao criar o usuário: ' + error.message);
    }
  }
  
  async patchFunctionary(id: string, fnUpdate: iUserUpdate) {
    const fnUp = await this.prisma.user.findUnique({where: {id}})
    if(!fnUp) {
      throw new NotFoundException(`id ${id} não encontrado`)
    }
    
    const updateData: any = {
      name: fnUpdate.name,
      cpf: fnUpdate.cpf,
      happyday: fnUpdate.happyday,
      tell: fnUpdate.tell,
      role: fnUpdate.role,
    };

    if (fnUpdate.address) {
      updateData.address = {
        update: {
          num: fnUpdate.address.num,
          street: fnUpdate.address.street,
          cep: fnUpdate.address.cep,
          complement: fnUpdate.address.complement,
        }
      }
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateData,
      include: {
        address: true,
      },
    });

  return updatedUser
  }
}
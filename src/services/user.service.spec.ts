import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from '../services/app.service';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';

describe('UserService', () => {
  let userService: UserService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [PrismaService, UserService],
    }).compile();

    prismaService = app.get<PrismaService>(PrismaService);
    userService = app.get<UserService>(UserService);
    // Manually trigger the onModuleInit lifecycle hook if needed
    if (prismaService.onModuleInit) {
      await prismaService.onModuleInit();
    }
  });

  describe('root', () => {
    it('should return new user id', async () => {
      const user = await userService.createUser({
        email: 'nextjsvietnam@sonnm.com',
        password: '123456',
        point: 0.0,
        credit: 1000,
        socialLinks: [],
        color: Buffer.from('FF0000'),
        createdAt: new Date(),
      });
      expect(user.id).toBeTruthy();
    });
  });
});

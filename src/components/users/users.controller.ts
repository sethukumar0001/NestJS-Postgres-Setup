import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Req() req, @Res() res, @Body() createUsersDto: CreateUsersDto) {
      console.log(req)
    const user = await this.usersService.create(createUsersDto, req.user);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: 'User Created Successfully',
      data: { ...user },
    });
  }
}

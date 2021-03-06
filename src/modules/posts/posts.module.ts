import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { SqlPostsDao } from './sql-posts.dao';
import { PostsFacade } from './posts.facade';
import { PostsController } from './posts.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { MediaModule } from '../media/media.module';

@Module({
  controllers: [PostsController],
  imports: [forwardRef(() => UsersModule), MediaModule],
  providers: [
    {
      provide: 'PostsDao',
      useClass: SqlPostsDao,
    },
    PostsService,
    PostsFacade,
  ],
  exports: [PostsService, PostsFacade],
})
export class PostsModule {}

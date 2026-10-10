import { sqliteTable,text,integer,primaryKey,index } from 'drizzle-orm/sqlite-core';
export const progressEvents=sqliteTable('progress_events',{userId:text('user_id').notNull(),id:text('id').notNull(),at:integer('at').notNull(),payload:text('payload').notNull()},t=>[primaryKey({columns:[t.userId,t.id]}),index('events_by_user_time').on(t.userId,t.at)]);

CREATE TABLE `progress_events` (
	`user_id` text NOT NULL,
	`id` text NOT NULL,
	`at` integer NOT NULL,
	`payload` text NOT NULL,
	PRIMARY KEY(`user_id`, `id`)
);
--> statement-breakpoint
CREATE INDEX `events_by_user_time` ON `progress_events` (`user_id`,`at`);
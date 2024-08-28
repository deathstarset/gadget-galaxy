ALTER TABLE "carts" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "updated_at" SET NOT NULL;
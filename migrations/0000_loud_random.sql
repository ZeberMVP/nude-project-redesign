CREATE TYPE "public"."category" AS ENUM('tees', 'hoodies & sweaters', 'bottoms', 'swimwear', 'knitwear', 'shirts & polos', 'underwear', 'outerwear');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "carts" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar(191),
	"paymentIntentId" varchar(191),
	"clientSecret" varchar(191),
	"items" json DEFAULT 'null'::json,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "email_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" varchar(191),
	"email" varchar(191) NOT NULL,
	"token" varchar(191) NOT NULL,
	"newsletter" boolean DEFAULT false NOT NULL,
	"marketing" boolean DEFAULT false NOT NULL,
	"transactional" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(191) NOT NULL,
	"description" text,
	"image" text,
	"category" "category" DEFAULT 'tees' NOT NULL,
	"price" numeric(10, 2) DEFAULT '0' NOT NULL,
	"inventory" numeric DEFAULT '0' NOT NULL,
	"createdAt" timestamp(3) DEFAULT CURRENT_TIMESTAMP(3) NOT NULL
);

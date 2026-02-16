-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('pending', 'halt', 'confirmed');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "bookingStatus" "BookingStatus" NOT NULL DEFAULT 'pending';

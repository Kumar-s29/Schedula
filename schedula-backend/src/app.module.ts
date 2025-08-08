import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import * as dotenv from 'dotenv';
import { AvailabilityModule } from './availability/availability.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ElasticSchedulingModule } from './elasticScheduling/elastic-scheduling.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: false,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }),
    AuthModule,
    UsersModule,
    DoctorModule,
    PatientModule,
    AvailabilityModule,
    AppointmentModule,
    ElasticSchedulingModule,
  ],
})
export class AppModule {}

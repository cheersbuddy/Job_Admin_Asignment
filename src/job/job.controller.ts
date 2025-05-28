import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { JobService } from './job.service';
import { AddJobDto } from './addjob.dto';

@Controller('job')
export class JobController {
constructor(private readonly jobService: JobService) {}

@Post('fetch-jobs')
@HttpCode(HttpStatus.OK)
async fetchJobs(@Body() body: any) {
return this.jobService.fetchJobs();
}

@Post('add-job')
@HttpCode(HttpStatus.CREATED)
async addJob(@Body() body: AddJobDto) {
console.log(AddJobDto, 'AddJobDto');
return this.jobService.addJob(body);
}
}
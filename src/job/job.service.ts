import { Injectable, InternalServerErrorException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { AddJobDto } from './addjob.dto';
import axios from 'axios';

@Injectable()
export class JobService {
constructor(
@InjectRepository(Job)
private readonly jobRepository: Repository<Job>,
) {}

async fetchJobsFromExternal(body): Promise<any> {
try {
const response = await axios.post('http://localhost:3000/jobs', body);
return response.data;
} catch (error) {
throw new Error('Failed to fetch jobs from external API');
}
}

async addJobToExternal(body, schema): Promise<any> {
try {
const response = await axios.post('http://external-api/newjob', {
...body,
schema,
});
return response.data;
} catch (error) {
throw new Error('Failed to add job to external API');
}
}

async fetchJobs(): Promise<Job[]> {
try {
return await this.jobRepository.find({
where: {
status: 1,
is_draft: false,
},
});
} catch (err) {
throw new InternalServerErrorException({
message: 'Internal Server error. Something went wrong',
statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
});
}
}

async addJob(body: AddJobDto): Promise<{ message: string; statusCode: number }> {
  console.log('hello')
  try {
    const job = this.jobRepository.create({
      ...body,
      status: body.status ? 1 : 0,         // map boolean to number
      is_draft: body.is_draft ?? false,    // ensure default fallback
    });
    console.log(job, 'job')
    await this.jobRepository.save(job);
    return {
      message: 'Job added successfully',
      statusCode: 201,
    };
  } catch (error) {
    throw new InternalServerErrorException({
      message: 'Internal Server error. Something went wrong',
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}

}
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BackupService } from './backup.service';

describe('BackupService', () => {
  let service: BackupService;
  let httpClientSpy: { post: jasmine.Spy };


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({});
    service = new BackupService(httpClientSpy as any);
    // service = TestBed.inject(BackupService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should to return true on backup ok', (done: DoneFn) => {
    const rsp = { status: 200, msg: 'ok' };
    const bodyRequest = ['cook', 'clean'];

    httpClientSpy.post.and.returnValue(of(rsp));
    service.set(bodyRequest)
      .subscribe(res => {
        expect(res).toBeTruthy();
        done();
      })
  })


  it('should to return false on error', (done: DoneFn) => {
    const rsp = { status: 500, msg: 'problem on access to DB' };
    const bodyRequest = ['cook', 'clean'];

    httpClientSpy.post.and.returnValue(of(rsp));
    service.set(bodyRequest)
      .subscribe(res => {
        expect(res).toBeFalsy();
        done();
      })
  })
});

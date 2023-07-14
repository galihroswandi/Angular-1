import { Component } from '@angular/core';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
})
export class FormEmployeeComponent {
  insertEmployee(event: any) {
    alert('oke');
  }

  data = {
    jenisIdentitas: [{ option: 'SIM' }, { option: 'KTP' }],
    statusPernikahan: [
      { option: 'Lajang' },
      { option: 'Menikah' },
      { option: 'Janda' },
      { option: 'Duda' },
    ],
    pendidikanAkhir: [
      { option: 'SMK/SMU/Sederajat' },
      { option: 'D1' },
      { option: 'D2' },
      { option: 'D3' },
      { option: 'S1' },
      { option: 'S2' },
      { option: 'S3' },
    ],
    divisi: [
      { option: 'PMO' },
      { option: 'BSO' },
      { option: 'SDO' },
      { option: 'RMO' },
      { option: 'DSO' },
      { option: 'KMO' },
      { option: 'BO' },
    ],
    resource: [
      { option: 'RMO' },
      { option: 'PMO' },
      { option: 'BSO' },
      { option: 'SDO' },
      { option: 'RMO' },
      { option: 'DSO' },
      { option: 'KMO' },
      { option: 'BO' },
    ],
    posisi: [
      { option: 'Developer' },
      { option: 'Developer Analyst' },
      { option: 'System Analyst' },
      { option: 'Project Manager' },
      { option: 'Project Admin' },
      { option: 'Quality Control' },
      { option: 'Technical Writter' },
      { option: 'Data Scientist' },
      { option: 'Support Surveilance' },
      { option: 'Support Leader' },
      { option: 'Support Specialist' },
      { option: 'Subject Matter Expert' },
      { option: 'UI / UX' },
      { option: 'System Architect' },
      { option: 'Digital Solution Senior Officer' },
      { option: 'RF Engineer' },
      { option: 'System Administration' },
      { option: 'Senior Training Officer' },
      { option: 'Field Engineer Radar' },
      { option: 'Data Analyst' },
      { option: 'Consultan' },
      { option: 'Linguistic' },
      { option: 'Radar Engineer' },
      { option: 'Inventory Admin' },
      { option: 'Machine Learning Engineer' },
    ],
    statusKaryawan: [
      { option: 'Permanent' },
      { option: 'Fixed-term contracts' },
      { option: 'Freelance' },
    ],
    penempatanKerja: [{ option: 'Jakarta' }, { option: 'Yogyakarta' }],
    userRoleAplikasi: [
      { option: 'HRD' },
      { option: 'PMO Admin' },
      { option: 'PMO Employee' },
      { option: 'BSO Admin' },
      { option: 'BSO Employee' },
      { option: 'SDO Admin' },
      { option: 'SDO Employee' },
      { option: 'RMO Admin' },
      { option: 'RMO Employee' },
      { option: 'Trello Admin' },
      { option: 'Project Manager' },
      { option: 'System Analyst' },
      { option: 'RMO Employee' },
      { option: 'Finance' },
    ],
  };
}

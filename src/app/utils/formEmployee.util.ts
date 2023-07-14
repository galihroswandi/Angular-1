import { Injectable } from '@angular/core';
import { CookiesUtils } from './cookies.util';
import { AuthUtil } from './auth.util';

@Injectable({
  providedIn: 'root',
})
export class EmployeeUtil {
  constructor(private cookie: CookiesUtils, private authUtils: AuthUtil) {}

  data = {
    nameInput: {
      name1: 'User-ID',
      name2: 'Nama-Lengkap',
      name3: 'Tempat-Lahir',
      name4: 'Tanggal-Lahir',
      name5: 'Alamat-Email',
      name6: 'ID-Telegram',
      name7: 'Nomor-Telepon',
      name8: 'Jenis-Identitas',
      name9: 'Nomor-Identitas',
      name10: 'Status-Pernikahan',
      name11: 'alamatKtp',
      name12: 'Pendidikan-Akhir',
      name13: 'Nama-Institusi',
      name14: 'Jurusan',
      name15: 'Nik-Karyawan',
      name16: 'Divisi',
      name17: 'Resource',
      name18: 'Posisi',
      name19: 'Status-Karyawan',
      name20: 'Penempatan-Kerja',
      name21: 'Tanggal-Bergabung',
      name22: 'User-Role-Aplikasi',
    },
    dataOptionForm: {
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
    },
  };

  removeValue(event: any) {
    this.authUtils.removeValueForm(
      event,
      this.data.nameInput.name1,
      this.data.nameInput.name2,
      this.data.nameInput.name3,
      this.data.nameInput.name4,
      this.data.nameInput.name5,
      this.data.nameInput.name6,
      this.data.nameInput.name7,
      this.data.nameInput.name8,
      this.data.nameInput.name9,
      this.data.nameInput.name10,
      this.data.nameInput.name11,
      this.data.nameInput.name12,
      this.data.nameInput.name13,
      this.data.nameInput.name14,
      this.data.nameInput.name15,
      this.data.nameInput.name16,
      this.data.nameInput.name17,
      this.data.nameInput.name18,
      this.data.nameInput.name19,
      this.data.nameInput.name20,
      this.data.nameInput.name21,
      this.data.nameInput.name22
    );
  }

  dataPost(event: any, loading: boolean) {
    const token = this.cookie.getCookies();
    if (!token.accessToken) {
      alert('Silahkan login terlebih dahulu');
    }

    const errors = [];

    const data = {
      karyawanId:
        event.target.elements[this.data.nameInput.name1].value.toString() ||
        errors.push('User ID'),
      namaLengkap:
        event.target.elements[this.data.nameInput.name2].value.toString() ||
        errors.push('Nama Lengkap'),
      tempatLahir:
        event.target.elements[this.data.nameInput.name3].value.toString() ||
        errors.push('Tempat Lahir'),
      tglLahir:
        event.target.elements[this.data.nameInput.name4].value.toString() ||
        errors.push('Tanggal Lahir'),
      email:
        event.target.elements[this.data.nameInput.name5].value.toString() ||
        errors.push('Alamat Email'),
      telegramId:
        event.target.elements[this.data.nameInput.name6].value.toString() ||
        errors.push('ID Telegram'),
      nomorTelepon:
        event.target.elements[this.data.nameInput.name7].value.toString() ||
        errors.push('Nomor Telepon'),
      jenisIdentitas:
        event.target.elements[this.data.nameInput.name8].value.toString() ||
        errors.push('Jenis Identitas'),
      nomorIdentitas:
        event.target.elements[this.data.nameInput.name9].value.toString() ||
        errors.push('Nomor Identitas'),
      statusPernikahan:
        event.target.elements[this.data.nameInput.name10].value.toString() ||
        errors.push('Status Pernikahan'),
      alamatKtp:
        event.target.elements[this.data.nameInput.name11].value.toString() ||
        errors.push('Alamat Sesuai KTP'),
      pendidikanAkhir:
        event.target.elements[this.data.nameInput.name12].value.toString() ||
        errors.push('Pendidikan Akhir'),
      namaInstitusi:
        event.target.elements[this.data.nameInput.name13].value.toString() ||
        errors.push('Nama Institusi'),
      jurusan:
        event.target.elements[this.data.nameInput.name14].value.toString() ||
        errors.push('Jurusan'),
      nikKaryawan:
        event.target.elements[this.data.nameInput.name15].value.toString() ||
        errors.push('Nik Karyawan'),
      divisi:
        event.target.elements[this.data.nameInput.name16].value.toString() ||
        errors.push('Divisi'),
      resource:
        event.target.elements[this.data.nameInput.name17].value.toString() ||
        errors.push('Resource'),
      posisi:
        event.target.elements[this.data.nameInput.name18].value.toString() ||
        errors.push('Posisi'),
      statusKaryawan:
        event.target.elements[this.data.nameInput.name19].value.toString() ||
        errors.push('Status Karyawan'),
      penempatan:
        event.target.elements[this.data.nameInput.name20].value.toString() ||
        errors.push('Penempatan Kerja'),
      tglBergabung:
        event.target.elements[this.data.nameInput.name21].value.toString() ||
        errors.push('Tanggal Bergabung'),
      userRole:
        event.target.elements[this.data.nameInput.name22].value.toString() ||
        errors.push('User Role Aplikasi'),
      accessToken: token.accessToken,
    };

    if (errors.length > 0) {
      alert(`Error Field Tidak boleh kosong :\n${errors.join('\n')}`);
      return false;
    }

    return data;
  }
}

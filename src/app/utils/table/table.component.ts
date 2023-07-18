import { Component, OnInit, Input } from '@angular/core';

interface TableRow {
  id: number;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() dtoptions: DataTables.Settings = {};
  @Input() data: any[] = [];

  anything: TableRow = { id: 1 };

  ngOnInit(): void {
    this.dtoptions = {
      responsive: true,
    };
  }
}
